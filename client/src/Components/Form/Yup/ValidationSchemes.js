import * as yup from "yup"

export const registrationValidationScheme = yup.object().shape(
{
    username: yup.string().min(6, "Minimum length 6.").max(18, "Maximum length 18.").required("Username is required."),
    nickname: yup.string().min(4, "Minimum length 4.").max(18, "Maximum length 18."),
    email: yup.string().email("Email is incorrect.").required("Email is required."),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Password is not strong.").required("Password is required."),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords is not similar").required("Confirm password pls.")
})

export const loginValidationScheme = yup.object().shape(
{
    username: yup.string().min(6, "Minimum length 6.").max(18, "Maximum length 18.").required("Username is required."),
    password: yup.string().min(8, "Minimum length 8.").max(155, "Maximum length 155.").required("Password is required."),
})
