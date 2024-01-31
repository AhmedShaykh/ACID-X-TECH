import productOfTheYear from "../../public/assets/productOfTheYear.webp";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

const YearProduct = () => {
    return (
        <div className="w-full bg-[#f3f3f3]">
            <Container className="md:bg-transparent relative py-0 mb-10">
                <Image
                    className="w-full h-full object-cover hidden md:inline-block"
                    src={productOfTheYear}
                    alt="product"
                />

                <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
                    <h1 className="text-3xl font-semibold text-primeColor">
                        Product Of The Year
                    </h1>

                    <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, Dveritatis. Alias quia aut accusantium doloremque ad, iure odio inventore dolorem?
                    </p>

                    <Link
                        className="bg-primeColor text-white text-lg w-[185px] h-[50px] hover:bg-black duration-300 font-bold flex items-center justify-center rounded-md"
                        href={"/shop"}
                    >
                        Shop Now
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default YearProduct;