import React from "react";

export const Checkbox = ({ checked, onCheckedChange, className }: any) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange && onCheckedChange(e.target.checked)}
      className={`w-4 h-4 ${className}`}
    />
  );
};
