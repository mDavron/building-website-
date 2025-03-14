const PreTitle = ({ text, center }) => {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${center && "justify-center"}`}
    >
      <div className="w-4 h-4 bg-chart-4"></div>
      <p className="font-primary uppercase tracking-[3.2px]">{text}</p>
      <div className="w-4 h-4 bg-chart-4"></div>
    </div>
  );
};

export default PreTitle;
