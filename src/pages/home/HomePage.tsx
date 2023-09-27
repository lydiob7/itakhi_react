import { ComponentProps } from "react";
import clsx from "clsx";
import TopSection from "./TopSection";
import TextDisplay from "./TextDisplay";
import Clients from "./Clients";
import Philosophy from "./Philosophy";
import Services from "./Services";
import RecentWork from "./RecentWork";
import PhraseBanner from "./PhraseBanner";
import Pricing from "./Pricing";
import FAQs from "./FAQs";

interface HomePageProps extends ComponentProps<"div"> {}

const HomePage = ({ className, ...props }: HomePageProps) => {
    return (
        <div className={clsx("", className)} {...props}>
            <TopSection />
            <TextDisplay content={`Digital\nAtelier`} />
            <Clients />
            <Philosophy />
            <TextDisplay color="lemon" content="we're also eager to do it fast, without all the fluff" />
            <Services />
            <RecentWork />
            <PhraseBanner />
            <Pricing />
            <FAQs />
        </div>
    );
};

export default HomePage;
