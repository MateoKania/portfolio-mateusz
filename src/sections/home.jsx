import { ButtonDownload, ButtonMedia } from "../components/buttons";
import { LinkedinIcon, GithubIcon, DownloadSvg } from "../components/icons";

export function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col  justify-center items-center min-h-screen w-screen gap-4 "
      >
        <h1 className="text-6xl  text-white font-cursive">
          Mateusz Tomasz Kania
        </h1>
        <h2 className="text-3xl  text-burlywood font-cursive ">
          FrontEnd Developer
        </h2>
        <div className="space-x-3 mt-2.5 flex">
          <ButtonDownload
            title="Descargar Curriculum Vitae"
            href="/assets/CurriculumMateo.pdf"
            titleBut={
              <span className="flex items-center gap-2 justify-center">
                {<DownloadSvg />}CV
              </span>
            }
          />
          <ButtonDownload
            title="Descargar Carta Presentación"
            href="/assets/CartapresentacionMateo.pdf"
            titleBut={
              <span className="flex items-center gap-2 justify-center">
                <DownloadSvg />
                CP
              </span>
            }
          />
        </div>
        <div className="space-x-3 mt-1  flex ">
          <ButtonMedia
            title="Enlace a Linkedin"
            href="https://www.linkedin.com/in/mateusz-tomasz-kania-756011359/"
            titleBut={
              <span className="flex items-center gap-2">
                <LinkedinIcon />
                Linkedin
              </span>
            }
          />
          <ButtonMedia
            title="Enlace a Github"
            href="https://github.com/MateoKania"
            titleBut={
              <span className="flex items-center gap-2 justify-center">
                <GithubIcon />
                Github
              </span>
            }
          />
        </div>
      </section>
    </>
  );
}
