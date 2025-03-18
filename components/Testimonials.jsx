import Image from "next/image";
import PreTitle from "./PreTitle";
import Button from "./Button";
import Slider from "./Slider";
Button;
const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="relative flex flex-col xl:flex-row">
          {/* text */}
          <div className="mb-12 max-w-[484px] flex-1 xl:mb-0 xl:pt-[54px]">
            <h2 className="h2 mb-6">Built on Trust,Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              adipisicing nostrum esse eos incidunt, molestiae rerum vero! Harum
              ratione lorem totam aperiam sit. Ad, ratione. Obcaecati
            </p>
            <Button text="Work with us" />
          </div>
          {/* img & slider */}
          <div className="flex-1">
            <div className="relative hidden h-[580px] bg-amber-300 xl:flex xl:w-[570px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                alt="testimonials/img.jpg"
                fill
                quality={100}
                className="absolute object-cover"
              />

              <div className="relative max-w-max bg-pink-400 xl:absolute xl:right-0 xl:bottom-0">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
