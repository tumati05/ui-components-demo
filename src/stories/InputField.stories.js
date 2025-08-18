import { InputField } from "../components/InputField";
const meta = {
    title: "Components/InputField",
    component: InputField,
    parameters: { layout: "centered" },
    args: {
        label: "Email",
        placeholder: "you@example.com",
        helperText: "We never share your email.",
        variant: "outlined",
        size: "md",
    },
    argTypes: {
        variant: {
            control: "inline-radio",
            options: ["filled", "outlined", "ghost"],
        },
        size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    },
};
export default meta;
export const Basic = {};
export const Invalid = {
    args: { invalid: true, errorMessage: "This field is required" },
};
export const Password = {
    args: { label: "Password", passwordToggle: true, type: "password" },
};
export const Loading = { args: { loading: true } };
