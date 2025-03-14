"use client";
import { useState } from "react";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "../components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Socials from "../components/Socials";
import Logo from "../components/Logo";
import { Link as ScrollLink } from "react-scroll";

const NavMobile = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="xl:hidden z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          onClick={() => setIsOpen(true)}
          className="text-white flex items-center justify-center text-3xl"
        >
          <RiMenu3Fill />
        </SheetTrigger>
        <SheetContent className="bg-primary text-secondary border-none">
          <div className="flex flex-col items-center h-full justify-between pt-16 pb-8 ">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navigation menu
              </SheetDescription>
            </SheetHeader>
            <ul className="w-full flex flex-col gap-10 justify-center text-center">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-secondary font-medium uppercase font-primary tracking-[1.2px]"
                  >
                    <ScrollLink
                      to={link.path}
                      smooth
                      spy
                      duration={500}
                      className="cursor-pointer"
                      activeClass="text-chart-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
            <Socials containerStyles="text-secondary text-xl flex gap-5" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
