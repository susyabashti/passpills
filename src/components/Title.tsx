import React from "react";

interface TitleProps {
    text: string;
    size?: string;
    customClass?: string;
}

export const Title = ({
    text,
    size = "text-7xl",
    customClass = "",
}: TitleProps) => (
    <div className={`md:flex md:flex-col md:justify-center ${size} h-64 min-h-max font-bold leading-1 ${customClass}`}>
        <span>
            {text}
        </span>
    </div>
);