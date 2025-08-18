import React from "react";

export const Avatar = ({ children, className, ...props }: any) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
};

export const AvatarImage = ({ src, alt }: any) => {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
};

export const AvatarFallback = ({ children, className }: any) => {
  return (
    <div
      className={`bg-gray-500 flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};
