"use client";
import React, { FC } from "react";
import { ProductProps } from "../../Type";
import { addToCart } from "@/redux/orebiSlice";
import Price from "./Price";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

interface Props {
    product: ProductProps;
};

const ProductInfo: FC<Props> = ({ product }) => {

    const dispatch = useDispatch();

    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">
                {product?.title}
            </h2>

            <div className="flex items-center gap-4">
                <p className="text-lg font-normal text-gray-500 line-through">
                    <Price amount={product?.rowprice} />
                </p>

                <Price amount={product?.price} className="text-lg font-bold" />

                <p className="text-sm">
                    You Saved{" "}
                    <Price
                        className="bg-green-700 text-white px-2 rounded-md"
                        amount={product?.rowprice - product?.price}
                    />
                    {" "}
                    From This Item
                </p>
            </div>

            <p className="text-sm tracking-wide text-gray-600">
                {product?.description}
            </p>

            <p className="text-sm text-gray-500">Be The First To Leave A Review.</p>

            <button
                className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg rounded-md"
                onClick={() => {
                    dispatch(addToCart(product));
                    toast.success(
                        `${product?.title.substring(0, 12)}... Added To Cart`
                    );
                }}
            >
                Add To Cart
            </button>

            <p className="font-normal text-sm">
                <span className="text-base font-medium">Categories:</span>

                Spring Collection, Streetwear, Women Tags: Featured SKU: N/A
            </p>
        </div>
    )
};

export default ProductInfo;