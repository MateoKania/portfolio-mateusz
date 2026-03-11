import { TextH1 } from "../components/texts";
import { ButtonContact } from "../components/buttons";

export function Contact() {
  return (
    <>
      <section
        className="timeline-view animate-blurred-fade-in animate-range-[entry_0%_contain_20%] scroll-mt-20  mt-40 h-[70vh] w-8/12 justify-center mx-auto"
        id="contact"
      >
        <TextH1 text="Contacto" />
        <p className="flex text-white justify-center mt-10">
          Si tienes interes en trabajar juntos no dudes en contactar conmigo via
          email directamente, pulsa en el boton de abajo. <br /> Para
          contactarme mediante llamada telefonica, lo tienes en mi Curriculum
          Vitae, espero que te haya gustado.
        </p>
        <div className="flex w-fit justify-center mx-auto">
          <ButtonContact
            text="mateokaniadev@gmail.com"
            className="flex text-white  mt-5 border-white rounded-2xl border-2 w-fit p-5 hover:bg-amber-600"
          />
        </div>
        <a
          className="mx-auto w-fit p-4 hover:border-2 hover:rounded-2xl hover:border-amber-600   text-gray-400 flex items-center justify-center mb-4 mt-20 text-lg  hover:text-amber-600 transition-colors duration-300"
          href="#home"
        >
          Volver al Inicio
        </a>
      </section>
    </>
  );
}
