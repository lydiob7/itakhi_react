import { ComponentProps } from "react";
import clsx from "clsx";

interface FooterProps extends ComponentProps<"div"> {}

const Footer = ({ className, ...props }: FooterProps) => {
    return (
        <div className={clsx("container mx-auto", className)} {...props}>
            Footer
        </div>
    );
};

export default Footer;
