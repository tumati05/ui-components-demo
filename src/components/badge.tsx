import React from "react";

export const Badge = ({ children, className, ...props }: any) => {
  return (
    <span className={`px-2 py-1 rounded text-sm ${className}`} {...props}>
      {children}
    </span>
  );
};
