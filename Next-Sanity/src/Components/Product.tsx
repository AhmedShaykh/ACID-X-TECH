"use client";
import React, { FC } from "react";
import { ProductProps } from "../../Type";
import { urlFor } from "@/lib/sanityClient";
import { addToCart } from "@/redux/orebiSlice";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";

interface Props {
    product: ProductProps;
    bg?: string;
};

const Product: FC<Props> = ({ product, bg }) => {

    const dispatch = useDispatch();

    return (
        <div className="w-full relative group border-[1px] border-black-20 hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group">
            <div className="w-full h-80 flex items-center justify-center bg-white overflow-hidden">
                <div className={`relative ${bg}`}>
                    <Link href={`/product/${product?.slug?.current}`}>
                        <Image
                            src={urlFor(product?.image).url()}
                            alt="Product Image"
                            width={700}
                            height={700}
                            className="w-72 h-72 object-contain"
                        />
                    </Link>

                    <div className="abosute bottom-0 flex items-center gap-5 justify-center translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300">
                        <button
                            className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
                            onClick={() => {
                                dispatch(addToCart(product));
                                toast.success(
                                    `${product?.title.substring(0, 12)}... Added To Cart`
                                );
                            }}
                        >
                            <span>
                                <AiOutlineShopping />
                            </span>
                            Add To Bag
                        </button>

                        <Link
                            href={`/product/${product?.slug?.current}`}
                            className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
                        >
                            <span className="pr-1">
                                <BsArrowsFullscreen />
                            </span>
                            Quick View
                        </Link>
                    </div>

                    {product?.isnew && (
                        <div className="absolute top-2 right-2 z-40">
                            <p className="bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md">
                                New
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-80 py-6 flex flex-col gap-1 px-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg text-primeColor font-bold">
                        {product?.title.substring(0, 12)}
                    </h2>

                    <div className="flex items-center gap-2">
                        <p className="text-[#767676] text-xs line-through">
                            ${product?.rowprice}
                        </p>

                        <p className="font-semibold">${product?.price}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-[#767676] text-sm">
                        A Product By {" "}

                        <span className="font-semibold text-primeColor">
                            {product?.brand}
                        </span>
                    </p>

                    <div className="flex items-center gap-1">
                        <MdOutlineStarPurple500 className="text-lg text-yellow-500" />
                        <span className="font-medium text-sm">{product?.ratings}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;