"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { User } from "lucide-react";
const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Client Statisfaction",
  },
  {
    endCountNum: 800,
    endCountText: "+",
    text: "Successful Projects",
  },
  {
    endCountNum: 32,
    endCountText: "k",
    text: "Happy Clients",
  },
  {
    endCountNum: 26,
    endCountText: "+",
    text: "Years Of Experience",
  },
];
const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2 });

  return (
    <div ref={ref} className="mt-12 xl:mt-32 bg-primary py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-secondary flex flex-col items-center justify-between gap-12 text-center xl:flex-row xl:text-left h-full">
          {statsData.map((item, index) => {
            return (
              <div key={index} className="w-full">
                <div className="text-5xl font-semibold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{item.endCountText}</span>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
