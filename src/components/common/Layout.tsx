import { ComponentProps } from "react";
import clsx from "clsx";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps extends ComponentProps<"div"> {}

const Layout = ({ className, ...props }: LayoutProps) => {
    return (
        <div
            className={clsx(
                "w-screen h-screen overflow-x-hidden flex flex-col items-stretch justify-between",
                className
            )}
            {...props}
        >
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
