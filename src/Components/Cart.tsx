"use client";
import React, { useEffect, useState } from "react";
import { StateProps } from "../../Type";
import emptyCart from "../../public/assets/emptyCart.png";
import { resetCart } from "@/redux/orebiSlice";
import Container from "./Container";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {

    const { productData } = useSelector((state: StateProps) => state.orebi);

    const dispatch = useDispatch();

    const [totalAmt, setTotalAmt] = useState(0);

    const handleReset = () => {

        const confirmed = window.confirm("Are You Sure To Reset Your Cart?");

        confirmed && dispatch(resetCart());

        toast.success("Cart Reseted Successfully!");

    };

    return (
        <Container>
            {productData?.length > 0 ? (
                <div className="pb-20">
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

                    <button
                        className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
                        onClick={handleReset}
                    >
                        Reset cart
                    </button>
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