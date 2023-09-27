import { ComponentProps } from "react";
import clsx from "clsx";

interface TextDisplayProps extends ComponentProps<"div"> {
    color?: "lile" | "lemon";
    content: string;
}

const TextDisplay = ({ className, color = "lile", content, ...props }: TextDisplayProps) => {
    const colorOptions = {
        lemon: "bg-lemon",
        lile: "bg-lile"
    };

    return (
        <div className={clsx("w-full overflow-hidden", colorOptions[color], className)} {...props}>
            <div className="flex items-center gap-4 py-8 w-max">
                {Array.from(Array(20).fill(content)).map((text, i) => (
                    <div key={`${text}-${i}`} className="flex items-center gap-2">
                        <p className="text-xs uppercase whitespace-pre-line">{text}</p>
                        <span className="block h-2 w-2 bg-black rounded-full" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextDisplay;
