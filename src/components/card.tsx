import React from "react";

export const Card = ({ children, className, ...props }: any) => {
  return (
    <div className={`p-4 rounded shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
};
