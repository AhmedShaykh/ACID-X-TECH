import React from "react";
import Link from "next/link";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-[#e5e7eb] dark:bg-[#04040e] px-14 border-t border-neutral-300 dark:border-stone-700">
            <div className="px-5 py-8 mx-auto flex items-center sm:flex-row sm:gap-y-0 gap-y-2 flex-col max-w-7xl">
                <div className="flex items-center space-x-2">
                    <h2 className="inline md:hidden text-lg font-orbitron font-bold cursor-pointer tracking-wider">
                        ACID X
                    </h2>
                    <h2 className="hidden md:inline text-lg font-orbitron font-bold cursor-pointer tracking-wider">
                        ACID X TECH
                    </h2>
                </div>

                <p className="sm:inline text-sm dark:text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0 mt-4 font-semibold dark:font-medium">
                    © 2023 <span className="font-orbitron tracking-widest">
                        <Link
                            className="text-neutral-900 hover:text-cyan-500 dark:text-white dark:hover:text-teal-500 cursor-pointer font-semibold dark:font-medium ml-2"
                            href="https://www.upwork.com/workwith/ahmedshaykh"
                            target="_blank"
                        >
                            Ahmëd Shäykh
                        </Link>
                    </span>
                </p>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-6 md:space-x-7 sm:space-x-3">
                    <Link
                        className="text-neutral-900 hover:text-cyan-500 dark:text-white dark:hover:text-teal-500 cursor-pointer"
                        href="https://www.instagram.com/AHMXMusic/"
                        target="_blank"
                    >
                        <AiOutlineInstagram className="w-6 h-6" />
                    </Link>
                    <Link
                        className="text-neutral-900 hover:text-cyan-500 dark:text-white dark:hover:text-teal-500 cursor-pointer"
                        href="https://x.com/AHMXMusic"
                        target="_blank"
                    >
                        <AiOutlineTwitter className="w-6 h-6" />
                    </Link>
                    <Link
                        className="text-neutral-900 hover:text-cyan-500 dark:text-white dark:hover:text-teal-500 cursor-pointer"
                        href="https://github.com/AhmedShaykh"
                        target="_blank"
                    >
                        <AiOutlineGithub className="w-6 h-6" />
                    </Link>
                    <Link
                        className="text-neutral-900 hover:text-cyan-500 dark:text-white dark:hover:text-teal-500 cursor-pointer"
                        href="https://www.linkedin.com/in/ahmedshaykh/"
                        target="_blank"
                    >
                        <AiOutlineLinkedin className="w-6 h-6" />
                    </Link>
                </span>
            </div>
        </footer>
    )
};

export default Footer;