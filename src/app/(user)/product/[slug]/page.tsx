import React, { FC } from "react";
import { client, urlFor } from "@/lib/sanityClient";
import { ProductProps } from "../../../../../Type";
import Container from "@/Components/Container";
import { groq } from "next-sanity";
import Image from "next/image";

interface Props {
    params: {
        slug: string;
    };
};

export const generateStaticParams = async () => {

    const query = groq`*[_type == "product"]{
        slug
    }`;

    const slugs: any = await client.fetch(query);

    const slugRoutes = slugs.map((slug: any) => slug?.slug?.current);

    return slugRoutes?.map((slug: string) => ({
        slug
    }));

};

const specialOffersQuery = groq`*[_type == "product" && position == "on Sale"]{
    ...
} | order(_createdAt asc)`;

const ProductPage: FC<Props> = async ({ params: { slug } }) => {

    const query = groq`*[_type == "product" && slug.current == $slug][0]{
        ...
    }`;

    const product: ProductProps = await client.fetch(query, { slug });

    const specialOffersProduct = await client.fetch(specialOffersQuery);

    return (
        <Container className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4">
                <div className="h-full xl:col-span-2">
                    <Image
                        src={urlFor(product?.image).url()}
                        alt="product image"
                        className="w-full h-full object-contain"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </Container>
    )
};

export default ProductPage;