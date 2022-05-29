import React from "react";

interface TitleProps {
    text?: string;
    size?: string;
    customClass?: string;
    children?: React.ReactNode;
}

export const Title = ({
    text,
    size = "text-7xl",
    customClass = "",
    children,
}: TitleProps) => (
    <div className={`md:flex md:flex-col md:justify-center ${size} h-64 min-h-max font-bold leading-1 ${customClass}`}>
        <span>
            {text ? text : children}
        </span>
    </div>
);