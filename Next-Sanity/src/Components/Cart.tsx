"use client";
import { useEffect, useState } from "react";
import { StateProps } from "../../Type";
import emptyCart from "../../public/assets/emptyCart.png";
import { resetCart } from "@/redux/orebiSlice";
import Container from "./Container";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import Price from "./Price";

const Cart = () => {

    const { productData } = useSelector((state: StateProps) => state.orebi);

    const [totalAmt, setTotalAmt] = useState(0);

    const { data: session } = useSession();

    const dispatch = useDispatch();

    useEffect(() => {

        let price = 0;

        productData.map((item) => {

            price += item?.price * item?.quantity;

            return price;

        });

        setTotalAmt(price);

    }, [productData]);

    const handleReset = () => {

        const confirmed = window.confirm("Are You Sure To Reset Your Cart?");

        confirmed && dispatch(resetCart());

        toast.success("Cart Reset Successfully!");

    };

    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );

    const createCheckout = async () => {

        if (session?.user) {

            const stripe = await stripePromise;

            const response = await fetch("http://localhost:3000/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "appication/json" },
                body: JSON.stringify({
                    items: productData,
                    email: session?.user?.email,
                })
            });

            const data = await response.json();

            if (response.ok) stripe?.redirectToCheckout({ sessionId: data.id });

        } else {

            toast.error("Please Sign In To Make Checkout");

        }

    };

    return (
        <Container>
            {productData?.length > 0 ? (
                <div className="pb-4">
                    <div className="w-full h-20 bg-[#f5f7f7] text-primeColor hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
                        <h2 className="col-span-2">Product</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Sub Total</h2>
                    </div>

                    <div className="mt-5">
                        {productData.map((item) => (
                            <div key={item?._id}>
                                <CartItem item={item} />
                            </div>
                        ))}
                    </div>

                    <div className="max-w-7xl gap-4 flex justify-center mt-8">
                        <div className="w-[28rem] flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold text-center">Cart Totals</h1>

                            <div>
                                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                    Subtotal{" "}
                                    <span>
                                        <Price amount={totalAmt} />
                                    </span>
                                </p>

                                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                                    Shipping Charge
                                    <span className="font-semibold tracking-wide font-titleFont">
                                        <Price amount={0} />
                                    </span>
                                </p>

                                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                                    Total
                                    <span className="font-bold tracking-wide text-lg font-titleFont">
                                        <Price amount={totalAmt} />
                                    </span>
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <button
                                    className="py-2 px-10 bg-red-500 text-white font-semibold uppercase hover:bg-red-700 duration-300"
                                    onClick={handleReset}
                                >
                                    Reset cart
                                </button>

                                <button
                                    className="h-10 px-8 bg-primeColor text-white hover:bg-black duration-300"
                                    onClick={createCheckout}
                                >
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <motion.div
                    className="flex flex-col justify-center items-center gap-4 pb-20"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div>
                        <Image
                            src={emptyCart}
                            alt="emptyCart"
                            className="w-80 rounded-lg p-4 mx-auto"
                        />
                    </div>

                    <div className="max-w-[500px] p-4 py-8 bg-white flex flex-col gap-4 items-center rounded-md shadow-lg">
                        <h1 className="text-xl font-bold uppercase">
                            Your Cart Feels Lonely.
                        </h1>
                        <p className="text-sm text-center px-10 -mt-2">
                            Your Shopping Cart Lives To Serve. Give It Purpose - Fill It With
                            Books, Electronics, Videos, etc. and Make It Happy.
                        </p>
                        <Link
                            className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-semibold text-lg text-gray-200 hover:text-white duration-300"
                            href={"/"}
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </motion.div>
            )}
        </Container>
    )
};

export default Cart;