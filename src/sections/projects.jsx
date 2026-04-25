import { useState } from "react";
import { TextH1 } from "../components/texts";
import { ProjectCard1 } from "../components/projectCard";
import { SmallProjectCard } from "../components/SmallProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { TechIcon } from "../components/icons";

const qrText = (
  <>
    Generador de códigos QR desarrollado con React.js y TailwindCSS, pensado
    para crear y descargar códigos QR de forma rápida y sencilla.
    <br /> El usuario puede introducir cualquier texto, enlace o dato que quiera
    codificar y el sistema genera al instante un QR limpio y legible, listo para
    usar en proyectos personales o profesionales.
    <br /> La interfaz está diseñada con un enfoque minimalista y responsive,
    asegurando una buena experiencia tanto en escritorio como en móvil.
    <br /> Además, el proyecto incluye la opción de descargar el código QR como
    imagen, lo que permite integrarlo fácilmente en documentos, presentaciones,
    carteles o materiales impresos.
    <br /> A nivel técnico, el generador aprovecha la modularidad de React para
    separar la lógica de generación del QR de la interfaz, y utiliza TailwindCSS
    para construir una UI consistente, rápida de iterar y fácil de mantener.
  </>
);

const saveMoneyText = (
  <>
    Save‑Money es una aplicación completa de gestión financiera personal
    diseñada para ofrecer al usuario una visión clara, ordenada y detallada de
    sus ingresos, gastos y hábitos económicos.
    <br /> El proyecto incluye un sistema de autenticación seguro, un dashboard
    dinámico con métricas en tiempo real y un flujo de CRUD totalmente funcional
    para registrar movimientos financieros. <br />
    El objetivo principal es proporcionar una herramienta intuitiva, rápida y
    accesible que permita tomar mejores decisiones económicas. <br /> A nivel
    técnico, la aplicación está construida con Next.js, Supabase y Zustand, lo
    que permite un rendimiento sólido, un estado global limpio y una experiencia
    fluida incluso con grandes volúmenes de datos. <br /> La interfaz está
    diseñada con TailwindCSS, priorizando la claridad visual, la accesibilidad y
    el diseño mobile‑first.
  </>
);

// const surfText = (
//   <>
//     Surf Reservations es una plataforma para reservar clases de surf con
//     autenticación, gestión de horarios y panel de usuario.
//   </>
// );
const favGamesText = (
  <>
    Fav‑Games es una aplicación enfocada en la exploración de videojuegos
    mediante la API de RAWG, permitiendo a los usuarios buscar títulos, ver
    información detallada y guardar sus favoritos. <br /> El proyecto integra
    paginación, filtros dinámicos y persistencia local para ofrecer una
    experiencia rápida, fluida y personalizada. <br /> La aplicación está
    desarrollada con React, Zustand y TailwindCSS, priorizando el rendimiento,
    la claridad visual y la modularidad. <br />
    El flujo de favoritos está optimizado para ser instantáneo y persistente,
    incluso tras cerrar la aplicación.
  </>
);
const cryptoText = (
  <>
    Crypto Info es un dashboard de criptomonedas que muestra precios,
    variaciones, volumen y capitalización de mercado en tiempo real. <br />
    El proyecto integra una API externa para obtener datos actualizados y los
    presenta mediante una interfaz clara, moderna y orientada a la toma de
    decisiones.
    <br /> El estado global está gestionado con Zustand, lo que permite una
    actualización fluida sin recargar la página.
    <br /> La interfaz está optimizada con TailwindCSS y diseñada para ser
    visualmente clara incluso con grandes cantidades de datos.
  </>
);
const agendaText = (
  <>
    Agenda Diaria es una aplicación que combina tareas, clima y noticias en un
    único panel productivo.
    <br /> El objetivo es ofrecer al usuario una visión completa de su día sin
    necesidad de cambiar entre aplicaciones, integrando información útil y
    herramientas de organización personal.
    <br /> El proyecto integra varias APIs externas (clima y noticias) y un
    sistema de tareas con persistencia local.
    <br /> La interfaz está diseñada para ser rápida, intuitiva y accesible
    desde cualquier dispositivo, con un enfoque minimalista y orientado a la
    productividad.
  </>
);

