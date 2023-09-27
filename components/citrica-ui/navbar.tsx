"use client";
import { useEffect, useRef, useState } from "react";
import { Container, Col } from '@citrica/objects'
import Link from "next/link";

export const navLinks = [
  {
    id: "hero-section",
    title: "Top",
  },
  {
    id: "our-products",
    title: "Productos",
  },
  {
    id: "parrilla",
    title: "Mi Parrilla",
  },
  {
    id: "delivery",
    title: "Jordi Delivery",
  },
  {
    id: "our-partners",
    title: "Socios",
  },
  {
    id: "carrusel",
    title: "Videos",
  },
  {
    id: "boutiques",
    title: "Boutiques",
  },
  
];

const Navbar = () => {
  const [active, setActive] = useState("hero-section");
  const [toggle, setToggle] = useState(false);

  const closeSidebar = () => {
    setToggle(false);
  };

  // change nav color scrolling
  const [colorbg, setcolorbg] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolorbg(true)
    } else {
      setcolorbg(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  // function close with outside of menu
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };



  });

  return (
    <Container >
    <nav className={`title w-full flex pr-1 pl-1 pt-3 pb-3 fixed right-0  box-content z-30 justify-around items-center ${colorbg ? "bg-[rgba(0,0,0,0.651)] justify-end " : "bg-[rgba(0,0,0,0.651)] justify-around"}
    `}>

      {/* Logo */}
      <picture className={` flex  ${colorbg ? "flex" : "hidden only-sm-md"}
    `}>
            <img 
              src='/img/jordi-prime-grill-logo.svg'
              alt="logo-nav"
              className=""
            />
        </picture>
    
      {/* Desktop Navigation */}
      <ul className="only-lg-nav list-none gap-14"
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`flex text-[#D5B16C] cursor-pointer ${
              active === nav.title ? "underline decoration-red-800 decoration-4" : "text-[#D5B16C]"
            } `}
            onClick={() => setActive(nav.title)}
          >
            <Link className="pb-1 " href={`#${nav.id}`} prefetch={true}>
                    {nav.title}
                  </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      
        <div ref={menuRef} className="only-sm-md justify-center items-center p-5"
        >
          <picture>
            <img
              src={toggle ? '/img/icons/Menuclose.svg' : '/img/icons/Menu.svg'}
              alt="menu"
              className="w-[40px] h-[40px] object-contain"
              onClick={() => setToggle(!toggle)}
            />
          </picture>

          {/* Sidebar */}
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 bg-black-brand mx-4 my-2 min-w-[140px] rounded-xl z-50 `}
          >
            <ul className="  list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` subtitle navbar-text-color text-white font-medium cursor-pointer text-[16px]
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    closeSidebar();
                  }}
                >
                  <Link href={`#${nav.id}`} prefetch={true}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
    </nav>
      </Container>
  );
};

export default Navbar;

