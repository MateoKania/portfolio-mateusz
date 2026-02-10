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
        <div className="flex flex-row w-6/12 mx-auto mt-16 space-x-10 ">
          <ListCard title="Tecnologias" items={tecnologias} />
          <ListCard title="Soft Skills" items={habilidades} />

          <ListCard title="Idiomas" items={idiomas} />
        </div>
        <div className="flex flex-row space-x-5 justify-center mt-10">
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
