import React from "react";

export const Input = ({ className, ...props }: any) => {
  return <input className={`px-3 py-2 rounded ${className}`} {...props} />;
};
