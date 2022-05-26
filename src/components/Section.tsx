import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./Button";
import { PasswordField } from "./PasswordField";
import { Title } from "./Title";
import { GeneratePassword } from '../generator/password';
import { Notice } from "./Notice";

export const Section = () => {

    const [password, setPassword] = useState("");

    const changePassword = useCallback(() => {
        setPassword(GeneratePassword());
    }, [setPassword]);

    useEffect(() => {
        setPassword(GeneratePassword());
    }, []);

    return (
        <div className="grid gap-5 place-items-center text-center">
            <Title
                text="A simple password generator."
                size="text-7xl lg:text-8xl"
                customClass="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-400"
                />
            <PasswordField password={password}/>
            <Button passwordFunc={changePassword} text="Generate Password Pill" />
            <Notice />
        </div>
    );
}