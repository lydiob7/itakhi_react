import { ComponentProps } from "react";
import clsx from "clsx";

interface NotFoundProps extends ComponentProps<"div"> {}

const NotFound = ({ className, ...props }: NotFoundProps) => {
    return (
        <div className={clsx("", className)} {...props}>
            NotFound
        </div>
    );
};

export default NotFound;
