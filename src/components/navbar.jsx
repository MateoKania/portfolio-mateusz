import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="w-full flex lg:mx-auto lg:justify-center justify-start family-font ml-4 ">
        <nav className="border-2 border-white bg-black  bg-neutral  w-fit lg:w-8/12 text-burlywood h-15 text-xl rounded-2xl mt-5 fixed z-50">
          <div className="flex items-center justify-between lg:justify-center h-full px-6 lg:px-0">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 z-50"
            >
              <span
                className={`w-6 h-0.5 bg-burlywood transition-transform ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-burlywood transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-burlywood transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>

            <div
              className={`
              ${isMenuOpen ? "flex" : "hidden"} 
              lg:flex 
              flex-col lg:flex-row 
              lg:space-x-15 
              absolute lg:relative 
              top-16 lg:top-0 
              left-0 lg:left-auto 
              w-44 lg:w-auto 
              bg-black lg:bg-transparent 
              border-2 lg:border-0 
              border-white 
              rounded-2xl lg:rounded-none 
              py-6 lg:py-0 
              gap-4 lg:gap-0
              items-center
            `}
            >
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Inicio
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Sobre mi
              </a>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
