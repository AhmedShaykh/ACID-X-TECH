"use client";
import React, { ChangeEvent, useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        message: ""
    });

    const setVal = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const userData = async (e: ChangeEvent<HTMLFormElement>) => {

        e.preventDefault();

        const { name, email, message } = inpval;

        if (name === "") {
            toast.error("Name Is Required!");
        } else if (email === "") {
            toast.error("Email Is Required!");
        } else if (!email.includes("@")) {
            toast.error("Includes @ In Your Email!");
        } else if (message === "") {
            toast.error("Message Is Required!");
        } else {
            toast.success("Your Message Successfully Sent!");

            setInpval({ ...inpval, name: "", email: "", message: "" });
        }
    };

    return (
        <div className="pt-[60px] bg-[#e5e7eb] dark:bg-[#04040e]">
            <section id="contact">
                <div className="px-5 md:py-[3.8rem] py-12 mx-auto">

                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-4xl text-3xl font-semibold font-orbitron mb-2 dark:text-white">Contact</h1>
                    </div>

                    <div className="md:w-[70%] mx-auto">
                        <form className="flex flex-wrap -m-2" onSubmit={userData}>
                            <div className="p-2 w-full">
                                <div>
                                    <label className="leading-7 text-md font-semibold dark:font-medium font-orbitron dark:text-white">Name</label>
                                    <input
                                        className="w-full bg-slate-400 dark:bg-gray-600 bg-opacity-40 rounded my-1 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={inpval.name}
                                        onChange={setVal}
                                    />
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-md font-semibold dark:font-medium font-orbitron dark:text-white">Email</label>
                                    <input
                                        className="w-full bg-slate-400 dark:bg-gray-600 bg-opacity-40 rounded my-1 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={inpval.email}
                                        onChange={setVal}
                                    />
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-md font-semibold dark:font-medium font-orbitron dark:text-white">Message</label>
                                    <textarea
                                        className="w-full bg-slate-400 dark:bg-gray-600 bg-opacity-40 rounded my-1 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none dark:text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        id="message"
                                        name="message"
                                        value={inpval.message}
                                        onChange={setVal}
                                    />
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <button
                                    className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none text-lg bg-gradient-to-tr rounded shadow hover:bg-gradient-to-tl from-cyan-600 to-blue-900"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div >
    )
};

export default Contact;