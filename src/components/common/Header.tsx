import { ComponentProps } from "react";
import clsx from "clsx";
import Button from "./Button";
import { HashLink } from "react-router-hash-link";
import routes from "../../config/routes";

interface HeaderProps extends ComponentProps<"div"> {}

const Header = ({ className, ...props }: HeaderProps) => {
    return (
        <div className={clsx("container mx-auto flex items-center justify-between py-6", className)} {...props}>
            <HashLink to={`${routes.home}#top`} className="text-2xl font-semibold">
                ITAKHI
            </HashLink>
            <HashLink to="#pricing">
                <Button>Start a Project</Button>
            </HashLink>
        </div>
    );
};

export default Header;
