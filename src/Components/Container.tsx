import { FC } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
};

const Container: FC<Props> = ({ children, className }) => {
    return (
        <div className={`max-w-screen-xl mx-auto py-10 px-4 lg:px-0 ${className}`}>
            {children}
        </div>
    );
};

export default Container;