import Image from "next/image";
import PreTitle from "./PreTitle";
import Button from "./Button";

const About = () => {
  return (
    <section id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
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
              <div className="w-max flex flex-col text-right mb-10">
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
            <div className="relative xl:w-[444px] xl:h-[493px]">
              <div className="hidden absolute xl:flex xl:w-[444px] xl:h-[493px] bg-amber-400 -left-4 -top-4 -z-10"></div>
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
