import React, { useEffect } from "react";

interface Props {
    password: string;
}

export const PasswordField = ({password}:Props) => {

    useEffect(() => {
        const field = document.getElementById("password-field") as HTMLInputElement;
        field.select();
        field.setSelectionRange(0, 99999);
    }, [password])

    return (
        <input type="text" id="password-field" value={password} className="p-4 bg-gray-200 w-96 rounded-full text-center" readOnly/>
    );
}