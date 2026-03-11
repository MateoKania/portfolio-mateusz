export function ButtonDownload({ title, href, titleBut }) {
  return (
    <>
      <a
        className="hover:animate-rotational-wave text-white transparent border-2 border-white p-3 rounded-t-2xl w-30 hover:scale-110 hover:bg-amber-600 justify-center"
        title={title}
        href={href}
        download
      >
        {titleBut}
      </a>
    </>
  );
}

export function ButtonMedia({ title, href, titleBut, className }) {
  return (
    <>
      <a className={className} target="_blank" title={title} href={href}>
        {titleBut}
      </a>
    </>
  );
}

export function ButtonContact({ className, text }) {
  return (
    <>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mateokaniadev@gmail.com"
        target="_blank"
        className={className}
      >
        <p>{text}</p>
      </a>
    </>
  );
}
