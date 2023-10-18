import { ComponentProps, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import { useUserPreferencesContext } from "../../context/useUserPreferencesContext";
import { divideArrayInTwoAndMix } from "../../utils";

interface AnimatedTitleProps extends ComponentProps<"h2"> {
    title?: string;
}

const AnimatedTitle = ({ children, className, title, ...props }: AnimatedTitleProps) => {
    const { userPrefersReducedMotion } = useUserPreferencesContext();
    const titleContext = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (userPrefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const letters = gsap.utils.toArray(".letter");
            const [leftPart, rightPart] = divideArrayInTwoAndMix(letters);

            leftPart.forEach((letter: any, i) => {
                gsap.from(letter, {
                    opacity: 0,
                    x: -(i * 10 + 60),
                    duration: 0.3,
                    delay: 0.3 + i * 0.01,
                    scrollTrigger: {
                        trigger: titleContext.current,
                        start: "top bottom-=100"
                    }
                });
            });
            rightPart.forEach((letter: any, i) => {
                gsap.from(letter, {
                    opacity: 0,
                    x: i * 10 + 60,
                    duration: 0.3,
                    delay: 0.3 + i * 0.01,
                    scrollTrigger: {
                        trigger: titleContext.current,
                        start: "top bottom-=100"
                    }
                });
            });
        }, titleContext);

        return () => {
            ctx.revert();
        };
    }, [title, userPrefersReducedMotion]);

    if (!title)
        return (
            <h2 className={clsx("", className)} {...props}>
                {children}
            </h2>
        );

    return (
        <h2 ref={titleContext} className={clsx("", className)} {...props}>
            {title.split(" ").map((word, wi) => (
                <span key={`${word}-${wi}`} className="inline-block mr-4">
                    {word.split("").map((letter, i) => (
                        <span
                            key={`${letter}-${i}`}
                            className={clsx(`inline-block letter letter-${i + 1}`, letter === " " ? "min-w-[1ch]" : "")}
                        >
                            {letter}
                        </span>
                    ))}
                </span>
            ))}
        </h2>
    );
};

export default AnimatedTitle;
