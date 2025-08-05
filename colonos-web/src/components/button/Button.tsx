import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { buttonVariants, Button as ShadButton } from "../ui/button";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => (
    <ShadButton
      variant={variant}
      ref={ref}
      className={`${className} active:ring-primary-500 focus:ring-primary-500 focus-visible:ring-primary-200`}
      {...props}
    />
  )
);

export { Button };
