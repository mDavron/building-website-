"use client";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import SliderBtns from "./SliderBtns";



const Slider = ({ text, bgcolor, textColor }) => {
  const swiper = useSwiper();

  return (
    <Swiper className="h-[200px] w-full max-w-[630px] bg-white shadow-sm">
      {/* SLIDE 1 */}
      <SwiperSlide>
        <div className="flex h-[200px] items-center gap-9 px-12 md:pl-[60px]">
          {/* avatar img */}
          <div className="relative h-[90px] w-[90px] xl:flex">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              quality={100}
              alt="avatar.jpg"
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col gap-2 xl:max-w-[340px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              natus!
            </p>
            <p className="font-primary text-primary font-semibold">Jan Doe</p>
          </div>
        </div>
      </SwiperSlide>
      {/* SLIDE 2 */}
      <SwiperSlide>
        <div className="flex h-[200px] items-center gap-9 px-12 md:pl-[60px]">
          {/* avatar img */}
          <div className="relative h-[90px] w-[90px] xl:flex">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              quality={100}
              alt="avatar.jpg"
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col gap-2 xl:max-w-[340px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              natus!
            </p>
            <p className="font-primary text-primary font-semibold">Jan Doe</p>
          </div>
        </div>
      </SwiperSlide>
      {/* SLIDE 3 */}
      <SwiperSlide>
        <div className="flex h-[200px] items-center gap-9 px-12 md:pl-[60px]">
          {/* avatar img */}
          <div className="relative h-[90px] w-[90px] xl:flex">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              quality={100}
              alt="avatar.jpg"
              className="object-contain"
            />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col gap-2 xl:max-w-[340px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              natus!
            </p>
            <p className="font-primary text-primary font-semibold">Jan Doe</p>
          </div>
        </div>
      </SwiperSlide>
      {/* Prev & Next Buttons */}
      <SliderBtns/>
    </Swiper>
  );
};

export default Slider;
