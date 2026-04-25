import { TextH1 } from "../components/texts";
import { ButtonContact } from "../components/buttons";

export function Contact() {
  return (
    <>
      <section
        id="contact"
        className="timeline-view animate-blurred-fade-in animate-range-[entry_0%_contain_20%] 
        scroll-mt-20 mt-40 h-[70vh] w-8/12 mx-auto flex flex-col items-center"
      >
        <TextH1 text="Contacto" />

        <p className="text-white text-center mt-10 leading-relaxed max-w-2xl">
          Si estás interesado en colaborar o tienes alguna propuesta
          profesional, puedes contactarme directamente por email pulsando en el
          botón de abajo. Para llamadas telefónicas, encontrarás mi número en mi
          Curriculum Vitae.
        </p>

        <div className="flex justify-center mt-6">
          <ButtonContact
            text="mateokaniadev@gmail.com"
            href="mailto:mateokaniadev@gmail.com"
            className="text-white border-white border-2 rounded-2xl px-6 py-4 hover:bg-amber-600 transition"
          />
        </div>

        <a
          href="#home"
          className="mt-20 text-gray-400 hover:text-amber-600 transition-colors duration-300 
          text-lg flex items-center justify-center"
        >
          Volver al Inicio
        </a>
      </section>
    </>
  );
}
