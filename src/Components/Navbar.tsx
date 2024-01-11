import React from "react";
import Logo from "../../public/assets/logoBlack.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky top-0 z-50">
            <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
                <Link href={"/"}>
                    <Image src={Logo} alt="logo" className="w-20" />
                </Link>
            </nav>
        </div>
    )
};

export default Navbar;