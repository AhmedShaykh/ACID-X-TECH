import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getServices() {

    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=services`, { cache: 'no-cache' });

    if (!res.ok) {
        throw new Error('Failed to Fetch Data');
    }

    return res.json();

};

const Services = async () => {

    const services = await getServices();

    return (
        <section id="services" className="bg-[#e5e7eb] dark:bg-[#04040e]">
            <div className="px-8 py-8 lg:py-12 mx-4 xs:mx-8 sm:mx-16">
                <h1 className="text-center sm:text-4xl text-3xl font-semibold font-orbitron mb-12 dark:text-white">
                    Services
                </h1>

                <div className="flex flex-wrap gap-3 lg:gap-0 -m-3">

                    {services.items.map((item: any) => {
                        return (
                            <div className="px-2 py-4 lg:w-1/3">
                                <div className="h-full bg-white dark:bg-[#070717] bg-opacity-40 px-2 sm:px-3 pt-12 pb-20 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest font-orbitron text-sm title-font font-semibold dark:text-slate-400 text-slate-900 mb-6">
                                        CATEGORY
                                    </h2>

                                    <h1 className="sm:text-2xl text-xl font-orbitron font-medium dark:text-white mb-5">
                                        {item.fields.title}
                                    </h1>

                                    <p className="leading-7 mb-3">
                                        {documentToReactComponents(item.fields.description)}
                                    </p>

                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="dark:text-slate-400 text-slate-900 inline-flex items-center leading-none text-sm pr-3 py-1">
                                            <svg
                                                className="w-4 h-4 mr-1"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx={12} cy={12} r={3} />
                                            </svg>
                                            1.2 K
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default Services;