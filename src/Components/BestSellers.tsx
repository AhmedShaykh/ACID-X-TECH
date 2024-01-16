import React, { FC } from "react";
import { ProductProps } from "../../Type";
import Container from "./Container";
import Product from "./Product";
import Heading from "./Heading";

interface Props {
    products: ProductProps[];
    title?: string;
};

const BestSellers: FC<Props> = ({ products, title }) => {
    return (
        <Container className="w-full pb-20">
            <Heading heading={title} />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products?.map((item: ProductProps) => (
                    <Product key={item?._id} product={item} bg="#ffffff" />
                ))}
            </div>
        </Container>
    )
};

export default BestSellers;