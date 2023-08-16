import React from "react";
import Image from "next/image";

const Home = () => {
    return (
        <div className="mt-24">
            <section id="home" className="bg-white dark:bg-gray-900 dark:text-white body-font">
                <div className="mx-auto flex py-16 md:py-24 md:flex-row flex-col items-center max-w-7xl">
                    <div className="flex justify-center items-center px-12">
                        <Image
                            className="object-cover object-center rounded-md"
                            src=""
                            alt=""
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-w-3xl px-8 lg:px-12">
                        <h1 className="text-4xl font-orbitron font-bold mt-6 md:mt-0 md:text-5xl">Ahmed Saleem Shaikh</h1>
                        <p className="text-lg font-orbitron font-semibold mt-4 mb-6 md:text-[1.4rem] md:py-4 py-2">
                            Full Stack Developer
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home;