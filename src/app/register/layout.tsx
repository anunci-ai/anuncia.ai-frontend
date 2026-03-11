import { Metadata } from "next";

// Isso altera o título da aba do navegador e ajuda no SEO
export const metadata: Metadata = {
  title: "Create Account | Anuncia.ai",
  description: "Join the professional AI-powered advertising workspace.",
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    // Você pode usar este <section> para aplicar estilos que
    // afetem apenas as páginas dentro da pasta /register
    <section className="selection:bg-purple-500/30">{children}</section>
  );
}
