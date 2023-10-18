import Button from "../../components/common/Button";
import brandSquare from "../../assets/images/brand-square-3.png";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useUserPreferencesContext } from "../../context/useUserPreferencesContext";

const PhraseBanner = () => {
    const sectionContext = useRef<HTMLDivElement | null>(null);
    const { userPrefersReducedMotion } = useUserPreferencesContext();

    useLayoutEffect(() => {
        if (userPrefersReducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".wrapper-background",
                {
                    backgroundColor: "#FFD9E0"
                },
                {
                    backgroundColor: "#E5EAE7",
                    scrollTrigger: {
                        trigger: sectionContext.current,
                        start: "top bottom-=200",
                        end: "top center",
                        scrub: 1
                    }
                }
            );
        }, sectionContext);

        return () => {
            ctx.revert();
        };
    }, [userPrefersReducedMotion]);

    return (
        <div ref={sectionContext}>
            <div className="wrapper-background relative py-10 md:py-20 w-full overflow-x-hidden">
                <div className="relative z-20 container grid gap-6 md:gap-20 justify-items-center">
                    <p className="text-15 md:text-3xl max-w-[950px] font-semibold uppercase">
                        In a digital world, your online presence is power. At Itakhi, we specialize in empowering
                        artists, freelancers, NGOs, and changemakers like you. We boost your impact and reach, ensuring
                        your message resonates where it counts.
                    </p>
                    <a href="#pricing" className="w-max">
                        <Button aria-label="See pricing" color="black" tabIndex={-1}>
                            Let's do it
                        </Button>
                    </a>
                </div>

                <img
                    className="absolute z-10 bottom-6 md:bottom-1/4 -right-8 w-48 md:w-auto"
                    src={brandSquare}
                    alt="Brand square"
                />
            </div>
        </div>
    );
};

export default PhraseBanner;
