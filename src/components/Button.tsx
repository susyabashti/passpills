import React from "react";

interface ButtonProps {
    text: string;
    passwordFunc: (params: any) => any;
}

export const Button = ({
    text,
    passwordFunc,
}: ButtonProps) => (
    <button onClick={passwordFunc} className="rounded-full text-white w-full sm:w-auto px-5 py-3 sm:py-1 font-medium bg-blue-700 hover:bg-blue-600 active:bg-blue-300 transition-colors">
        {text}
    </button>
);