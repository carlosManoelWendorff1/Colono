"use client";

import { useTheme } from "./context/ThemeContext";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Mudar tema ({theme})
      </button>
      {children}
    </>
  );
}
