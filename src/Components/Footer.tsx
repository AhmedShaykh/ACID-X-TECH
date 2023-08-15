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
        <footer className="bg-white dark:bg-gray-900 px-14 border-t border-stone-300 dark:border-stone-700 absolute bottom-0">
            <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col max-w-7xl">
                <p className="sm:inline text-sm dark:text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-600 sm:py-2 sm:mt-0 mt-4 font-semibold">
                    © 2023 <span className="font-orbitron tracking-widest">Ahmëd Shäykh</span>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
                    <Link className="dark:text-white cursor-pointer hover:text-slate-500 dark:hover:text-blue-300" href="https://www.instagram.com/AHMXMusic/" target="_blank">
                        <AiOutlineInstagram className="w-6 h-6" />
                    </Link>
                    <Link className="dark:text-white cursor-pointer hover:text-slate-500 dark:hover:text-blue-300" href="https://twitter.com/AHMXMusic/" target="_blank">
                        <AiOutlineTwitter className="w-6 h-6" />
                    </Link>
                    <Link className="dark:text-white cursor-pointer hover:text-slate-500 dark:hover:text-blue-300" href="https://github.com/AhmedShaykh/" target="_blank">
                        <AiOutlineGithub className="w-6 h-6" />
                    </Link>
                    <Link className="dark:text-white cursor-pointer hover:text-slate-500 dark:hover:text-blue-300" href="https://www.linkedin.com/in/ahmed-saleem-shaikh-73955b251/" target="_blank">
                        <AiOutlineLinkedin className="w-6 h-6" />
                    </Link>
                </span>
            </div>
        </footer>
    )
};

export default Footer;