export function Image({ href, alt, className }) {
  return (
    <>
      <img className={className} src={href} alt={alt}></img>
    </>
  );
}

export function TextAbout({ className }) {
  return (
    <>
      <p className={className}>
        Soy un "Front-End Developer" Apasionado de la informática y el
        desarrollo web. He sido una persona curiosa desde bien pequeño, siempre
        me pregunté el cómo y por qué funcionan las cosas.
        <br />
        <br />
        Descubrir la programación me permitió canalizar esa curiosidad en la
        creación de páginas web y la resolución de problemas. Me motiva aprender
        día a día, tanto de manera individual como en equipo, y disfruto
        colaborando y creciendo junto a otros. <br />
        <br />
        Me considero una persona capaz de adaptarse a cualquier situación, con
        facilidad para integrarme en equipos de trabajo y contribuir de manera
        efectiva en proyectos desafiantes. Otra de mis pasiones es el deporte,
        que ha sido una parte muy importante de mi vida desde pequeño hasta la
        actualidad, lo que me ha permitido desarrollar habilidades sociales como
        el trabajo en equipo, liderazgo y comunicación efectiva.
      </p>
    </>
  );
}
