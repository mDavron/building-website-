import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text, bgcolor, textColor }) => {
  return (
    <button
      className={`${
        bgcolor || "bg-chart-4"
      } ${textColor} w-[200px] h:[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w[200px] group`}
    >
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center ">
        <RiArrowRightUpLine className="text-secondary text-xl group-hover:rotate-45 duration-200 transition-transform" />
      </div>
    </button>
  );
};

export default Button;
