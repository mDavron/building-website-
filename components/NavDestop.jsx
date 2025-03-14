"use client";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";
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
      <Button
        text="Get a quote"
        bgcolor="bg-secondary"
        textColor="text-primary"
      />
    </nav>
  );
};

export default NavDestop;
