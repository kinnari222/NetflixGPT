export const checkValidData = (fullName, email, password, isSignInForm) => {

    // Validate full name ONLY in Sign Up mode
    if (!isSignInForm) {
        const isFullNameValid =
            /^[a-zA-Z\u00C0-\u00ff]{2,}(?: [a-zA-Z\u00C0-\u00ff]+){0,2}$/.test(fullName);

        if (!isFullNameValid) return "Full name required";
    }

    const isEmailValid =
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if (!isEmailValid) return "Email ID is not valid";

    const isPasswordValid =
        /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if (!isPasswordValid) return "Password is not valid";

    return null;
};