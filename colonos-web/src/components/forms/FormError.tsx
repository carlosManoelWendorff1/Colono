import React from "react";
import { Card } from "../ui/card";

interface FormErrorProps {
  children?: string;
  className?: string;
}

const FormError: React.FC<FormErrorProps> = ({ children, className }) => {
  if (!children) return null;
  return (
    <Card className="bg-danger/10 border border-danger/20 p-2 mb-4 rounded-sm">
      <div className={className ?? "text-danger text-sm "}>{children}</div>
    </Card>
  );
};

export { FormError };
