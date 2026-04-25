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
        {/* Soy un "Front-End Developer" Apasionado de la informática y el
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
        el trabajo en equipo, liderazgo y comunicación efectiva. */}
        Desarrollador Frontend especializado en React y TypeScript, con
        experiencia creando aplicaciones limpias, escalables y mantenibles.
        Trabajo con patrones modernos como custom hooks, separación de UI y
        lógica de negocio, componentes reutilizables y arquitectura modular,
        priorizando siempre claridad, rendimiento y mantenibilidad. Tambien
        añadiendo testing a mis aplicaciones web, para comprobar su veracidad.
        <br /> He desarrollado dashboards, autenticación, sistemas con roles,
        validaciones y aplicaciones conectadas a Supabase. También diseñé y
        construí un sistema real de reservas para una escuela de surf, con
        gestión de horarios, roles y un panel de administración completo,
        trabajando con requisitos reales y entregando una solución funcional
        lista para producción. <br /> Me adapto rápido, comunico bien mis
        decisiones técnicas y estoy orientado a aportar valor desde el primer
        día mediante código claro, escalable y alineado con las necesidades del
        negocio.
      </p>
    </>
  );
}
