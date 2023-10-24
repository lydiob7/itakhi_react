import { ComponentProps, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Button from "./Button";
import { useUserPreferencesContext } from "../../context/useUserPreferencesContext";
import { BlackSpiral } from "../../assets/images/spirals";
import { useGeneralContext } from "../../context/useGeneralContext";

interface LayoutProps extends ComponentProps<"div"> {}

const Layout = ({ className, ...props }: LayoutProps) => {
    const { isInitialAnimationLoading, setIsInitialAnimationLoading } = useGeneralContext();
    const { userPrefersReducedMotion } = useUserPreferencesContext();
    const sectionContext = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (userPrefersReducedMotion) return setIsInitialAnimationLoading(false);

        gsap.to(sectionContext.current, {
            opacity: 0,
            duration: 0.5,
            delay: 1.5,
            onComplete: () => {
                setIsInitialAnimationLoading(false);
            }
        });

        const ctx = gsap.context(() => {
            const spinnerTimeline = gsap.timeline();
            const spinner = ".loading-spinner";

            spinnerTimeline.from(spinner, {
                opacity: 0,
                duration: 0.2,
                delay: 0.3
            });
            spinnerTimeline.to(spinner, {
                rotate: "60deg",
                duration: 1.75
            });
        }, sectionContext);

        return () => {
            ctx.revert();
        };
    }, [userPrefersReducedMotion]);

    return (
        <>
            {isInitialAnimationLoading && (
                <div
                    className="fixed top-0 left-0 z-[51] w-screen h-screen bg-gray flex flex-col items-center justify-center gap-12"
                    ref={sectionContext}
                >
                    {/* <div className="title text-7xl font-medium">ITAKHI</div> */}
                    <BlackSpiral className="loading-spinner" />
                </div>
            )}
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
