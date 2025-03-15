"use client";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";
const NavDestop = ({ links }) => {
  return (
    <nav className="hidden items-center gap-12 xl:flex">
      <ul className="flex">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className="text-secondary font-primary after:text-chart-4 text-sm font-medium tracking-[1.2px] uppercase after:mx-4 after:content-['/'] last:after:content-none"
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
      <Button
        text="Get a quote"
        bgcolor="bg-secondary"
        textColor="text-primary"
      />
    </nav>
  );
};

export default NavDestop;
