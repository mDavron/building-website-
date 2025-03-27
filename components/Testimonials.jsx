import Image from "next/image";
import PreTitle from "./PreTitle";
import Button from "./Button";
import Slider from "./Slider";
const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-16 lg:pt-32">
      <div className="container mx-auto">
        <div className="relative flex flex-col lg:flex-row">
          {/* text */}
          <div className="mb-12 max-w-[484px] flex-1 lg:mb-0 lg:pt-[54px]">
            <PreTitle text="Testimonials" />
            <h2 className="h2 mb-6">Built on Trust,Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              adipisicing nostrum esse eos incidunt, molestiae rerum vero! Harum
              ratione lorem totam aperiam sit. Ad, ratione. Obcaecati
            </p>
            <Button text="Work with us" />
          </div>
          {/* img & slider */}
          <div className="flex flex-1 flex-col xl:flex-row xl:justify-end">
            <div className="relative hidden h-[570px] bg-amber-300 lg:flex lg:w-[580px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                alt="testimonials/img.jpg"
                fill
                quality={100}
                className="absolute object-cover"
              />
            </div>
            <div className="relative max-w-max lg:absolute lg:right-[170px] lg:bottom-0">
              {/* Quote icon svg */}
              <Image
                src="/assets/img/testimonials/quote.svg"
                alt=""
                width={54}
                height={36}
                className="absolute -top-4 left-[60px] z-20"
              />
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
