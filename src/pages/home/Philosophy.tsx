import Button from "../../components/common/Button";
import brandCircle from "../../assets/images/brand-circle2.png";
import clsx from "clsx";
import { FC, ReactNode } from "react";

interface PhilosophyCardProps {
    className?: string;
    content?: ReactNode;
    step?: number;
}

const PhilosophyCard: FC<PhilosophyCardProps> = ({ className, content, step }) => (
    <div className={clsx("w-96 p-6 bg-lemon rounded-[2rem] relative z-10 font-anton text-3xl shrink-0", className)}>
        <p className="uppercase mb-4">step {step}/5</p>
        <p className="uppercase">{content}</p>
    </div>
);

const Philosophy = () => {
    return (
        <div className="bg-wine py-20 overflow-x-hidden" id="our-philosophy">
            <div className="container flex gap-8">
                <div className="w-1/2">
                    <p className="uppercase text-lemon text-sm">Our philosophy</p>
                    <h2 className="text-lile font-anton text-6xl mt-3 mb-8">Design Unleashed, Hassle Erased</h2>
                    <p className="text-gray font-light text-xl">
                        At Itakhi, we live by a simple yet revolutionary philosophy: to unleash the full potential of
                        design and development without the baggage of traditional approaches. We're breaking free from
                        the conventional.
                        <br />
                        At Itakhi, we cherish and uphold the unparalleled uniqueness of every client's vision. We are
                        unapologetically non-conformist, and our approach is rooted in the deep respect we hold for
                        individuality.
                    </p>
                    <Button className="mt-8" color="black">
                        be unapollegetically
                    </Button>
                </div>
                <div className="w-1/2 relative flex items-start gap-2 py-16">
                    <img
                        className="absolute top-0 left-16 max-w-full object-cover max-h-[575px]"
                        src={brandCircle}
                        alt="Itakhi circle"
                    />

                    <PhilosophyCard className="" content="Share Your Requirements without formalities." step={1} />
                    <PhilosophyCard
                        className="mt-8"
                        content="We provide a tailored plan with transparent pricing."
                        step={2}
                    />
                    <PhilosophyCard
                        className="mt-16"
                        content="Agile execution: we swiftly work on your design and development tasks."
                        step={3}
                    />
                    <PhilosophyCard
                        className="mt-24"
                        content="Feedback and Refinement until you're satisfied."
                        step={4}
                    />
                    <PhilosophyCard
                        className="mt-32"
                        content="We deliver your final designs promptly and offer ongoing assistance"
                        step={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
