import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-[70vh] bg-[url(/assets/img/hero/bg.jpg)] bg-cover bg-center bg-no-repeat"
    >
      {/* overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/0 via-black/50 to-black/70"></div>
      <div className="container mx-auto flex h-full items-center">
        <div className="text-secondary z-20 flex max-w-[608px] flex-col items-center justify-center text-center xl:items-start xl:text-left">
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
