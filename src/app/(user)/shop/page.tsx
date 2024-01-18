"use client";
import React, { useEffect, useState } from "react";
import { ProductProps } from "../../../../Type";
import Container from "@/Components/Container";
import { products } from "@/lib/sanityClient";
import Product from "@/Components/Product";

const ShopPage = () => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const data = await products();

                setProductData(data);

            } catch (error) {

                console.error("Error Fetching Product Data:", error);

            }

        };

        fetchData();

    }, []);

    return (
        <Container>
            <div className="flex items-center justify-between pb-10">
                <h2 className="text-2xl text-primeColor font-bold">All Products</h2>
                <div className="flex items-center gap-4">
                </div>
            </div>
        </Container>
    )
};

export default ShopPage;