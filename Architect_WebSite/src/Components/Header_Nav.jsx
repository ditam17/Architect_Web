export default function Header_Nav() {
  return (
    <>
      <header>
        <div className="h-screen w-full bg-[url(https://www.w3schools.com/w3images/architect.jpg)]  flex justify-center items-center tracking-[5px] opacity-95 max-sm:h-64 bg-cover  bg-center bg-no-repeat max-sm:mt-10 ">
          <h1 className="text-4xl text-white  ">
            <span className="bg-black   p-2 opacity-70">BR</span>
            <span className="bg-none ml-4">Architects</span>
          </h1>
        </div>

        <div className="flex z-50 justify-between  items-center font-sans bg-white shadow-lg fixed w-full top-0 text-lg font-medium p-3 tracking-[5px]  ">
          <a href="#" className=" font-bold ml-5 flex items-center max-sm:ml-0">
            BR <span className="font-normal ml-3  ">Architects</span>
          </a>

          <nav className="space-x-3 mr-3 max-sm:hidden">
            <a
              href="#projects"
              className="hover:bg-gray-500 sm:p-3 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#about"
              className="hover:bg-gray-500 sm:p-3 hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:bg-gray-500 sm:p-3 hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
