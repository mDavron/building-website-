import Link from "next/link";
import {
  RiFacebookFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
const socials = [
  {
    icon: <RiFacebookFill />,
    path: "",
  },
  {
    icon: <RiYoutubeFill />,
    path: "",
  },
  {
    icon: <RiInstagramFill />,
    path: "",
  },
  {
    icon: <RiTwitterFill />,
    path: "",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={`${iconStyles}`}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
