import { useSwiper } from "swiper/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const SliderBtns = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute right-2 bottom-2 z-10 flex w-max gap-1">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-primary flex h-[48px] w-[48px] cursor-pointer items-center justify-center bg-amber-300 text-[22px] transition-colors hover:bg-amber-400"
      >
        <RiArrowLeftLine />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-primary flex h-[48px] w-[48px] cursor-pointer items-center justify-center bg-amber-300 text-[22px] transition-colors hover:bg-amber-400"
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
};

export default SliderBtns;
