import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ children, className, ...props }) => {
    return (_jsx("div", { className: `p-4 rounded shadow-md ${className}`, ...props, children: children }));
};
