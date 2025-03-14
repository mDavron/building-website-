import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[70vh] bg-[url(/assets/img/hero/bg.jpg)] bg-no-repeat bg-cover bg-center relative"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>
      <div className="container mx-auto flex items-center h-full">
        <div className="z-20 text-secondary text-center xl:text-left flex flex-col justify-center items-center xl:items-start max-w-[608px]">
          <h1 className="h1 text-secondary mb-4">
            <span className="text-chart-4">Building </span>
            robust lasting solutions
          </h1>
          <p className="mb-9">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut vero
            doloribus atque voluptatum nihil architecto quasi, quae omnis
            inventore corporis!
          </p>
          {/* button */}
          <div>
            <Button
              text="See our work"
              bgcolor="bg-chart-4"
              textColor="text-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
