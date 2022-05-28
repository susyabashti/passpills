import React, { useCallback, useEffect } from "react";

interface Props {
    password: string;
}

export const PasswordField = ({password}:Props) => {

    const selectPass = useCallback((e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        target.select();
        target.setSelectionRange(0, 99999);
    }, []);

    useEffect(() => {
        const field = document.getElementById("password-field") as HTMLInputElement;
        field.select();
        field.setSelectionRange(0, 99999);
    }, [password])

    return (
        <input onClick={selectPass} type="text" id="password-field" value={password} className="p-4 bg-gray-200 w-96 rounded-full text-center transition focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600" readOnly/>
    );
}