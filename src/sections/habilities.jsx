import { TextH1 } from "../components/texts";
import { ListCard } from "../components/listCard";
import { TechIcon } from "../components/icons";

const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind CSS",
];
const habilidades = [
  "Trabajo en equipo",
  "Resolución de problemas",
  "Comunicación",
  "Facilidad para el aprendizaje",
  "Predisposicion",
  "Facilidad para tomar decisiones",
];
const idiomas = [
  "Español - Nativo",
  "Polaco  - Nativo",
  "Inglés - Avanzado",
  "Bulgaro - Aprendizaje",
];

export function Habilities() {
  return (
    <>
      <section id="skills" className="scroll-mt-24 mb-16">
        <TextH1 text="Habilidades" />
        <div className="flex flex-col md:flex-row w-fit md:w-6/12 space-y-6 md:space-y-0 mx-auto mt-10 md:space-x-10 ">
          <ListCard title="Tecnologias" items={tecnologias} />
          <ListCard title="Soft Skills" items={habilidades} />

          <ListCard title="Idiomas" items={idiomas} />
        </div>
        <div className="grid grid-cols-3  md:flex md:flex-row gap-5 md:space-x-5 space-x-2 md:justify-center justify-items-center w-6/12  md:w-auto mx-auto mt-10">
          <TechIcon src="assets/html.svg" alt="icono-html" title="HTML" />
          <TechIcon src="assets/css.svg" alt="icono-css" title="CSS" />
          <TechIcon src="assets/js.svg" alt="icono-js" title="JavaScript" />
          <TechIcon src="assets/ts.svg" alt="icono-ts" title="TypeScript" />
          <TechIcon src="assets/react.svg" alt="icono-react" title="React" />
          <TechIcon
            src="assets/tailwind.svg"
            alt="icono-tailwind"
            title="Tailwind CSS"
          />
        </div>
      </section>
    </>
  );
}
