import { ComponentProps } from "react";
import clsx from "clsx";
import { HashLink } from "react-router-hash-link";
import routes from "../../config/routes";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import { ArrowUpIcon } from "../../assets/icons";
import navigationConfig from "../../config/navigationConfig";
import { Link } from "react-router-dom";

interface NavigationProps extends ComponentProps<"nav"> {}

const Navigation = ({ className, ...props }: NavigationProps) => {
    const location = useLocation();

    if (location.pathname !== "/") return null;
    return (
        <nav
            className={clsx(
                `sticky z-50 bottom-8 float-right md:float-none mr-8 md:mx-auto bg-black text-white font-anton uppercase flex items-center 
                justify-between px-2 md:px-12 py-2 md:py-3 rounded-lg md:rounded-full w-min md:w-auto md:max-w-[90vw] 
                lg:max-w-3xl`,
                className
            )}
            {...props}
        >
            <HashLink
                to={`${routes.home}#top`}
                className="px-2 md:px-6 py-2 md:py-4 rounded-lg md:rounded-full bg-lightBlack"
            >
                <ArrowUpIcon />
            </HashLink>
            {navigationConfig.map((link) =>
                link.hashLink ? (
                    <HashLink
                        to={link.url}
                        className={clsx(
                            "hidden md:block py-4 px-6",
                            link.highlighted ? "rounded-full bg-white text-black" : ""
                        )}
                    >
                        {link.label}
                    </HashLink>
                ) : (
                    <Link
                        to={link.url}
                        className={clsx(
                            "hidden md:block py-4 px-6",
                            link.highlighted ? "rounded-full bg-white text-black" : ""
                        )}
                    >
                        {link.label}
                    </Link>
                )
            )}
        </nav>
    );
};

export default Navigation;
