const TitleAndSubTitle = ({ title, subtitle }) => {
  return (
    <div className="titleAndSubTitle">
      <h2 className="font__BigText__capital font__BigText__capital--C textColor">
        {title}
      </h2>
      <p className="font__BigText__writing font__BigText__writing--A font__color">
        {subtitle}
      </p>
    </div>
  );
};

export default TitleAndSubTitle;
