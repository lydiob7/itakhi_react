import { ComponentProps } from "react";
import clsx from "clsx";

interface HeaderProps extends ComponentProps<"div"> {}

const Header = ({ className, ...props }: HeaderProps) => {
    return (
        <div className={clsx("container mx-auto", className)} {...props}>
            Header
        </div>
    );
};

export default Header;
