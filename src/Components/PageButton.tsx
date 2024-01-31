"use client";
import { StateProps } from "../../Type";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { signIn, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

const PageButton = () => {

    const { productData } = useSelector((state: StateProps) => state.orebi);

    const { data: session } = useSession();

    return (
        <div className="fixed top-60 right-2 z-20 flex flex-col gap-2">
            <button
                className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer"
                onClick={() => !session?.user ? signIn() : toast.error("Your Are Sign In...")}
            >
                <div className="flex justify-center items-center">
                    {session?.user ? (
                        <Image
                            className="rounded-full -translate-x-12 group-hover:translate-x-4 transition-transform duration-200"
                            src={session?.user?.image!}
                            alt="User Image"
                            width={35}
                            height={35}
                        />
                    ) : (
                        <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
                    )}

                    {session?.user ? (
                        <Image
                            className="rounded-full -translate-x-4 group-hover:translate-x-12 transition-transform duration-200"
                            src={session?.user?.image!}
                            alt="User Image"
                            width={35}
                            height={35}
                        />
                    ) : (
                        <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
                    )}
                </div>

                <p className="text-xs font-semibold">
                    Profile
                </p>
            </button>

            <Link
                className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
                href={"/cart"}
            >
                <div className="flex justify-center items-center">
                    <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
                    <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
                </div>

                <p className="text-xs font-semibold">
                    Buy Now
                </p>

                <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    {productData ? productData?.length : 0}
                </p>
            </Link>
        </div>
    )
};

export default PageButton;