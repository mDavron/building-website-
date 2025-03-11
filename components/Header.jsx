"use client";
import { Link as ScrollLink } from "react-scroll";
const Links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "services",
    path: "services",
  },
  {
    name: "projects",
    path: "projects",
  },
  {
    name: "contact",
    path: "contact",
  },
  {
    name: "faq",
    path: "faq",
  },
  {
    name: "stats",
    path: "stats",
  },
  {
    name: "testimonials",
    path: "testimonials",
  },
];
const Header = () => {
  return (
    <header className="py-4 bg-primary sticky top-0">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center gap-12 text-secondary">
          {Links.map((link, index) => {
            return (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth
                  spy
                  className="cursor-pointer "
                  activeClass="text-accent"
                >
                  {link.name}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
