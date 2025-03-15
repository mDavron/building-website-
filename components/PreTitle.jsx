const PreTitle = ({ text, center }) => {
  return (
    <div
      className={`mb-4 flex items-center gap-3 ${center && "justify-center"}`}
    >
      <div className="bg-chart-4 h-4 w-4"></div>
      <p className="font-primary tracking-[3.2px] uppercase">{text}</p>
      <div className="bg-chart-4 h-4 w-4"></div>
    </div>
  );
};

export default PreTitle;
