import { Metadata } from "next";

// Isso define o título que aparece na aba do navegador
export const metadata: Metadata = {
  title: "Login | Anuncia.ai",
  description: "Acesse sua conta no Anuncia.ai",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    // O layout é como uma moldura.
    // O 'children' aqui será o conteúdo do seu page.tsx
    <section className="antialiased">{children}</section>
  );
}
