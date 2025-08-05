"use client";

import { Card } from "../ui/card";
import { LoginForm } from "../forms/LoginForm";
import { ForgotPassword } from "./ForgotPassword";
import { Button } from "../ui/button";
import { Register } from "./Register";

const LoginCard = () => {
  return (
    <Card className="bg-neutral rounded shadow w-1/3 h-full rounded-b-none rounded-l-lg flex flex-col items-center relative">
      <div className="flex flex-col h-1/3 text-start w-full ml-20">
        <img src="./logo.png" alt="Logo" className="w-60 h-60 " />
      </div>
      <div className="w-full px-10 my-2 gap-2 flex-col p-2 justify-center h-1/3">
        <LoginForm />
        <Register />
        <ForgotPassword
          onclick={() => console.log("Forgot password clicked")}
        />
      </div>
      <div className="absolute bottom-4 left-0 w-full flex flex-col items-center justify-center">
        <h2>
          All rights reserved <b>@Colonos 2025</b>
        </h2>
      </div>
    </Card>
  );
};

export { LoginCard };