const qrIcons = (
  <>
    <TechIcon src="assets/js.svg" />
    <TechIcon src="assets/react.svg" />
    <TechIcon src="assets/tailwind.svg" />
  </>
);
const saveMoneyIcons = (
  <>
    <TechIcon src="assets/nextjs.svg" />
    <TechIcon src="assets/ts.svg" />
    <TechIcon src="assets/react.svg" />
    <TechIcon src="assets/supabase-icon.svg" />
    <TechIcon src="assets/tailwind.svg" />
  </>
);
// const surfIcons = (
//   <>
//     <TechIcon src="assets/react.svg" />
//     <TechIcon src="assets/ts.svg" />
//     <TechIcon src="assets/supabase-icon.svg" />
//     <TechIcon src="assets/tailwind.svg" />
//   </>
// );
const favGamesIcons = (
  <>
    <TechIcon src="assets/react.svg" />
    <TechIcon src="assets/ts.svg" />
    <TechIcon src="assets/tailwind.svg" />
  </>
);
const cryptoIcons = (
  <>
    <TechIcon src="assets/react.svg" />
    <TechIcon src="assets/js.svg" />
    <TechIcon src="assets/tailwind.svg" />
  </>
);
const agendaIcons = (
  <>
    <TechIcon src="assets/html.svg" />
    <TechIcon src="assets/css.svg" />
    <TechIcon src="assets/js.svg" />
    <TechIcon src="assets/tailwind.svg" />
  </>
);

export function Projects() {
  const [modalData, setModalData] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="scroll-mt-24 timeline-view animate-blurred-fade-in animate-range-[entry_0%_contain_20%]"
      >
        <TextH1 text="Proyectos" />

        <ProjectCard1
          titleProject="Save-Money"
          images={[
            "/assets/cap1.png",
            "/assets/cap2.png",
            "/assets/cap3.png",
            "/assets/cap4.png",
            "/assets/cap5.png",
            "/assets/cap6.png",
          ]}
          text={saveMoneyText}
          TechIcon={saveMoneyIcons}
          github="https://github.com/MateoKania/save-money"
          demo="https://count-money.netlify.app/"
        />

        {/* <ProjectCard1
        titleProject="Surf Reservations"
        images={["/assets/surf1.png", "/assets/surf2.png", "/assets/surf3.png"]}
        text={surfText}
        TechIcon={surfIcons}
      /> */}

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
          <SmallProjectCard
            title="Fav-Games"
            image="/assets/home.png"
            short="Gestor de videojuegos con favoritos."
            onClick={() =>
              setModalData({
                title: "Fav-Games",
                images: [
                  "/assets/home.png",
                  "/assets/info-game.png",
                  "/assets/login.png",
                  "/assets/modi-email-pass.png",
                  "/assets/mylist.png",
                  "/assets/register.png",
                ],
                text: favGamesText,
                tech: favGamesIcons,
                github: "https://github.com/MateoKania/fav-games",
                demo: "netlify.com",
              })
            }
          />

          <SmallProjectCard
            title="Crypto Info"
            image="/assets/crypto-info-home.png"
            short="Dashboard de criptomonedas."
            onClick={() =>
              setModalData({
                title: "Crypto Info",
                images: [
                  "/assets/crypto-info-home.png",
                  "/assets/crypto-info-graphics.png",
                  "/assets/crypto-info-favs.png",
                  "/assets/crypto-info-news.png",
                  "/assets/crypto-info-converter.png",
                ],
                text: cryptoText,
                tech: cryptoIcons,
                github: "https://github.com/MateoKania/crypto.git",
                demo: "https://info-cripto.netlify.app/",
              })
            }
          />

          <SmallProjectCard
            title="Agenda Diaria"
            image="/assets/agenda1.png"
            short="Agenda con tareas, clima y noticias."
            onClick={() =>
              setModalData({
                title: "Agenda Diaria",
                images: [
                  "/assets/agenda1.png",
                  "/assets/agendaTareas.png",
                  "/assets/agendaTiempo.png",
                  "/assets/agendaNoticias.png",
                  "/assets/agendaCalendario.png",
                  "/assets/agendaCrono.png",
                ],
                text: agendaText,
                tech: agendaIcons,
                github: "https://github.com/MateoKania/agenda.git",
                demo: "https://agenda-qp5ga8sax-mateuszs-projects-4c3532a1.vercel.app/",
              })
            }
          />
          <SmallProjectCard
            title="Generador QR"
            image="/assets/qr2.png"
            short="Generador de QR para tu pagina web"
            onClick={() =>
              setModalData({
                title: "Generador de QR",
                images: ["/assets/Qr1.png", "/assets/qr2.png"],
                text: qrText,
                tech: qrIcons,
                github: "https://github.com/MateoKania",
                demo: "netlify.com",
              })
            }
          />
        </div>
      </section>
      {modalData && (
        <ProjectModal data={modalData} onClose={() => setModalData(null)} />
      )}{" "}
    </>
  );
}
