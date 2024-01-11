import { Link } from "react-scroll/modules";

const Logo = () => {
    return (
        <Link to="home" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
            <div className="flex items-center space-x-2">
                <h2 className="inline md:hidden text-lg font-orbitron font-bold cursor-pointer tracking-wider">
                    ACID X
                </h2>
                <h2 className="hidden md:inline text-lg font-orbitron font-bold cursor-pointer tracking-wider">
                    ACID X TECH
                </h2>
            </div>
        </Link>
    )
};

export default Logo;