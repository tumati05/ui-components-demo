"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
// import "./effects.css";
import "./App.css";
("use client");
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Card } from "./components/card";
import { Badge } from "./components/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./components/avatar";
import { Checkbox } from "./components/checkbox";
import { Loader2, CheckCircle, XCircle, Play, BookOpen, Shield, Zap, Palette, Smartphone, } from "lucide-react";
const users = [
    {
        id: 1,
        name: "Sarah Chen",
        email: "sarah@example.com",
        role: "Admin",
        status: "Active",
        avatar: "/diverse-woman-portrait.png",
    },
    {
        id: 2,
        name: "Marcus Johnson",
        email: "marcus@example.com",
        role: "Editor",
        status: "Invited",
        avatar: "/thoughtful-man.png",
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        email: "elena@example.com",
        role: "Viewer",
        status: "Active",
        avatar: "/diverse-woman-portrait.png",
    },
    {
        id: 4,
        name: "David Kim",
        email: "david@example.com",
        role: "Editor",
        status: "Suspended",
        avatar: "/thoughtful-man.png",
    },
];
const features = [
    {
        icon: Palette,
        title: "Glassmorphism",
        description: "Beautiful glass-like effects with backdrop blur and transparency",
    },
    {
        icon: Zap,
        title: "Animations",
        description: "Smooth transitions and micro-interactions for delightful UX",
    },
    {
        icon: Shield,
        title: "Accessibility",
        description: "Built with WCAG guidelines and keyboard navigation support",
    },
    {
        icon: Smartphone,
        title: "Responsive",
        description: "Perfectly optimized for desktop, tablet, and mobile devices",
    },
];
export default function UIComponentsDemo() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState("idle");
    const [selectedUsers, setSelectedUsers] = useState([]);
    const handleSignIn = async () => {
        setIsLoading(true);
        setFormState("idle");
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (email && password) {
            setFormState("success");
        }
        else {
            setFormState("error");
        }
        setIsLoading(false);
    };
    const toggleUserSelection = (userId) => {
        setSelectedUsers((prev) => prev.includes(userId)
            ? prev.filter((id) => id !== userId)
            : [...prev, userId]);
    };
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "Active":
                return "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40";
            case "Invited":
                return "bg-amber-500/20 text-amber-300 ring-1 ring-amber-400/40";
            case "Suspended":
                return "bg-rose-500/20 text-rose-300 ring-1 ring-rose-400/40";
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden", children: [_jsxs("header", { className: "sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-black to-gray-800 backdrop-blur-xl border-b border-gradient-to-r from-indigo-500/20 to-fuchsia-500/20", children: [_jsx("div", { className: "container mx-auto px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h1", { className: "text-xl font-bold bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent", children: "UI Components Demo" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "ghost", size: "sm", className: "text-white/70 hover:text-white hover:bg-white/10", onClick: () => window.open("https://www.linkedin.com/in/tumati-tejasri-074a44344/", "_blank"), children: "About" }), _jsx(Button, { variant: "ghost", size: "sm", className: "text-white/70 hover:text-white hover:bg-white/10", onClick: () => window.open("https://jazzy-stardust-5b0e89.netlify.app/", "_blank"), children: "Contact" })] })] }) }), _jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" })] }), _jsx("section", { className: "py-20 px-6 text-center animate-fade-up", children: _jsxs("div", { className: "container mx-auto max-w-4xl", children: [_jsx(Badge, { className: "mb-6 bg-white/10 text-fuchsia-300 border-white/20  transition-all duration-300 animate-pulse", children: "Premium UI/UX Demo" }), _jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent leading-tight", children: "Beautiful UI Components" }), _jsx("p", { className: "text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed", children: "Experience the future of web design with glassmorphism effects, smooth animations, and premium interactions." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse", children: [_jsx(Play, { className: "w-5 h-5 mr-2" }), "Get Started"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-xl", onClick: () => window.open("https://github.com/tumati05/ui-components-demo.git", "_blank"), children: [_jsx(BookOpen, { className: "w-5 h-5 mr-2" }), "Documentation"] })] })] }) }), _jsx("section", { className: "py-16 px-6", children: _jsx("div", { className: "container mx-auto max-w-7xl", children: _jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [_jsxs(Card, { className: "bg-white/10 backdrop-blur-xl border-white/20 p-8 hover:bg-white/15 transition-all duration-500 animate-fade-up", children: [_jsx("h2", { className: "text-2xl font-bold mb-6 text-white", children: "Sign In Form" }), _jsxs("div", { className: "space-y-4", children: [_jsx("div", { children: _jsx(Input, { type: "email", placeholder: "Enter your email", value: email, onChange: (e) => setEmail(e.target.value), className: "bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300", disabled: isLoading }) }), _jsx("div", { children: _jsx(Input, { type: "password", placeholder: "Enter your password", value: password, onChange: (e) => setEmail(e.target.value), className: "w-full bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent transition-all duration-300", disabled: isLoading }) }), _jsx(Button, { onClick: handleSignIn, disabled: isLoading, className: `w-full transition-all duration-300 ${formState === "success"
                                                    ? "bg-emerald-500 hover:bg-emerald-600"
                                                    : formState === "error"
                                                        ? "bg-rose-500 hover:bg-rose-600 animate-shake"
                                                        : "bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600"}`, children: isLoading ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: "w-4 h-4 mr-2 animate-spin" }), "Signing in..."] })) : formState === "success" ? (_jsxs(_Fragment, { children: [_jsx(CheckCircle, { className: "w-4 h-4 mr-2" }), "Signed in successfully"] })) : formState === "error" ? (_jsxs(_Fragment, { children: [_jsx(XCircle, { className: "w-4 h-4 mr-2" }), "Please enter valid credentials"] })) : ("Sign In") }), formState === "success" && (_jsx("div", { className: "text-emerald-300 text-sm text-center animate-fade-in", children: "\u2705 Welcome back! Redirecting to dashboard..." })), formState === "error" && (_jsx("div", { className: "text-rose-300 text-sm text-center animate-fade-in", children: "\u274C Invalid credentials. Please try again." }))] })] }), _jsxs(Card, { className: "bg-white/10 backdrop-blur-xl border-white/20 p-8 hover:bg-white/15 transition-all duration-500 animate-fade-up", children: [_jsx("h2", { className: "text-2xl font-bold mb-6 text-white", children: "User Management" }), _jsx("div", { className: "space-y-4", children: users.map((user, index) => (_jsxs("div", { className: "flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] group", style: { animationDelay: `${index * 100}ms` }, children: [_jsx(Checkbox, { checked: selectedUsers.includes(user.id), onCheckedChange: () => toggleUserSelection(user.id), className: "border-white/30 data-[state=checked]:bg-fuchsia-500 data-[state=checked]:border-fuchsia-500" }), _jsxs(Avatar, { className: "w-10 h-10", children: [_jsx(AvatarImage, { src: user.avatar || "/placeholder.svg", alt: user.name }), _jsx(AvatarFallback, { className: "bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white", children: user.name
                                                                .split(" ")
                                                                .map((n) => n[0])
                                                                .join("") })] }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "font-medium text-white group-hover:text-fuchsia-300 transition-colors", children: user.name }), _jsx("p", { className: "text-sm text-white/60", children: user.email })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-sm text-white/80", children: user.role }), _jsx(Badge, { className: `text-xs ${getStatusBadgeClass(user.status)}`, children: user.status })] })] }, user.id))) }), selectedUsers.length > 0 && (_jsxs("div", { className: "mt-6 p-4 bg-fuchsia-500/20 rounded-lg border border-fuchsia-400/30 animate-fade-in", children: [_jsxs("p", { className: "text-fuchsia-300 text-sm", children: [selectedUsers.length, " user", selectedUsers.length > 1 ? "s" : "", " selected"] }), _jsx("div", { className: "flex gap-2 mt-2", children: selectedUsers.map((userId) => {
                                                    const user = users.find((u) => u.id === userId);
                                                    return user ? (_jsx(Badge, { className: "bg-fuchsia-500/30 text-fuchsia-200 border-fuchsia-400/50", children: user.name }, userId)) : null;
                                                }) })] }))] })] }) }) }), _jsx("section", { className: "py-16 px-6", children: _jsxs("div", { className: "container mx-auto max-w-6xl", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent", children: "Premium Features" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: features.map((feature, index) => (_jsxs(Card, { className: "bg-white/10 backdrop-blur-xl border-white/20 p-6 hover:bg-white/15 hover:scale-105 transition-all duration-500 group animate-fade-up", style: { animationDelay: `${index * 150}ms` }, children: [_jsx(feature.icon, { className: "w-12 h-12 text-fuchsia-400 mb-4 group-hover:text-cyan-400 transition-colors duration-300" }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors", children: feature.title }), _jsx("p", { className: "text-white/70 text-sm leading-relaxed ", children: feature.description })] }, feature.title))) })] }) }), _jsx("footer", { className: "py-12 px-6 border-t border-white/10", children: _jsx("div", { className: "container mx-auto text-center", children: _jsx("p", { className: "text-white/50 animate-fade-in", children: "\u00A9 2025 UI Components Demo. Crafted with precision and passion." }) }) })] }));
}
