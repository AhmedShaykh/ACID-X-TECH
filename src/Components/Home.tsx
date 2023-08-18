import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getBanner() {

    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=banner`, { cache: 'no-cache' });

    if (!res.ok) {
        throw new Error('Failed to Fetch Data');
    }

    return res.json();

};


const Home = async () => {

    const banner = await getBanner();

    return (
        <div className="mt-[5.75rem]">
            <section id="home" className="bg-[#e5e7eb] dark:bg-[#04040e] dark:text-white body-font">

                {banner.items.map((item: any, i: number) => {

                    const bannerImg = banner.includes.Asset.find((img: any) => img.sys.id === item.fields.heroImage.sys.id);

                    return (
                        <div key={i} className="mx-auto flex pt-[3.5rem] pb-6 md:py-24 md:flex-row flex-col items-center max-w-7xl">
                            <div className="flex justify-center items-center md:pl-20 px-2">
                                <img
                                    className="object-cover object-center rounded-md md:mb-0 mb-4 w-[300px] md:w-[350px] h-[300px] md:h-[350px]"
                                    src={bannerImg.fields.file.url}
                                    alt="Hero"
                                />
                            </div>

                            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-w-3xl px-5 lg:px-12">
                                <h1 className="text-4xl md:text-[2.5rem] lg:text-5xl font-orbitron font-bold mt-6 md:mt-0">
                                    {item.fields.title}
                                </h1>

                                <p className="text-lg leading-8 font-orbitron font-semibold mt-4 mb-6 md:text-[1.4rem] md:py-4 py-2">
                                    {documentToReactComponents(item.fields.description)}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    )
};

export default Home;