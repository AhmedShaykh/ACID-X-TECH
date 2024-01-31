"use client";
import { useState } from "react";
import Logo from "../../public/assets/logoBlack.png";
import { navBarList } from "@/static";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const [navbar, setNavbar] = useState<boolean>(false);

    const [searchQuery, setSearchQuery] = useState("");

    const { data: session } = useSession();

    const pathname = usePathname();

    return (
        <div className="w-full mx-auto px-8 sm:px-16 sticky top-0 z-50 shadow bg-white border-b border-neutral-300">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-6 md:py-8 md:block">
                        <Link href={"/"}>
                            <Image src={Logo} alt="logo" className="w-20" />
                        </Link>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? <XMarkIcon className="h-6 w-6 hover:font-semibold" /> : <Bars2Icon className="h-6 w-6 hover:font-semibold" />}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="relative w-full hidden lg:inline-flex lg:w-[470px] h-10 text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-4 rounded-md"
                >
                    <input
                        className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
                        placeholder="Search Your Products Here"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        type="text"
                    />

                    {searchQuery ? (
                        <IoCloseOutline
                            onClick={() => setSearchQuery("")}
                            className="w-5 h-5 hover:text-red-500 duration-200 hover:cursor-pointer"
                        />
                    ) : (
                        <FaSearch className="w-5 h-5 hover:cursor-pointer" />
                    )}
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <div className="flex flex-col items-center justify-center space-y-8 mb-3 md:mb-0 md:flex-row md:space-x-8 md:space-y-0 font-medium">
                            {navBarList.map((item) => {
                                return (
                                    <Link
                                        href={item?.link}
                                        key={item?.link}
                                        className={`block lg:inline-block text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 cursor-pointer
                                        ${pathname === item?.link && "text-gray-950 underline"}`}
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {item?.title}
                                    </Link>
                                )
                            })}

                            {session?.user && (
                                <button
                                    className="flex hover:font-medium h-6 justify-center items-center space-y-8 md:space-x-4 text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-red-600 duration-200"
                                    onClick={() => signOut()}
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;