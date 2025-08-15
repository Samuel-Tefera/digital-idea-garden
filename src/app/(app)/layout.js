import NavBar from '../_components/NavBar';

function Layout({ children }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <header>
        <NavBar />
      </header>
      <main className="col-span-full overflow-y-scroll px-6 pt-6 sm:px-8 md:px-12 lg:px-16">
        {children}
      </main>
    </div>
  );
}

export default Layout;
