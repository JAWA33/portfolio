import React, { useContext } from "react";
import TitleAndSubTitle from "../elements/TitleAndSubTitle";
import { ThemeContext } from "../layouts/PageConfig";

const SectionForm = () => {
  const { textToShow } = useContext(ThemeContext);
  return (
    <div className="sectForm">
      <TitleAndSubTitle
        title={textToShow.contact_page.titleB.title}
        subtitle={textToShow.contact_page.titleB.subtitle}
      />
      <form className="contactForm">
        <ul className="contactForm__container">
          <div className="contactBlock contactBlock--top">
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">
                {textToShow.contact_page.form.labelA}
              </label>
              <input className="contactBlock__input font__input" type="text" />
            </li>
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">
                {textToShow.contact_page.form.labelB}
              </label>
              <input className="contactBlock__input font__input" type="text" />
            </li>
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">
                {textToShow.contact_page.form.labelC}
              </label>
              <input className="contactBlock__input font__input" type="text" />
            </li>
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">
                {textToShow.contact_page.form.labelD}
              </label>
              <input className="contactBlock__input font__input" type="text" />
            </li>
          </div>
          <div className="contactBlock contactBlock--bottom">
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">
                {textToShow.contact_page.form.labelE}
              </label>

              <div class="selectTest">
                <select>
                  <option>
                    {textToShow.contact_page.form.questions.default}
                  </option>
                  <option value="1">
                    {textToShow.contact_page.form.questions.option1}
                  </option>
                  <option value="2">
                    {textToShow.contact_page.form.questions.option2}
                  </option>
                  <option value="3">
                    {textToShow.contact_page.form.questions.option3}
                  </option>

                  <option value="4">
                    {textToShow.contact_page.form.questions.option4}
                  </option>
                </select>
              </div>
            </li>
            <li className="contactBlock__lign contactBlock__lign--fullHeight">
              <label className="contactBlock__label font__label">
                {textToShow.contact_page.form.labelF}
              </label>
              <textarea
                className="contactBlock__input font__input"
                type="text"
              />
            </li>
          </div>
        </ul>
        <button className="callToAction">
          <span className="callToAction__text">
            {textToShow.contact_page.form.button}
          </span>
        </button>
      </form>
    </div>
  );
};

export default SectionForm;
