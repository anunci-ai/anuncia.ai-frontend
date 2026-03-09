"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../logo.jpeg"; // Importante para navegação entre páginas

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados de cadastro:", formData);
  };

  return (
    <main className="min-h-screen bg-[#020203] flex flex-col items-center justify-center p-4 text-white font-sans">
      {/* Logo e Slogan */}
      <header className="mb-8 text-center">
        <div className="w-24 h-24 bg-[#ede4c7] mx-auto mb-4 rounded-sm flex flex-col items-center justify-center shadow-[0_0_25px_rgba(237,228,199,0.15)]">
          <Image src={logo} alt="Anuncia.ai Logo" className="w-full h-full object-cover rounded-sm" />
        </div>
        <p className="text-[11px] tracking-[0.3em] text-gray-500 uppercase font-light">
          Anuncie seus produtos na palma da sua mão
        </p>
      </header>

      {/* Card de Registro */}
      <section className="w-full max-w-[480px] bg-[#0d0d10] border border-gray-800/50 rounded-3xl p-8 md:p-10 shadow-2xl">
        <h1 className="text-2xl font-semibold mb-2">Cadastra-se</h1>
        <p className="text-gray-400 text-sm mb-8">Encontre seu espaço para anunciar seus produtos</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Nome completo</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-[#16161a] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          {/* Campo Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full bg-[#16161a] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none transition-all placeholder:text-gray-600"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Campo Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#16161a] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {/* Campo Confirm Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Confirmar senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#16161a] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-purple-500 outline-none transition-all"
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>

          {/* Termos de Serviço */}
          <div className="flex items-start gap-3 py-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 rounded border-gray-700 bg-[#16161a] checked:bg-blue-500"
            />
            <label htmlFor="terms" className="text-xs text-gray-400 leading-normal">
              By signing up, you agree to our{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Botão Create Account */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#4f6ef7] to-[#9a66f9] hover:brightness-110 text-white font-medium py-3.5 rounded-xl transition-all shadow-lg shadow-purple-500/20"
          >
            Criar conta
          </button>
        </form>

        {/* Divisor */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-800"></span>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-[#0d0d10] px-4 text-gray-500 tracking-widest">Ou cadastra-se com</span>
          </div>
        </div>

        {/* Google Sign Up */}
        <button className="w-full bg-transparent border border-gray-800 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-colors text-sm font-medium">
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

      {/* Footer Link */}
      <p className="mt-8 text-sm text-gray-400">
        Already have an account?{" "}
        <Link href="/login" className="text-white font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </main>
  );
}
