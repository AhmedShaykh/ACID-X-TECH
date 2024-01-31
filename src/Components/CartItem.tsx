"use client";
import React, { FC } from "react";
import { ProductProps } from "../../Type";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "@/redux/orebiSlice";
import { urlFor } from "@/lib/sanityClient";
import Price from "./Price";
import { useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

interface Props {
    item: ProductProps;
};

const CartItem: FC<Props> = ({ item }) => {

    const dispatch = useDispatch();

    const increase = (id: string) => {

        dispatch(increaseQuantity({ _id: id }));

        toast.success("Product Added Successully");

    };

    const decrease = (id: string) => {

        if (item.quantity <= 1) {

            toast("Product Less Than To 1", { icon: "🤷🏻‍♂️" });

        } else {

            dispatch(decreaseQuantity({ _id: id }));

            toast.success("Product Reduced Successfully");

        }
    };

    return (
        <div className="w-full grid grid-cols-5 mb-4 border py-2">
            <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
                <ImCross
                    className="text-primeColor hover:text-red-500 cursor-pointer duration-300 mx-2"
                    onClick={() => {
                        dispatch(deleteProduct(item._id));
                        toast.success(
                            `${item?.title.substring(0, 12)}... Deleted From Cart`
                        );
                    }}
                />

                <Link href={`/product/${item?.slug?.current}`}>
                    <Image
                        className="w-32 h-32 object-contain ml-5"
                        src={urlFor(item?.image).url()}
                        alt="Product Image"
                        width={50}
                        height={50}
                    />
                </Link>

                <h1 className="font-semibold">{item?.title.substring(0, 20)}</h1>
            </div>

            <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0">
                <p className="flex w-1/3 items-center text-lg font-semibold">
                    <Price amount={item?.price} />
                </p>

                <div className="flex w-1/3 items-center gap-6 text-lg">
                    <span
                        className="w-6 h-6 bg-black text-white text-2xl flex items-center justify-center cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500"
                        onClick={() => decrease(item?._id)}
                    >
                        -
                    </span>

                    <p className="font-medium">{item?.quantity}</p>

                    <span
                        className="w-6 h-6 bg-black text-white text-2xl flex items-center justify-center cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500"
                        onClick={() => increase(item?._id)}
                    >
                        +
                    </span>
                </div>

                <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
                    <p>${item.quantity * item.price}</p>
                </div>
            </div>
        </div>
    )
};

export default CartItem;