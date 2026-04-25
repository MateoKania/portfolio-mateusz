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
