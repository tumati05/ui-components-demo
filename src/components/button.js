import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children, className, ...props }) => {
    return (_jsx("button", { className: `px-4 py-2 rounded ${className}`, ...props, children: children }));
};
