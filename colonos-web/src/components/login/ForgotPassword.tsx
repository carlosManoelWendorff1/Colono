const ForgotPassword = ({ onclick }: { onclick: () => void }) => (
  <div className="mt-4 text-center flex gap-2">
    <h2 className="bold">Esqueceu a senha?</h2>
    <h2
      className="text-primary-400  hover:underline cursor-pointer"
      onClick={onclick}
    >
      Clique aqui para redefini-la.
    </h2>
  </div>
);

export { ForgotPassword };
