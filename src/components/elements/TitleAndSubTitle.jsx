const TitleAndSubTitle = ({ title, subtitle }) => {
  return (
    <div className="titleAndSubTitle">
      <h2 className="font__title textColor">{title}</h2>
      <p className="font__basicText font__color">{subtitle}</p>
    </div>
  );
};

export default TitleAndSubTitle;
