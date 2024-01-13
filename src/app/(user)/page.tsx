import Banner from "@/Components/Banner";
import { client } from "@/lib/sanityClient";
import { groq } from "next-sanity";

export const revalidate = 10;

const bannerQuery = groq`*[_type == "banner"]{
  image,
  _id
} | order(_createdAt asc)`;

const newArrivalQuery = groq`*[_type == "product" && position == "New Arrivals"]{
    ...
} | order(_createdAt asc)`;

const bestSellersQuery = groq`*[_type == "product" && position == "Bestsellers"]{
    ...
} | order(_createdAt asc)`;
const specialOffersQuery = groq`*[_type == "product" && position == "Special Offers"]{
    ...
} | order(_createdAt asc)`;

const Home = async () => {

    const banners = await client.fetch(bannerQuery);

    const newArrivalProducts = await client.fetch(bestSellersQuery);

    const bestSellersProducts = await client.fetch(newArrivalQuery);

    const specialOffersProducts = await client.fetch(specialOffersQuery);

    return (
        <div className="text-sm overflow-hidden min-h-screen">
            <Banner banners={banners} />
        </div>
    )
};

export default Home;