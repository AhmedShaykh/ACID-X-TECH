import bannerImg from "../../public/assets/banner.jpg";
import Image from "next/image";

const HomeBanner = () => {
    return (
        <>
            <Image
                className="w-full h-full"
                alt="Banner Image"
                src={bannerImg}
            />
        </>
    );
};

export default HomeBanner;