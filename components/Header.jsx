import Logo from "./Logo";
import NavMobile from "./NavMobile";
import NavDestop from "./NavDestop";
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
  // {
  //   name: "faq",
  //   path: "faq",
  // },
  // {
  //   name: "stats",
  //   path: "stats",
  // },
  // {
  //   name: "testimonials",
  //   path: "testimonials",
  // },
];
const Header = () => {
  return (
    <header className="py-4 bg-primary sticky top-0 z-50">
      <div className="container mx-auto">
        {/* 12.03.2025 SHU YERGA KELIB TUHTATDIM 41-MIN:15-S */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Logo />
          {/* desctop nav & btn */}
          <NavDestop links={Links} />
          {/* mobile nav */}
          <NavMobile links={Links} />
        </div>
      </div>
    </header>
  );
};

export default Header;
