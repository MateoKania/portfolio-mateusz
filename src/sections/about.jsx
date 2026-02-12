import { TextH1 } from "../components/texts";
import { TextAbout, Image } from "../components/cardAbout";

export function About() {
  return (
    <>
      <section id="about" className="mb-16 scroll-mt-24">
        <TextH1 text="Sobre Mi" />
        <div className="flex flex-col lg:flex-row text-white w-4/5 justify-center h-12/12 lg:h-8/12 items-center mx-auto mt-10 lg:mt-10 lg:space-x-10 space-y-8 lg:space-y-0 ">
          <Image
            className=" flex lg:h-90 rounded-2xl items-start"
            href="/assets/fotoMateo.JPG"
            alt="Foto Perfil Mateusz"
          />
          <TextAbout className="lg:w-6/12 h-auto lg:h-100 flex items-center" />
        </div>
      </section>
    </>
  );
}
