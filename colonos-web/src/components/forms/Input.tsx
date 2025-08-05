import React, { InputHTMLAttributes, forwardRef } from "react";
import { Input as ShadInput } from "../ui/input";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <ShadInput
      ref={ref}
      className={`${className} active:ring-primary-500 focus:ring-primary-500 focus-visible:ring-primary-200`}
      {...props}
    />
  )
);

export { Input };
