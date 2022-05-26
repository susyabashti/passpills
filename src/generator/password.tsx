export const GeneratePassword = () => {

    // Define all available characters as a list.
    const passwordOptions = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "abcdefghijklmnopqrstuvwxyz",
        "0123456789",
                            ];

    // Define max password length
    const maxLength = 32;
    let final_password = "";

    // Add random characters to password string.
    while( final_password.length < maxLength ) {

        // Randomise between all three types of characters.
        const random = random_number(passwordOptions.length);
        const char_type = passwordOptions[random];

        // Add random character from selected type.
        final_password += passwordOptions[random][random_number(char_type.length)];
    }

    return final_password;
}

const random_number = (max: number) => {
    return Math.floor(Math.random() * max);
}