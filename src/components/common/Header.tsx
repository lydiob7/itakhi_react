import { ComponentProps, useState } from "react";
import clsx from "clsx";
import Button from "./Button";
import { HashLink } from "react-router-hash-link";
import routes from "../../config/routes";
import navigationConfig from "../../config/navigationConfig";
import { Link } from "react-router-dom";

interface HeaderProps extends ComponentProps<"div"> {}

const Header = ({ className, ...props }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggleMenu = () => setIsOpen((prevState) => !prevState);

    return (
        <div className="w-full relative">
            <div className={clsx("container flex items-center justify-between py-6", className)} {...props}>
                <HashLink to={`${routes.home}#top`} className="text-2xl font-semibold">
                    <h1>ITAKHI</h1>
                </HashLink>
                <HashLink to="#pricing" className="hidden md:block">
                    <Button aria-label="See pricing" tabIndex={-1}>
                        Start a Project
                    </Button>
                </HashLink>
                <button
                    aria-label="Mobile menu button"
                    className="md:hidden flex flex-col justify-between items-stretch gap-[4px] w-[25px]"
                    onClick={handleToggleMenu}
                >
                    <span className="bg-[#18181B] h-[3px] w-full rounded-full" />
                    <span className="bg-[#18181B] h-[3px] w-full rounded-full" />
                    <span className="bg-[#18181B] h-[3px] w-full rounded-full" />
                </button>
            </div>

            <nav
                className={clsx(
                    "md:hidden absolute top-full w-full bg-white z-30 transition-all",
                    isOpen ? "max-h-[300vh]" : "max-h-0 overflow-hidden"
                )}
                aria-label="Primary navigation"
                title="Primary navigation"
            >
                <div className="flex flex-col gap-4 p-8">
                    {navigationConfig.map((link) =>
                        link.hashLink ? (
                            <HashLink
                                key={link.url}
                                to={link.url}
                                className={clsx("text-center")}
                                onClick={handleToggleMenu}
                                tabIndex={isOpen ? 0 : -1}
                            >
                                {link.label}
                            </HashLink>
                        ) : (
                            <Link
                                key={link.url}
                                to={link.url}
                                className={clsx("text-center")}
                                onClick={handleToggleMenu}
                                tabIndex={isOpen ? 0 : -1}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
