import React from "react";
import TitleAndSubTitle from "../elements/TitleAndSubTitle";

const SectionForm = () => {
  return (
    <div className="sectForm">
      <TitleAndSubTitle
        title="Send me an e-mail"
        subtitle="I'm very responsive to messages"
      />
      <form className="contactForm">
        <ul className="contactForm__container">
          <div className="contactBlock contactBlock--top">
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">Nom</label>
              <input className="contactBlock__input font__input" type="text" />
            </li>
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">Prénom</label>
              <input className="contactBlock__input font__input" type="text" />
            </li>
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">
                Entreprise
              </label>
              <input className="contactBlock__input font__input" type="text" />
            </li>
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">E-mail</label>
              <input className="contactBlock__input font__input" type="text" />
            </li>
          </div>
          <div className="contactBlock contactBlock--bottom">
            <li className="contactBlock__lign">
              <label className="contactBlock__label font__label">Sujet</label>

              <div class="selectTest">
                <select>
                  <option>De quoi souhaitez vous discuter ?</option>
                  <option value="1">
                    Je souhaiterais des informations complémentaires
                  </option>
                  <option value="2">
                    J'ai une besoin d'un développeur pour une mission
                  </option>
                  <option value="3"> J'ai besoin d'un site web</option>

                  <option value="5">Autre sujet</option>
                </select>
              </div>
            </li>
            <li className="contactBlock__lign contactBlock__lign--fullHeight">
              <label className="contactBlock__label font__label">Message</label>
              <textarea
                className="contactBlock__input font__input"
                type="text"
              />
            </li>
          </div>
        </ul>
        <button className="callToAction">
          <span className="callToAction__text">Envoyez</span>
        </button>
      </form>
    </div>
  );
};

export default SectionForm;
