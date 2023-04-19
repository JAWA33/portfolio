import React, { useContext } from "react";
import { ThemeContext } from "../layouts/PageConfig";
import ExpBlock from "./ExpBlock";
import Experience from "../elements/Experience";

const SectionExperience = () => {
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);
  return (
    <section className="sectExp">
      <div className="sectExp__grid font__color">
        <div className="sectExp__grid__element">
          <ExpBlock title="Education">
            <Experience
              year="1990-2000"
              title="Master in computer"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus debitis similique consequatur ab dignissimos hic totam alias molestiae. Deleniti quas porro sequi tenetur harum doloremque assumenda, numquam quibusdam cupiditate."
            />
            <Experience
              year="1990-2000"
              title="Master in computer"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus debitis similique consequatur ab dignissimos hic totam alias molestiae. Deleniti quas porro sequi tenetur harum doloremque assumenda, numquam quibusdam cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus debitis similique consequatur ab dignissimos hic totam alias molestiae. Deleniti quas porro sequi tenetur harum doloremque assumenda, numquam quibusdam cupiditate."
            />
          </ExpBlock>
        </div>
        <div className="sectExp__grid__element">
          <ExpBlock title="Experience">
            {" "}
            <Experience
              year="1990-2000"
              title="Master in computer"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus debitis similique consequatur ab dignissimos hic totam alias molestiae. Deleniti quas porro sequi tenetur harum doloremque assumenda, numquam quibusdam cupiditate."
            />
            <Experience
              year="1990-2000"
              title="Master in computer"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus debitis similique consequatur ab dignissimos hic totam alias molestiae. Deleniti quas porro sequi tenetur harum doloremque assumenda, numquam quibusdam cupiditate."
            />
            <Experience
              year="1990-2000"
              title="Master in computer"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus debitis similique consequatur ab dignissimos hic totam alias molestiae. Deleniti quas porro sequi tenetur harum doloremque assumenda, numquam quibusdam cupiditate."
            />
          </ExpBlock>
        </div>
        <div className="sectExp__grid__element sectExp__grid__element--larger">
          <ExpBlock title="Before Coding">
            <Experience
              year="1990-2000"
              title="Master in computer"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus debitis similique consequatur ab dignissimos hic totam alias molestiae. Deleniti quas porro sequi tenetur harum doloremque assumenda, numquam quibusdam cupiditate."
            />
            <Experience
              year="1990-2000"
              title="Master in computer"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus debitis similique consequatur ab dignissimos hic totam alias molestiae. Deleniti quas porro sequi tenetur harum doloremque assumenda, numquam quibusdam cupiditate."
            />
            <Experience
              year="1990-2000"
              title="Master in computer"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus debitis similique consequatur ab dignissimos hic totam alias molestiae. Deleniti quas porro sequi tenetur harum doloremque assumenda, numquam quibusdam cupiditate."
            />
          </ExpBlock>
        </div>
      </div>
    </section>
  );
};

export default SectionExperience;
