export function Layout({ children }) {
  return (
    <>
      <div className="flex min-w-screen min-h-screen bg-black bg-grid scroll-smooth font-family font-cursive flex-col ">
        {children}
      </div>
    </>
  );
}
