import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GeistSans, GeistMono } from "@/fonts"; // adjust path if needed
export const metadata = {
    title: "UI Components Demo - Premium Design System",
    description: "Experience beautiful glassmorphism effects, smooth animations, and premium UI components",
    generator: "v0.app",
};
export default function RootLayout({ children }) {
    return (_jsxs("html", { lang: "en", className: "dark", children: [_jsx("head", { children: _jsx("style", { children: `
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        ` }) }), _jsx("body", { className: "font-sans antialiased", children: children })] }));
}
