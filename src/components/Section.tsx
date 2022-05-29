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
        <div className="grid gap-5 px-5 md:px-0 place-items-center text-center">
            <Title size="text-7xl lg:text-8xl">
                A simple <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-teal-400">password</span> generator.
            </Title>
            <PasswordField password={password}/>
            <Button passwordFunc={changePassword} text="Generate Password Pill" />
            <Notice />
        </div>
    );
}