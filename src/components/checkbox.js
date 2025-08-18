import { jsx as _jsx } from "react/jsx-runtime";
export const Checkbox = ({ checked, onCheckedChange, className }) => {
    return (_jsx("input", { type: "checkbox", checked: checked, onChange: (e) => onCheckedChange && onCheckedChange(e.target.checked), className: `w-4 h-4 ${className}` }));
};
