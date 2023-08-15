"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-scroll/modules";;
import { useTheme } from "next-themes";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface NavItem {
    label: string
    page: string
};

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Project",
        page: "project",
    },
    {
        label: "Contact",
        page: "contact",
    }
];

const Navbar = () => {

    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    const [navbar, setNavbar] = useState(false);

    return (
        <header className="w-full mx-auto px-8 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-gray-900 dark:border-b dark:border-stone-700">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-6 md:py-8 md:block">
                        <Logo />

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <XMarkIcon className="h-6 w-6 dark:text-white" /> : <Bars2Icon className="h-6 w-6 dark:text-white" />}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.page}
                                        className={
                                            "block lg:inline-block text-neutral-900 hover:text-slate-500 dark:text-white dark:hover:text-blue-300 cursor-pointer font-semibold"
                                        }
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                            {currentTheme === "dark" ? (
                                <button
                                    onClick={() => setTheme("light")}
                                    className="p-2 rounded-xl hover:text-yellow-500"
                                >
                                    <SunIcon className="h-6 w-6" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setTheme("dark")}
                                    className="p-2 rounded-xl hover:text-blue-500"
                                >
                                    <MoonIcon className="h-6 w-6" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Navbar;