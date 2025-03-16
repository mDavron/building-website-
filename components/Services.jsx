"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/tabs";
import Button from "./Button";
import Image from "next/image";

import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import PreTitle from "./PreTitle";

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    description:
      "We build with dolor sit amet consectetur adipisicing elit. Minus distinctio et veritatis odit fugit. Corrupti hic nemo qui quidem, odit est accusantium quas dicta eligendi sunt laudantium ex maxime voluptates.",
    serviceList: [
      "Residental Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing and Roofing",
      "Interior Finish",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description:
      "Revitalizing spaces with modern design consectetur adipisicing elit. Minus distinctio et veritatis fugit. Corrupti qui quidem, odit est accusantium quas dicta eligendi sunt laudantium ex maxime voluptates.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpenty",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      "Bringing and damaged structures back to adipisicing elit. Minus distinctio et veritatis odit fugit. Corrupti hic nemo qui quidem, odit est accusantium quas dicta eligendi sunt laudantium.",
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fair Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description:
      "Providing expert guidance for construction and adipisicing elit. Minus distinctio et veritatis odit fugit. Corrupti hic nemo qui quidem, odit est accusantium quas dicta eligendi sunt ",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-3.jpg" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <div className="mx-auto mb-20 max-w-[540px] text-center">
          <PreTitle text="Our Services" center />
          <h2 className="h2 mb-3">Solutions We Provide </h2>
          <p className="max-w[480px] mx-auto mb-11">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            cumque aliquid placeat exercitationem harum. Totam.
          </p>
        </div>
        {/* Tabs */}
        <Tabs
          defaultValue="construction"
          onValueChange={(value) => setActiveTab(value)}
          className="flex flex-col gap-[30px] xl:flex-row"
        >
          <TabsList className="grid h-full w-full grid-cols-1 gap-[30px] rounded-none bg-transparent p-0 md:grid-cols-2 xl:w-[345px] xl:grid-cols-1">
            {serviceData.map((item) => {
              return (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="relative flex h-[100px] w-full items-center rounded-none p-0 shadow outline-none"
                >
                  <div
                    className={`absolute left-0 flex h-[100px] w-[100px] items-center justify-center ${activeTab === item.name ? "bg-black text-white" : "bg-chart-4 text-primary"}`}
                  >
                    <div style={{ fontSize: 100 }}>{item.icon}</div>
                  </div>
                  <div className="font-primary w-[10px] text-base font-semibold tracking-[.6px] uppercase">
                    {item.name}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabcontent */}
          <div className="h-[490px] flex-1 bg-white p-[30px] shadow">
            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <div className="flex flex-col gap-[30px] md:flex-row">
                  {/* images */}
                  <div className="flex gap-5 md:flex-col xl:gap-[30px]">
                    {item.thumbs.map((thumb, index) => (
                      <div
                        key={index}
                        className="relative h-[140px] w-[140px] xl:h-[200px] xl:w-[200px]"
                      >
                        <Image src={thumb.url} fill alt={thumb.url} />
                      </div>
                    ))}
                  </div>
                  {/* text & button */}
                  <div>
                    <div>
                      <h3 className="h3">{item.title}</h3>
                      <p className="mb-10 max-w-[650px]">{item.description}</p>
                      {/* services list */}
                      <ul className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {item.serviceList.map((service, index) => {
                          return (
                            <li key={index} className="flex items-center gap-4">
                              <div className="h-[6px] w-[6px] bg-amber-200"></div>
                              <div className="text-primary font-medium capitalize">
                                {service}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      {/* btn */}
                      <Button text="Read More" />
                    </div>
                  </div>
                  {/* text & button end*/}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
