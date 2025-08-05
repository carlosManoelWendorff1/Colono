import { Button } from "../button/Button";
import { useRef, useState } from "react";
import { Drawer } from "../overlay/Drawer";
import { RegisterForm } from "../forms/RegisterForm";
import { useRouter } from "next/navigation";

export const Register = () => {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  return (
    <>
      <Button
        variant={"outline"}
        className="hover:bg-primary-400 hover:text-neutral text-neutral-900  w-full mt-2"
        onClick={() => setOpen(true)}
      >
        Crie sua conta
      </Button>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Registrar"
        footer={
          <>
            <Button
              variant={"default"}
              className="w-full"
              onClick={() => formRef.current?.requestSubmit()}
            >
              Registrar
            </Button>
          </>
        }
        withCloseButton={true}
      >
        <RegisterForm
          ref={formRef}
          onSubmit={() => {
            localStorage.setItem("auth", "true");
            router.push("/dashboard");
          }}
        />
      </Drawer>
    </>
  );
};
