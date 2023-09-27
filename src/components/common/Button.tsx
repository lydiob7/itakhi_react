import { ComponentProps, FC } from "react";
import clsx from "clsx";

type CustomProps = {
    color?: "primary" | "secondary" | "black" | "black2";
    size?: "sm" | "md" | "lg";
    variant?: "contained" | "outlined" | "text";
};

function getButtonStyles({ color = "primary", size = "md", variant = "contained" }: CustomProps): string {
    const stylesMap = {
        "primary-contained": "btn-primary",
        "secondary-contained": "btn-secondary",
        "black-contained": "btn-black",
        "black2-contained": "btn-black2",
        "primary-outlined": "btn-primary-outlined",
        "secondary-outlined": "btn-secondary-outlined",
        "black-outlined": "btn-black-outlined",
        "black2-outlined": "btn-black2-outlined",
        "primary-text": "btn-primary-text",
        "secondary-text": "btn-secondary-text",
        "black-text": "btn-black-text",
        "black2-text": "btn-black2-text"
    };

    const sizeMap = {
        sm: "p-2",
        md: "p-6",
        lg: "p-8"
    };

    return clsx(stylesMap[`${color}-${variant}`], sizeMap[size]);
}

type ButtonProps = CustomProps & ComponentProps<"button">;

const Button: FC<ButtonProps> = ({ className, ...props }) => {
    return (
        <button
            className={clsx(
                "rounded-2xl uppercase font-semibold text-sm",
                getButtonStyles({ color: props.color, size: props.size, variant: props.variant }),
                className
            )}
            {...props}
        />
    );
};

export default Button;
