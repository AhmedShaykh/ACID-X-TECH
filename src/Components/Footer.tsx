import Container from "./Container";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="w-full bg-[#F5F5F3]">
            <Container className="max-w-container mx-auto border-t-[1px] group">
                <p className="text-titleFont font-medium text-center flex md:items-center justify-center text-zinc-700 duration-200 text-sm">
                    <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
                        <AiOutlineCopyright />
                    </span>

                    Copyright 2024 | Orebi Shopping | All Rights Reserved
                </p>
            </Container>
        </div>
    )
};

export default Footer;