import React from "react";
import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";


function App() {
  const [opennav, setOpenNav] = useState(false);
  const navbarRef = useRef();
  const menuiconRef = useRef();

  const handleOpenNav = () => {
    setOpenNav(!opennav);
  };

  window.addEventListener("click", (e) => {
    if (e.target !== navbarRef.current && e.target !== menuiconRef.current) {
      setOpenNav(false);
    }
  });

  const MenuItems = [
    { id: 0, List: "Home", Link: "/" },
    { id: 1, List: "Values", Link: "/values" },
    { id: 2, List: "Team", Link: "/teams" },
  ];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const scrollThreshold = 300;
    setVisible(scrollTop >= scrollThreshold);
  };

  return (
    <>
      <header
        ref={navbarRef}
        className={` ${
          visible
            ? " sticky transition-all border-b-2"
            : " relative transition-all border-0"
        } z-50 h-[70px] flex justify-between items-center w-[100%] right-0 left-0 top-0 bg-sky-950`}
      >
        <div className="flex p-2 gap-1">
          <div className=" ml-2">
            <div className=" bg-green-400 h-4 w-5 rounded-r-lg mb-1"></div>
            <div className=" bg-green-400 h-5 w-[1.8rem] rounded-r-lg"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 md:pt-0 pt-1 pl-1">
            Boldo
          </h1>
        </div>

        <nav
          ref={navbarRef}
          className={`absolute md:relative ${
            opennav ? "left-0" : "-left-[100%]"
          } md:items-center gap-6 pt-5 md:p-0 bg-sky-950 md:bg-transparent md:h-auto md:w-auto
        flex flex-col md:flex-row h-[400px] z-50  w-[100%] md:left-0  md:border-0 border-2  top-[67px] md:top-0`}
        >
          <ul
            ref={navbarRef}
            className="flex flex-col md:flex-row pl-6 gap-4 text-white md:text-white text-lg font-semibold"
          >
            {MenuItems.map((menu, index) => (
              <li key={index}>
                <NavLink
                  to={menu.Link}
                  className=" hover:bg-slate-400 active:bg-slate-400  transition-all rounded-full px-5 py-2"
                >
                  {menu.List}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className=" relative bg-slate-100 h-10 w-[130px] rounded-full text-lg font-semibold ml-8 mr-5 hover:bg-slate-300 text-black">
        <Link to='/login'>Log in</Link>
          </button>
        </nav>

        <div onClick={handleOpenNav} className=" visible md:hidden">
          {opennav ? (
            <span
              ref={menuiconRef}
              className="material-symbols-outlined text-white text-4xl bg-slate-700 rounded-full px-[0.3rem] py-1 mr-3 md:hidden"
            >
              close
            </span>
          ) : (
            <span
              ref={menuiconRef}
              className="material-symbols-outlined text-white text-4xl mr-3 md:hidden"
            >
              menu
            </span>
          )}
        </div>
      </header>
    </>
  );
}

export default App;

