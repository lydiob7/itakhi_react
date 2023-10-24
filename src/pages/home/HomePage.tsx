import { ComponentProps, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";
import TopSection from "./TopSection";
import TextDisplay from "./TextDisplay";
import Clients from "./Clients";
import Philosophy from "./Philosophy";
import Services from "./Services";
import RecentWork from "./RecentWork";
import PhraseBanner from "./PhraseBanner";
import Pricing from "./Pricing";
import FAQs from "./FAQs";
import { useGeneralContext } from "../../context/useGeneralContext";
import { sections } from "../../context/GeneralContextProvider";

interface HomePageProps extends ComponentProps<"div"> {}

const HomePage = ({ className, ...props }: HomePageProps) => {
    const sectionContext = useRef<HTMLDivElement | null>(null);
    const { setCurrentSection } = useGeneralContext();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            Object.values(sections).forEach((sectionTag) => {
                gsap.to(`#${sectionTag}`, {
                    scrollTrigger: {
                        trigger: `#${sectionTag}`,
                        start: "top center+=100",
                        end: "bottom center+=100",
                        toggleActions: "restart none none reverse",
                        onToggle: ({ isActive }) => (isActive ? setCurrentSection(sectionTag) : undefined)
                    }
                });
            });
        }, sectionContext);

        return () => {
            ctx.revert();
            setCurrentSection(null);
        };
    }, []);

    return (
        <div ref={sectionContext} className={clsx("", className)} {...props}>
            <TopSection />
            <TextDisplay content={`Digital\nAtelier`} speed="slow" />
            <Clients id={sections.clients} />
            <Philosophy id={sections.philosophy} />
            <TextDisplay color="lemon" content="we're also eager to do it fast, without all the fluff" speed="slow" />
            <Services id={sections.services} />
            <RecentWork id={sections.recentWork} />
            <PhraseBanner />
            <Pricing id={sections.pricing} />
            <FAQs id={sections.faqs} />
        </div>
    );
};

export default HomePage;
