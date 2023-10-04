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
                    ITAKHI
                </HashLink>
                <HashLink to="#pricing" className="hidden md:block">
                    <Button>Start a Project</Button>
                </HashLink>
                <button
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
            >
                <div className="flex flex-col gap-4 p-8">
                    {navigationConfig.map((link) =>
                        link.hashLink ? (
                            <HashLink to={link.url} className={clsx("text-center")} onClick={handleToggleMenu}>
                                {link.label}
                            </HashLink>
                        ) : (
                            <Link to={link.url} className={clsx("text-center")} onClick={handleToggleMenu}>
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
