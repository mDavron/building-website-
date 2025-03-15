import Image from "next/image";
import PreTitle from "./PreTitle";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-0">
          {/* text */}
          <div className="flex-1">
            <div className="max-w-[540px]">
              {/* pretitle */}
              <PreTitle text="About us" />
              <h2 className="h2 mb-6">Focused on exellence in every project</h2>
              <p className="mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae libero recusandae aut officiis nihil nulla, voluptate
                quam itaque odit sapiente earum architecto, unde est qui!
              </p>
              <div className="mb-10 flex w-max flex-col text-right">
                <Image
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt="signature.svg"
                />
                <p>Company SEO</p>
              </div>
              {/* btn */}
              <Button text="Contact Us" />
            </div>
          </div>
          {/* img */}
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="relative xl:h-[493px] xl:w-[444px]">
              <div className="absolute -top-4 -left-4 -z-10 hidden bg-amber-400 xl:flex xl:h-[493px] xl:w-[444px]"></div>
              <Image
                src="/assets/img/about/img.jpg"
                alt="img.jpg"
                width={444}
                height={493}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
