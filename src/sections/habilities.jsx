import { TextH1 } from "../components/texts";
import { ListCard } from "../components/listCard";
import { HabilitiesIcon } from "../components/icons";

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
  "Facilidad para la resolucion de problemas",
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
      <section id="skills">
        <TextH1 text="Habilidades" />
        <div className="flex flex-row w-6/12 mx-auto mt-16 space-x-10 ">
          <ListCard title="Tecnologias" items={tecnologias} />
          <ListCard title="Soft Skills" items={habilidades} />

          <ListCard title="Idiomas" items={idiomas} />
        </div>
        <HabilitiesIcon />
      </section>
    </>
  );
}
