import { jsx as _jsx } from "react/jsx-runtime";
export const Input = ({ className, ...props }) => {
    return _jsx("input", { className: `px-3 py-2 rounded ${className}`, ...props });
};
