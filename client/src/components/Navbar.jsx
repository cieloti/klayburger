import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import klayburger from "../images/klayburger.png";
import { Outlet, Link } from "react-router-dom";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <div className="flex justify-start item-center p-4">
        <Link className="mx-4 cursor-pointer" to="/welcome">
          <img src={klayburger} alt="logo" className="w-24 cursor-pointer" />
        </Link>
          {/* <div className="mx-4 cursor-pointer text-white">KlayBurger</div> */}
        </div>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <Link className="mx-4 cursor-pointer" to="/menu">Menu</Link>
        <Link className="mx-4 cursor-pointer" to="/Services">Store</Link>
        <Link className="mx-4 cursor-pointer" to="/Services">What's New</Link>
        <Link className="mx-4 cursor-pointer" to="/Services">Customer Center</Link>
        {/* {["Menu", "Store", "What's New", "Customer Center"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))} */}
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> */}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
