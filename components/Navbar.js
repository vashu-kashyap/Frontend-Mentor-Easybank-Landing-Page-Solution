import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "../public/logo.svg";
import hamburger from "../public/icon-hamburger.svg";
import close from "../public/icon-close.svg";

const Navbar = () => {
  // State for menu visibility and menu toggler icon
  const [menu, setMenu] = useState("hidden");
  const [menuToggler, setMenuToggler] = useState(hamburger);

  // Function to toggle the menu and change the menu toggler icon
  const toggleMenu = () => {
    if (menuToggler === hamburger) {
      setMenu("block");
      setMenuToggler(close);
    } else {
      setMenu("hidden");
      setMenuToggler(hamburger);
    }
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenu("hidden");
    setMenuToggler(hamburger);
  };

  // Add event listeners to close menu when clicking on a navigation link or scrolling
  useEffect(() => {
    const handleLinkClick = () => {
      closeMenu();
    };

    const handleScroll = () => {
      closeMenu();
    };

    // Add event listeners
    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.querySelectorAll(".menu-link").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full flex justify-between items-center relative pl-6 px-8 py-5 bg-white shadow-sm z-50 md:px-48">
      {/* Brand logo */}
      <div className="nav-brand">
        <Link href={"/"}>
          <Image src={logo} alt="eassybank icon" />
        </Link>
      </div>

      {/* Navigation menu */}
      <nav
        className={`nav-menu absolute w-full left-0 top-[70px] px-6 ${menu} md:block scale-up-center md:static md:px-0 `}
      >
        <ul className="menu-list bg-[#fafafa] w-full py-9 flex flex-col justify-center items-center gap-y-4 rounded-xl shadow-sm md:flex-row md:gap-x-8 md:bg-transparent md:gap-y-0 md:shadow-none md:py-0">
          {/* Menu items */}
          {["Home", "About", "Contact", "Blog", "Careers"].map(
            (item, index) => (
              <li key={index} className="list-item">
                <Link
                  href={"/"}
                  className="menu-link text-light-gray text-2xl leading-[18px] font-medium md:font-light md:text-sm border-b-[3px] pb-8 border-transparent hover:border-[#31d35c] transition-all ease-in-out duration-300"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      <button className="action-btn px-[35px] py-[13px] rounded-full text-sm font-normal hidden sm:block leading-5 text-white w-[195px] hover:opacity-50 transition-opacity ease-in-out duration-300">
        Request Invite
      </button>

      {/* Menu toggler button */}
      <button className="menu-toggler-btn md:hidden w-6 h-6" onClick={toggleMenu}>
        <Image src={menuToggler} alt="menu-toggler-icon" />
      </button>
    </header>
  );
};

export default Navbar;
