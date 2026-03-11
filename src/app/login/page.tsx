"use client"; // Necessário no Next.js para componentes com interação (useState)

import React, { useState } from "react";
import Image from "next/image";
import logo from "../logo.jpeg";

export default function LoginPage() {
  // Estados para capturar os dados do formulário
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tentativa de login com:", { email, password });
  };

  return (
    <main className="min-h-screen bg-[#020203] flex flex-col items-center justify-center p-4 text-white font-sans">
      {/* 1. Cabeçalho: Logo e Slogan */}
      <header className="mb-10 text-center">
        <div className="w-24 h-24 bg-[#ede4c7] mx-auto mb-4 rounded-sm flex flex-col items-center justify-center shadow-[0_0_20px_rgba(237,228,199,0.2)]">
          <Image src={logo} alt="Anuncia.ai Logo" className="w-full h-full object-cover rounded-sm" />
        </div>
        <p className="text-[11px] tracking-[0.3em] text-gray-500 uppercase font-light">
          Anuncie seus produtos na palma da sua mão
        </p>
      </header>

      {/* 2. Card Principal */}
      <section className="w-full max-w-[450px] bg-[#0d0d10] border border-gray-800/50 rounded-2xl p-8 md:p-10 shadow-2xl">
        <h1 className="text-3xl font-semibold mb-2">Bem vindo de volta</h1>
        <p className="text-gray-400 text-sm mb-10">Por favor, coloque suas credencias para entrar</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              className="w-full bg-[#16161a] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Campo Senha */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-300">Senha</label>
              <button type="button" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                Esqueceu a senha?
              </button>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-[#16161a] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 outline-none transition-all"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Manter Conectado */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-gray-700 bg-[#16161a] checked:bg-blue-500"
            />
            <label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">
              Me mantenha conectado
            </label>
          </div>

          {/* Botão Sign In (Gradiente conforme a imagem) */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#4f6ef7] to-[#9a66f9] hover:brightness-110 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-purple-500/20"
          >
            Sign In
          </button>
        </form>

        {/* Divisor "Or continue with" */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-800"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#0d0d10] px-4 text-gray-500">Ou continue</span>
          </div>
        </div>

        {/* Botão Social (Google) */}
        <button className="w-full bg-transparent border border-gray-800 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-colors text-sm font-medium">
          {/* Ícone simples representando o Google */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </button>
      </section>

      {/* 3. Rodapé */}
      <footer className="mt-10 text-center space-y-4">
        <p className="text-sm text-gray-400">
          Não tenha uma conta? <button className="text-[#4f6ef7] hover:underline font-medium">Crie uma agora</button>
        </p>
        <div className="flex justify-center gap-4 text-[11px] text-gray-600">
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </div>
        <p className="text-[10px] text-gray-700">© 2026 anuncia.ai. Todos os direito são reservados</p>
      </footer>
    </main>
  );
}
