import { TextH1 } from "../components/texts";
import { ProjectCard1 } from "../components/projectCard";
import { TechIcon, GithubIcon, EyeSvg } from "../components/icons";
import { ButtonMedia } from "../components/buttons";

export function Projects() {
  return (
    <>
      <section id="projects" className="scroll-mt-24">
        <TextH1 text="Proyectos" />
        <ProjectCard1
          titleProject="Agenda Diaria"
          images={[
            "/assets/agenda1.png",
            "/assets/agendaTareas.png",
            "/assets/agendaTiempo.png",
            "/assets/agendaNoticias.png",
            "/assets/AgendaCalendario.png",
            "/assets/AgendaCrono.png",
          ]}
          text={
            <>
              Desarrollé una aplicación web de agenda digital que integra
              tareas, eventos, clima y noticias en tiempo real. <br />
              En el proyecto apliqué JavaScript modular y TailwindCSS para
              lograr una arquitectura escalable y un diseño responsive. Integré
              APIs externas de forma segura y desplegué la aplicación en Netlify
              y Vercel, adquiriendo experiencia en publicación y optimización de
              proyectos. <br />
              Esta experiencia consolidó mis habilidades en frontend y me
              introdujo a prácticas modernas de desarrollo web, reforzando mi
              capacidad para crear aplicaciones funcionales y centradas en la
              experiencia del usuario.
            </>
          }
        />
        <div className="flex flex-col lg:flex-row  w-11/12 lg:w-10/12 mx-auto gap-6 lg:gap-0">
          <div className="flex w-full lg:w-8/12 justify-center items-center space-x-3 lg:space-x-5 ">
            <TechIcon src="assets/html.svg" alt="icono-html" title="HTML" />
            <TechIcon src="assets/css.svg" alt="icono-css" title="CSS" />
            <TechIcon src="assets/js.svg" alt="icono-js" title="JavaScript" />
            <TechIcon
              src="assets/tailwind.svg"
              alt="icono-tailwind"
              title="Tailwind CSS"
            />
          </div>
          <div className="flex flex-row justify-center space-x-4">
            <ButtonMedia
              className="hover:bg-amber-600 text-white transparent border-2 flex border-white p-2 lg:p-3 rounded-2xl w-28 lg:w-30 hover:scale-110 items-center  justify-center text-sm lg:text-base"
              title="Enlace a Github"
              href="https://github.com/MateoKania/agenda.git"
              titleBut={
                <span className="flex items-center gap-1 lg:gap-2 justify-center">
                  <GithubIcon width="24" heigth="24" />
                  Github
                </span>
              }
            />
            <ButtonMedia
              className="hover:bg-amber-600 text-white transparent border-2 flex border-white p-2 lg:p-3 rounded-2xl w-28 lg:w-30 hover:scale-110 items-center  justify-center text-sm lg:text-base"
              title="Enlace a ver Web"
              href="https://agenda-qp5ga8sax-mateuszs-projects-4c3532a1.vercel.app/"
              titleBut={
                <span className="flex items-center gap-1 lg:gap-2 justify-center">
                  <EyeSvg width="24" height="24" />
                  Web
                </span>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
