import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeWrapper from "./themeWrapper";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "Colonos Web",
  description: "Login com Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
