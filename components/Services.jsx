import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger } from "./ui/tabs";
import Button from "./Button";
import Image from "next/image";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";

const serviceData = [
  {
    name: "Construction",
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
    name: "Restoration",
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
    name: "Consulting",
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
  return (
    <div className="" id="services">
      Services Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
      distinctio et veritatis odit fugit. Corrupti hic nemo qui quidem, odit est
      accusantium quas dicta eligendi sunt laudantium ex maxime voluptates.
    </div>
  );
};

export default Services;
