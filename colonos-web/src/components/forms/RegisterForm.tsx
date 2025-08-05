"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { forwardRef } from "react";
import { Button } from "../ui/button";
import { FormError } from "./FormError";
import { Input } from "./Input";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
};

type RegisterFormProps = {
  onSubmit: (data: RegisterFormInputs) => void;
};

const RegisterForm = forwardRef<HTMLFormElement, RegisterFormProps>(
  ({ onSubmit }, ref) => {
    const router = useRouter();

    function handleGoogleLogin() {
      window.location.href = "/api/auth/google";
    }
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterFormInputs>();

    return (
      <form ref={ref} onSubmit={handleSubmit(onSubmit)} className="w-full px-5">
        <Input
          type="text"
          placeholder="Nome"
          className="w-full mb-3 p-2 border rounded"
          {...register("name", { required: "Nome obrigatório" })}
        />
        <Input
          type="text"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          {...register("email", { required: "Email obrigatório" })}
        />
        <Input
          type="password"
          placeholder="Senha"
          className="w-full mb-3 p-2 border rounded"
          {...register("password", { required: "Senha obrigatória" })}
        />
        {(errors.name?.message ||
          errors.email?.message ||
          errors.password?.message) && (
          <FormError>
            {errors.name?.message ||
              errors.email?.message ||
              errors.password?.message}
          </FormError>
        )}
      </form>
    );
  }
);

export { RegisterForm };
