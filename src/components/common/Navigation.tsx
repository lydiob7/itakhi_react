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
                `fixed z-50 top-[calc(100vh-8rem)] right-8 md:right-1/2 md:translate-x-1/2 bg-black text-white font-anton uppercase flex items-center 
                justify-between px-2 md:px-12 py-2 md:py-3 rounded-lg md:rounded-full w-min md:w-auto md:max-w-[90vw] 
                lg:max-w-3xl`,
                className
            )}
            aria-label="Primary navigation"
            title="Primary navigation"
            {...props}
        >
            <HashLink
                aria-label="Scroll to top"
                to={`${routes.home}#top`}
                className="px-2 md:px-6 py-2 md:py-4 rounded-lg md:rounded-full bg-lightBlack"
            >
                <ArrowUpIcon />
            </HashLink>
            {navigationConfig.map((link) =>
                link.hashLink ? (
                    <HashLink
                        key={link.url}
                        to={link.url}
                        className={clsx(
                            "hidden md:block py-4 px-6 whitespace-nowrap",
                            link.highlighted ? "rounded-full bg-white text-black" : ""
                        )}
                    >
                        {link.label}
                    </HashLink>
                ) : (
                    <Link
                        key={link.url}
                        to={link.url}
                        className={clsx(
                            "hidden md:block py-4 px-6 whitespace-nowrap",
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
