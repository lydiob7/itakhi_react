import { ComponentProps } from "react";
import clsx from "clsx";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface LayoutProps extends ComponentProps<"div"> {}

const Layout = ({ className, ...props }: LayoutProps) => {
    return (
        <>
            <div
                className={clsx("min-w-screen min-h-screen flex flex-col items-stretch justify-between", className)}
                {...props}
            >
                <Header />
                <div className="flex-1">
                    <Outlet />
                </div>
                <Footer />
            </div>
            <Navigation />
        </>
    );
};

export default Layout;
