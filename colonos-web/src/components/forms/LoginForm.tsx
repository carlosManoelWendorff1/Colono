"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { FormError } from "./FormError";
import { Input } from "./Input";

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  function onSubmit(data: LoginFormInputs) {
    localStorage.setItem("auth", "true");
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      {(errors.email?.message || errors.password?.message) && (
        <FormError>
          {errors.email?.message || errors.password?.message}
        </FormError>
      )}
      <Button variant={"default"} type="submit" className=" w-full">
        Entrar
      </Button>
    </form>
  );
};

export { LoginForm };
