import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text, bgcolor, textColor }) => {
  return (
    <button
      className={`${
        bgcolor || "bg-chart-4"
      } ${textColor} h:[54px] min-w[200px] group flex w-[200px] items-center justify-between py-[5px] pr-[5px] pl-[10px]`}
    >
      <div className="font-primary flex-1 text-center text-sm font-bold tracking-[1.2px] uppercase">
        {text}
      </div>
      <div className="bg-primary flex h-11 w-11 items-center justify-center">
        <RiArrowRightUpLine className="text-secondary text-xl transition-transform duration-200 group-hover:rotate-45" />
      </div>
    </button>
  );
};

export default Button;
