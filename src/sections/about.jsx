import { TextH1 } from "../components/texts";
import { TextAbout, Image } from "../components/cardAbout";

export function About() {
  return (
    <>
      <section id="about" className="mb-16 scroll-mt-24">
        <TextH1 text="Sobre Mi" />
        <div className="flex flex-row text-white w-4/5 justify-center h-8/12 items-center mx-auto mt-20 space-x-10 ">
          <Image
            className=" flex h-90 rounded-2xl items-start"
            href="/assets/fotoMateo.JPG"
            alt="Foto Perfil Mateusz"
          />
          <TextAbout className="w-6/12 h-100 flex items-center" />
        </div>
      </section>
    </>
  );
}
