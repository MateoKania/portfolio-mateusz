import { TextH1 } from "../components/texts";

export function Contact() {
  return (
    <>
      <section
        id="contact"
        className="timeline-view animate-blurred-fade-in animate-range-[entry_0%_contain_20%]
        scroll-mt-20 mt-40 w-8/12 mx-auto flex flex-col items-center"
      >
        <TextH1 text="Contacto" />

        <p className="text-white text-center mt-10 leading-relaxed max-w-2xl">
          Si deseas ponerte en contacto conmigo, puedes enviarme un correo
          directamente pulsando en mi dirección. Estaré encantado de hablar
          sobre nuevas oportunidades, proyectos o colaboraciones profesionales.
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="mailto:mateokaniadev@gmail.com"
            className="border border-white/20 rounded-xl px-6 py-4 text-lg font-medium text-white bg-white/5 backdrop-blur-sm hover:border-amber-400 hover:bg-white/10 transition"
          >
            mateokaniadev@gmail.com
          </a>
        </div>

        <a
          href="#home"
          className="mt-12 text-gray-400 hover:text-amber-400 transition text-sm tracking-wide"
        >
          Volver al inicio
        </a>
      </section>

      <footer className="mt-24 py-8 text-center text-white/60 text-sm  border-white/10">
        <p>© 2025 Mateusz Tomasz Kania · Valencia, España</p>
        <p className="mt-1">Todos los derechos reservados</p>

        <div className="flex justify-center gap-6 mt-4 text-white/40">
          <a
            href="https://github.com/MateoKania"
            target="_blank"
            className="hover:text-amber-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mateusz-kania"
            target="_blank"
            className="hover:text-amber-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
