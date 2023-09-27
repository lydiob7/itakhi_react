import { ComponentProps } from "react";
import clsx from "clsx";
import { HashLink } from "react-router-hash-link";
import routes from "../../config/routes";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
import { ArrowUpIcon } from "../../assets/icons";

interface NavigationProps extends ComponentProps<"nav"> {}

const Navigation = ({ className, ...props }: NavigationProps) => {
    const location = useLocation();

    if (location.pathname !== "/") return null;
    return (
        <nav
            className={clsx(
                "sticky z-50 bottom-8 mx-auto bg-black text-white font-anton uppercase flex items-center justify-between px-12 py-3 rounded-full max-w-[90vw] lg:max-w-3xl",
                className
            )}
            {...props}
        >
            <HashLink to={`${routes.home}#top`} className="px-6 py-4 rounded-full bg-lightBlack">
                <ArrowUpIcon />
            </HashLink>
            <HashLink to={`${routes.home}#our-philosophy`} className="py-4 px-6">
                Our Philosophy
            </HashLink>
            <HashLink to={`${routes.home}#services`} className="py-4 px-6">
                Services
            </HashLink>
            <HashLink to={`${routes.home}#recent-work`} className="py-4 px-6">
                Recent Work
            </HashLink>
            <HashLink to={`${routes.home}#pricing`} className="py-4 px-6">
                Pricing
            </HashLink>
            <HashLink to={`${routes.home}#faqs`} className="py-4 px-6 rounded-full bg-white text-black">
                FAQs
            </HashLink>
            {/* <Link to={`${routes.login}`} className="py-4 px-6">
                Login
            </Link> */}
        </nav>
    );
};

export default Navigation;
