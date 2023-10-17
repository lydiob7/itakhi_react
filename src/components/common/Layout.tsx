import { ComponentProps } from "react";
import clsx from "clsx";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Button from "./Button";

interface LayoutProps extends ComponentProps<"div"> {}

const Layout = ({ className, ...props }: LayoutProps) => {
    return (
        <>
            <a
                className="absolute z-20 top-8 left-2 -translate-x-[100vw] transition-all focus-visible:outline-none focus-visible:translate-x-0"
                href="#layout-content"
            >
                <Button aria-label="Skip to content" color="black" size="sm" tabIndex={-1}>
                    Skip to content
                </Button>
            </a>
            <Navigation />
            <div
                className={clsx("min-w-screen min-h-screen flex flex-col items-stretch justify-between", className)}
                {...props}
            >
                <Header />
                <div className="flex-1" id="layout-content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
