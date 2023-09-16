import { ComponentProps } from "react";
import clsx from "clsx";

interface HomePageProps extends ComponentProps<"div"> {}

const HomePage = ({ className, ...props }: HomePageProps) => {
    return (
        <div className={clsx("container mx-auto", className)} {...props}>
            HomePage
        </div>
    );
};

export default HomePage;
