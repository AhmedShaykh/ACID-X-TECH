import React, { FC } from "react";
import { ProductProps } from "../../Type";
import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";

interface Props {
    product: ProductProps;
    bg?: string;
};

const Product: FC<Props> = ({ product, bg }) => {
    return (
        <div className="w-full relative group border-[1px] border-black hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group">
            <div className="w-full h-80 flex items-center justify-center bg-white overflow-hidden">
                <div className={`relative ${bg}`}>
                    <Link href={`/product/${product?.slug?.current}`}>
                        <Image
                            src={urlFor(product?.image).url()}
                            alt="product image"
                            width={700}
                            height={700}
                            className="w-72 h-72 object-contain"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Product;