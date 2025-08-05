import { LoginForm } from "@/components/forms/LoginForm";
import { LoginCard } from "@/components/login/card";
import "@/styles/globals.css";

export default function LoginPage() {
  return (
    <div
      className=" w-full flex justify-end items-end h-screen bg-gradient-to-r from-primary-50 to-primary-100 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/login.png)" }}
    >
      <LoginCard />
    </div>
  );
}
