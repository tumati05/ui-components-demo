import { jsx as _jsx } from "react/jsx-runtime";
export const Avatar = ({ children, className, ...props }) => {
    return (_jsx("div", { className: `rounded-full overflow-hidden ${className}`, ...props, children: children }));
};
export const AvatarImage = ({ src, alt }) => {
    return _jsx("img", { src: src, alt: alt, className: "w-full h-full object-cover" });
};
export const AvatarFallback = ({ children, className }) => {
    return (_jsx("div", { className: `bg-gray-500 flex items-center justify-center ${className}`, children: children }));
};
