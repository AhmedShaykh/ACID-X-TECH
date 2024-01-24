import Container from "@/Components/Container";
import Link from "next/link";

const Success = () => {
    return (
        <Container className="flex items-center justify-center py-20">
            <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
                <h2 className="text-4xl font-bold text-center">
                    Your Payment Accepted By Orebi.com
                </h2>

                <p className="text-center">
                    Now You Can View Your Orders Or Continue Shopping With Us
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <Link href={"/order"}>
                        <button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-primeColor duration-300">
                            View Orders
                        </button>
                    </Link>

                    <Link href={"/"}>
                        <button className="bg-black text-slate-100 w-48 h-12 rounded-full text-base font-semibold hover:bg-primeColor duration-300">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </Container>
    )
};

export default Success;