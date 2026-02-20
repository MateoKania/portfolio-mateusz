import { TextH1 } from "../components/texts";
import { ButtonContact } from "../components/buttons";

export function Contact() {
  return (
    <>
      <section
        className="scroll-mt-20 mb-16 mt-25 h-[70vh] w-8/12 justify-center mx-auto"
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
      </section>
    </>
  );
}
