import React from 'react';

const Contact = () => {
    return (
        <div className="pt-[60px] bg-[#e5e7eb] dark:bg-[#04040e]">
            <section id="contact">
                <div className="px-5 md:py-[3.8rem] py-12 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-4xl text-3xl font-semibold font-orbitron mb-2 dark:text-white">Contact</h1>
                    </div>
                    <div className="md:w-[70%] mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm font-semibold font-orbitron dark:text-white">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-slate-400 dark:bg-gray-600 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm font-semibold font-orbitron dark:text-white">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-slate-400 dark:bg-gray-600 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm font-semibold font-orbitron dark:text-white">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-slate-400 dark:bg-gray-600 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none dark:text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none text-lg bg-gradient-to-tr rounded shadow hover:bg-gradient-to-tl from-cyan-600 to-blue-900">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
};

export default Contact;