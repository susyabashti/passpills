import React from "react";

interface Props {
    children?: React.ReactNode;
}

export const MainContainer = ({children}: Props) => (
    <div className="container mx-auto h-screen grid content-center">
        {children}
    </div>
);