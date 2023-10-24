import { ComponentProps } from "react";
import clsx from "clsx";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { ArrowUpIcon } from "../../assets/icons";
import navigationConfig from "../../config/navigationConfig";
import { Link } from "react-router-dom";
import { useGeneralContext } from "../../context/useGeneralContext";

interface NavigationProps extends ComponentProps<"nav"> {}

const Navigation = ({ className, ...props }: NavigationProps) => {
    const { currentSection } = useGeneralContext();
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <nav
            className={clsx(
                `fixed z-50 top-[calc(100vh-8rem)] right-8 bg-black text-white font-anton uppercase 
                flex items-center justify-between px-2 py-2 rounded-lg w-min`,
                isHomePage
                    ? `md:right-1/2 md:translate-x-1/2 md:px-12 md:py-3 md:rounded-full md:w-auto 
                        md:max-w-[90vw] lg:max-w-3xl`
                    : "",
                className
            )}
            aria-label="Primary navigation"
            title="Primary navigation"
            {...props}
        >
            <HashLink
                aria-label="Scroll to top"
                to="#top"
                className={clsx("px-2 md:px-6 py-2 md:py-3 rounded-lg md:rounded-full bg-lightBlack transition-all")}
            >
                <ArrowUpIcon />
            </HashLink>
            {isHomePage &&
                navigationConfig.map((link) => {
                    const highlighted = link.hashLink
                        ? currentSection === link.url?.split("#")?.[1]
                        : location.pathname === link.url;

                    return link.hashLink ? (
                        <HashLink
                            key={link.url}
                            to={link.url}
                            className={clsx(
                                "hidden md:block py-3 px-6 whitespace-nowrap",
                                highlighted ? "rounded-full bg-white text-black" : ""
                            )}
                        >
                            {link.label}
                        </HashLink>
                    ) : (
                        <Link
                            key={link.url}
                            to={link.url}
                            className={clsx(
                                "hidden md:block py-3 px-6 whitespace-nowrap",
                                highlighted ? "rounded-full bg-white text-black" : ""
                            )}
                        >
                            {link.label}
                        </Link>
                    );
                })}
        </nav>
    );
};

export default Navigation;
