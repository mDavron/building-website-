"use client";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
const NavDestop = ({ links }) => {
  return (
    <nav className="hidden xl:flex items-center gap-12">
      <ul className="flex ">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className="text-secondary text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-chart-4"
            >
              <ScrollLink
                to={link.path}
                smooth
                spy
                className="cursor-pointer"
                activeClass="text-chart-4"
              >
                {link.name}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
      {/* button */}
      <button className="w-[200px] h:[54px] py-[5px] bg-secondary text-primary pl-[10px] pr-[5px] flex items-center justify-between min-w[200px] group">
        <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
          {" "}
          Get a quote
        </div>
        <div className="w-11 h-11 bg-primary flex items-center justify-center ">
          <RiArrowRightUpLine className="text-secondary text-xl group-hover:rotate-45 duration-200 transition-transform" />
        </div>
      </button>
    </nav>
  );
};

export default NavDestop;
