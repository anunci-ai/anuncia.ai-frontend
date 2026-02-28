import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">{/* <Icons.logo className="w-7 h-7" /> */}</div>
          <p className="text-muted-foreground mt-4 text-sm text-start">Comece a anunciar com inteligência.</p>
        </div>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Produto</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link href="" className="hover:text-foreground transition-all duration-300">
                    Features
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="" className="hover:text-foreground transition-all duration-300">
                    Preço
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="" className="hover:text-foreground transition-all duration-300">
                    O que dizem sobre nós
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Nossas Redes</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link href="" className="hover:text-foreground transition-all duration-300">
                    Instagram
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="" className="hover:text-foreground transition-all duration-300">
                    X
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="" className="hover:text-foreground transition-all duration-300">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Ajuda</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link href="/resources/blog" className="hover:text-foreground transition-all duration-300">
                    Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/resources/help" className="hover:text-foreground transition-all duration-300">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Empresa</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link href="" className="hover:text-foreground transition-all duration-300">
                    Sobre nós
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                    Política de Privacidade
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                    Termos & Condições
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} anuncia.ai. Todos os direitos reservados.
        </p>
      </div>

      <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center"></div>
    </footer>
  );
};

export default Footer;
