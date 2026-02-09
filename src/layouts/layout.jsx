export function Layout({ children }) {
  return (
    <>
      <div className="flex w-screen min-h-screen bg-black bg-grid scroll-smooth font-cursive flex-col ">
        {children}
      </div>
    </>
  );
}
