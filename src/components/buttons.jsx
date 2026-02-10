export function ButtonDownload({ title, href, titleBut }) {
  return (
    <>
      <a
        className=" text-white transparent border-2 border-white p-3 rounded-t-2xl w-30 hover:scale-110 hover:bg-amber-600 justify-center"
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
