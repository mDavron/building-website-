import Link from "next/link";
import Image from "next/image";
import PreTitle from "./PreTitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Your desription",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "Your desription",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Your desription",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Your desription",
    href: "",
  },
];
const Work = () => {
  return (
    <div id="projects" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[540px] text-center xl:mb-20">
          <PreTitle text="Our Work" center />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mx-auto mb-11 max-w-[480px]">
            Providing expert ipsum, dolor sit amet consectetur adipisicing elit.
            Odit perspiciatis modi ea obcaecati nihil deserunt.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative flex h-[492px] w-full flex-1 justify-center overflow-hidden"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt="item.img"
                quality={100}
              />
              <div className="bg-primary text-secondary absolute bottom-4 flex h-[84px] w-[90%] items-center justify-between px-4 transition-all duration-300 md:translate-y-[108px] md:group-hover:translate-y-0">
                <div className="">
                  <h4 className="text-secondary font-primary font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-char-4 text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="bg-chart-4 text-primary flex h-[44px] w-[44px] items-center justify-center text-2xl xl:h-[60px] xl:w-[60px]"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
