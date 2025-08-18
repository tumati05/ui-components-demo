import { jsx as _jsx } from "react/jsx-runtime";
export const Badge = ({ children, className, ...props }) => {
    return (_jsx("span", { className: `px-2 py-1 rounded text-sm ${className}`, ...props, children: children }));
};
