import React from "react";

export type InputVariant = "filled" | "outlined" | "ghost";
export type InputSize = "sm" | "md" | "lg";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: InputVariant;
  size?: InputSize;
  type?: string;
  name?: string;
  id?: string;
  clearable?: boolean;
  passwordToggle?: boolean;
}

const sizeClasses: Record<InputSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-3.5 text-base",
  lg: "h-11 px-4 text-lg",
};

const variantClasses: Record<InputVariant, string> = {
  filled:
    "bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-primary-600 focus:bg-white dark:focus:bg-gray-900",
  outlined:
    "bg-transparent border border-gray-300 dark:border-gray-700 focus:border-primary-600",
  ghost: "bg-transparent border border-transparent focus:border-primary-600",
};

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      value,
      onChange,
      label,
      placeholder,
      helperText,
      errorMessage,
      disabled,
      invalid,
      loading,
      variant = "outlined",
      size = "md",
      type = "text",
      name,
      id,
      clearable = false,
      passwordToggle = false,
    },
    ref
  ) => {
    const inputId = id || name || React.useId();
    const [showPassword, setShowPassword] = React.useState(false);
    const resolvedType = passwordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-1 block text-sm font-medium">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={resolvedType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled || loading}
            aria-invalid={invalid || !!errorMessage || undefined}
            aria-describedby={helperText ? `${inputId}-help` : undefined}
            className={cn(
              "w-full rounded-xl outline-none transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-500",
              sizeClasses[size],
              variantClasses[variant],
              (invalid || errorMessage) &&
                "border-red-500 focus:border-red-600",
              (disabled || loading) && "opacity-60 cursor-not-allowed"
            )}
          />

          {loading && (
            <span
              className="absolute inset-y-0 right-2 flex items-center text-sm"
              aria-live="polite"
            >
              ⏳
            </span>
          )}

          {passwordToggle && (
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute inset-y-0 right-2 flex items-center text-sm px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          )}

          {clearable && value && value.length > 0 && (
            <button
              type="button"
              onClick={() =>
                onChange?.({
                  target: { value: "" },
                } as React.ChangeEvent<HTMLInputElement>)
              }
              className="absolute inset-y-0 right-2 flex items-center text-sm px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 mr-8"
              aria-label="Clear input"
              tabIndex={-1}
            >
              ✕
            </button>
          )}
        </div>

        <div className="mt-1 min-h-[1.25rem] text-sm">
          {errorMessage ? (
            <p className="text-red-600" role="alert">
              {errorMessage}
            </p>
          ) : helperText ? (
            <p
              id={`${inputId}-help`}
              className="text-gray-500 dark:text-gray-400"
            >
              {helperText}
            </p>
          ) : null}
        </div>
      </div>
    );
  }
);
InputField.displayName = "InputField";
