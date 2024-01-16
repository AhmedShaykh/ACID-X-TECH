import Banner from "@/Components/Banner";
import BestSellers from "@/Components/BestSellers";
import HomeBanner from "@/Components/HomeBanner";
import NewArrival from "@/Components/NewArrival";
import YearProduct from "@/Components/YearProduct";
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

    const newArrivalProducts = await client.fetch(newArrivalQuery);

    const bestSellersProducts = await client.fetch(bestSellersQuery);

    const specialOffersProducts = await client.fetch(specialOffersQuery);

    return (
        <div className="text-sm overflow-hidden min-h-screen">
            <Banner banners={banners} />
            <NewArrival products={newArrivalProducts} />
            <HomeBanner />
            <BestSellers products={bestSellersProducts} title="Our Bestsellers" />
            <YearProduct />
            <BestSellers products={specialOffersProducts} title="Special Offers" />
        </div>
    )
};

export default Home;