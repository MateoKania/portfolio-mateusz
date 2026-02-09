export function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center ">
        <nav
          className="border-2 border-white bg-black  flex font-cursive
         bg-neutral w-8/12 text-burlywood  items-center justify-center space-x-15
          h-15 text-xl rounded-2xl mt-5 fixed z-50  "
        >
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mi</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </>
  );
}
