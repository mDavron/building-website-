import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";
const TopBar = () => {
  return (
    <div
      id="home"
      className="flex items-center bg-gradient-to-t from-[#ffc221] to-[#ffd76e] py-4 xl:h-16 xl:py-0"
    >
      <div className="container mx-auto">
        {/* phone,mail & socials */}
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="hidden items-center gap-8 xl:flex">
            {/* phone */}
            <div className="flex items-center gap-3">
              <div className="bg-primary text-secondary flex h-8 w-8 items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="text-primary font-medium">+1 (555) 000-0000</p>
            </div>
            {/* mail */}
            <div className="flex items-center gap-3">
              <div className="bg-primary text-secondary flex h-8 w-8 items-center justify-center">
                <RiMailFill />
              </div>
              <p className="text-primary font-medium">email@gmail.com</p>
            </div>
          </div>
          {/* socials */}
          <Socials
            containerStyles="flex items-center gap-8 mx:auto xl:mx-0"
            iconStyles="text-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
