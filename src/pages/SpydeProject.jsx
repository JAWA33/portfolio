import React, { useContext, useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import RevealText from "../animations/RevealText";
import goOutAnimation from "../helpers/goOutAnimation";
import { ThemeContext } from "../components/layouts/PageConfig";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import Diaporama from "../components/blocks/Diaporama";
import FunctionText from "../components/blocks/FunctionText";
import ProjectSection from "../components/blocks/ProjectSection";
import ProjectSubTitle from "../components/blocks/ProjectSubTitle";
import ProjectGridElement from "../components/blocks/ProjectGridElement";
import FunctionList from "../components/blocks/FunctionList";

import DiapoA_1 from "../img/diaporama/spyde/acceuil.png";
import DiapoA_2 from "../img/diaporama/spyde/blog.png";
import DiapoA_3 from "../img/diaporama/spyde/blog_edition.png";
import DiapoA_4 from "../img/diaporama/spyde/nouveau_compte.png";
import DiapoA_5 from "../img/diaporama/spyde/siteSpydeC.png";
import DiapoA_6 from "../img/diaporama/spyde/siteSpydeD.png";
import DiapoA_7 from "../img/diaporama/spyde/siteSpydeE.png";
import DiapoA_8 from "../img/diaporama/spyde/siteSpydeF.png";
import DiapoA_9 from "../img/diaporama/spyde/siteSpydeG.png";
import DiapoA_10 from "../img/diaporama/spyde/phoneA.png";
import DiapoA_11 from "../img/diaporama/spyde/phoneB.png";

import DiapoB_1 from "../img/diaporama/spyde/logo_presA.png";
import DiapoB_2 from "../img/diaporama/spyde/logo_presB.png";
import DiapoB_3 from "../img/diaporama/spyde/logo_presC.png";
import DiapoB_4 from "../img/diaporama/spyde/logo_presD.png";

import DiapoC_1 from "../img/diaporama/spyde/presentationA.jpg";
import DiapoC_2 from "../img/diaporama/spyde/presentationB.jpg";
import DiapoC_3 from "../img/diaporama/spyde/presentationC.jpg";
import DiapoC_4 from "../img/diaporama/spyde/presentationD.jpg";
import DiapoC_5 from "../img/diaporama/spyde/presentationE.jpg";

import DiapoD_1 from "../img/diaporama/spyde/templateSiteA.png";
import DiapoD_2 from "../img/diaporama/spyde/templateSiteB.png";
import DiapoD_3 from "../img/diaporama/spyde/templateSiteC.png";
import DiapoD_4 from "../img/diaporama/spyde/templateSiteD.png";
import DiapoD_5 from "../img/diaporama/spyde/templateSiteE.png";

import DiapoE_1 from "../img/diaporama/spyde/undrawA.png";
import DiapoE_2 from "../img/diaporama/spyde/undrawB.png";
import DiapoE_3 from "../img/diaporama/spyde/undrawC.png";
import DiapoE_4 from "../img/diaporama/spyde/undrawD.png";

import DiapoF_1 from "../img/diaporama/spyde/CpanelA.png";
import DiapoF_2 from "../img/diaporama/spyde/CpanelB.png";
import DiapoF_3 from "../img/diaporama/spyde/CpanelC.png";
import DiapoF_4 from "../img/diaporama/spyde/Lws.png";

import logoFinalA_Black from "../img/diaporama/spyde/logo_final_A.svg";
import logoFinalA_White from "../img/diaporama/spyde/logo_final_A-white.svg";
import logoFinalB_Black from "../img/diaporama/spyde/logo_final_B.svg";
import logoFinalB_White from "../img/diaporama/spyde/logo_final_B-white.svg";

import charteGraphique from "../img/diaporama/spyde/charte.png";
import charteGraphiqueWhite from "../img/diaporama/spyde/charte-white.png";

import backendLogos from "../img/diaporama/spyde/backend.png";
import frontendLogos from "../img/diaporama/spyde/frontend.png";

import certificatRecyclage from "../img/diaporama/spyde/certificat.jpg";

import visitCard_recto from "../img/diaporama/spyde/visite_recto.png";
import visitCard_verso from "../img/diaporama/spyde/visite_verso.png";

const SpydeProject = () => {
  const { textToShow, theme } = useContext(ThemeContext);

  const [navigation, setNavigation] = useState(false);
  const [autoSrollTo, setAutoScrollTo] = useState(null);

  const presentationSection = useRef(null);
  const functionsSection = useRef(null);
  const brandingSection = useRef(null);
  const ecosystemeSection = useRef(null);
  const webdesignSection = useRef(null);
  const developerSection = useRef(null);
  const onlineSection = useRef(null);
  const globalArticle = useRef(null);

  const handleScroll = (ref) => {
    let adjustOffSetTop = 0;
    if (window.innerWidth < 1000) {
      adjustOffSetTop = -130;
    }
    globalArticle.current.scrollTo({
      top: ref.offsetTop + adjustOffSetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    autoSrollTo === textToShow.spyde.menu.A.text &&
      handleScroll(presentationSection.current);
    autoSrollTo === textToShow.spyde.menu.B.text &&
      handleScroll(functionsSection.current);
    autoSrollTo === textToShow.spyde.menu.C.text &&
      handleScroll(brandingSection.current);
    autoSrollTo === textToShow.spyde.menu.D.text &&
      handleScroll(ecosystemeSection.current);
    autoSrollTo === textToShow.spyde.menu.E.text &&
      handleScroll(webdesignSection.current);
    autoSrollTo === textToShow.spyde.menu.F.text &&
      handleScroll(developerSection.current);
    autoSrollTo === textToShow.spyde.menu.G.text &&
      handleScroll(onlineSection.current);
  }, [autoSrollTo, textToShow]);

  const arrayOfSliders = [
    { image: DiapoA_1, title: "", text: "" },
    { image: DiapoA_2, title: "", text: "" },
    { image: DiapoA_3, title: "", text: "" },
    { image: DiapoA_4, title: "", text: "" },
  ];

  const arrayOfSliders_presentation = [
    { image: DiapoA_1, title: "", text: "" },
    { image: DiapoA_2, title: "", text: "" },
    { image: DiapoA_10, title: "", text: "" },
    { image: DiapoA_3, title: "", text: "" },
    { image: DiapoA_4, title: "", text: "" },
    { image: DiapoA_5, title: "", text: "" },
    { image: DiapoA_6, title: "", text: "" },
    { image: DiapoA_7, title: "", text: "" },
    { image: DiapoA_8, title: "", text: "" },
    { image: DiapoA_9, title: "", text: "" },
    { image: DiapoA_11, title: "", text: "" },
  ];

  const arrayOfSliders_logoPurpose = [
    { image: DiapoB_1, title: "", text: "" },
    { image: DiapoB_2, title: "", text: "" },
    { image: DiapoB_3, title: "", text: "" },
    { image: DiapoB_4, title: "", text: "" },
  ];

  const arrayOfSliders_commercial = [
    { image: DiapoC_1, title: "", text: "" },
    { image: DiapoC_2, title: "", text: "" },
    { image: DiapoC_3, title: "", text: "" },
    { image: DiapoC_4, title: "", text: "" },
    { image: DiapoC_5, title: "", text: "" },
  ];

  const arrayOfSliders_inspiration = [
    { image: DiapoD_1, title: "", text: "" },
    { image: DiapoD_2, title: "", text: "" },
    { image: DiapoD_3, title: "", text: "" },
    { image: DiapoD_4, title: "", text: "" },
    { image: DiapoD_5, title: "", text: "" },
  ];

  const arrayOfSliders_illustration = [
    { image: DiapoE_1, title: "", text: "" },
    { image: DiapoE_2, title: "", text: "" },
    { image: DiapoE_3, title: "", text: "" },
    { image: DiapoE_4, title: "", text: "" },
  ];

  const arrayOfSliders_online = [
    { image: DiapoF_4, title: "", text: "" },
    { image: DiapoF_3, title: "", text: "" },
    { image: DiapoF_2, title: "", text: "" },
    { image: DiapoF_1, title: "", text: "" },
  ];

  const generateArrayOfTools = (listToShow) => {
    let newArray = [];

    listToShow.map((el) => {
      return newArray.push({ tool: el });
    });

    return newArray;
  };

  const activeScroll = (section) => {
    setAutoScrollTo(section);
    setNavigation(!navigation);
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/projects/spyde",
      title: "Projet Spyde",
    });
  }, []);

  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig scrollBySection"
        exit={goOutAnimation(0.5, 0)}
      >
        <section className="project">
          <div className="project__title">
            <h1 className="font__project font__color">
              <span className="font__card--title font__bgColor">
                {textToShow.spyde.pageName + " "}
              </span>
              {textToShow.spyde.page}
            </h1>
          </div>
          <div className="project__container">
            <aside className="pageNav">
              <nav className="pageNav__container">
                <h2
                  onClick={() => setNavigation(!navigation)}
                  className="font__writing font__color"
                >
                  {textToShow.spyde.openMenu}
                </h2>
                {navigation && (
                  <ul className="font__project--menu font__color">
                    <li
                      onClick={() => activeScroll(textToShow.spyde.menu.A.text)}
                    >
                      {textToShow.spyde.menu.A.text}
                    </li>
                    <li
                      onClick={() => activeScroll(textToShow.spyde.menu.B.text)}
                    >
                      {textToShow.spyde.menu.B.text}
                    </li>
                    <li
                      onClick={() => activeScroll(textToShow.spyde.menu.C.text)}
                    >
                      {textToShow.spyde.menu.C.text}
                    </li>
                    <li
                      onClick={() => activeScroll(textToShow.spyde.menu.D.text)}
                    >
                      {textToShow.spyde.menu.D.text}
                    </li>
                    <li
                      onClick={() => activeScroll(textToShow.spyde.menu.E.text)}
                    >
                      {textToShow.spyde.menu.E.text}
                    </li>
                    <li
                      onClick={() => activeScroll(textToShow.spyde.menu.F.text)}
                    >
                      {textToShow.spyde.menu.F.text}
                    </li>
                    <li
                      onClick={() => activeScroll(textToShow.spyde.menu.G.text)}
                    >
                      {textToShow.spyde.menu.G.text}
                    </li>
                    <a href={textToShow.spyde.menu.H.link} target="_blank">
                      <li>{textToShow.spyde.menu.H.text}</li>
                    </a>
                  </ul>
                )}
              </nav>
            </aside>
            <article className="pageProject" ref={globalArticle}>
              <div ref={presentationSection}>
                <ProjectSection
                  id="presentation"
                  title={textToShow.spyde.presentation.title}
                >
                  <div className="elementProject--large">
                    <Diaporama sliders={arrayOfSliders_presentation} />
                  </div>
                  <div className="elementProject">
                    <p className="font__basicText">
                      {textToShow.spyde.presentation.textA}
                    </p>
                  </div>
                  <div className="elementProject">
                    <p className="font__basicText">
                      {textToShow.spyde.presentation.textB}
                    </p>
                  </div>
                </ProjectSection>
              </div>

              <div ref={functionsSection}>
                <ProjectSection
                  id="function"
                  title={textToShow.spyde.functions.title}
                >
                  <FunctionText data={textToShow.spyde.functions.A} />
                  <FunctionText data={textToShow.spyde.functions.B} />
                  <FunctionText data={textToShow.spyde.functions.C} />
                  <FunctionText data={textToShow.spyde.functions.D} />
                  <FunctionText data={textToShow.spyde.functions.E} />
                  <FunctionText data={textToShow.spyde.functions.F} />
                  <FunctionText data={textToShow.spyde.functions.G} />
                  <FunctionText data={textToShow.spyde.functions.H} />
                </ProjectSection>
              </div>

              <div ref={brandingSection}>
                {" "}
                <ProjectSection
                  id="branding"
                  title={textToShow.spyde.branding.title}
                >
                  <ProjectSubTitle
                    title={textToShow.spyde.branding.section.logo.title}
                  />
                  <ProjectGridElement
                    title={textToShow.spyde.branding.section.logo.A.title}
                  >
                    <p className="font__basicText">
                      {textToShow.spyde.branding.section.logo.A.text}
                    </p>
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.branding.section.logo.B.title}
                  >
                    <Diaporama
                      sliders={arrayOfSliders_logoPurpose}
                      size="small"
                    />
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.branding.section.logo.C.title}
                  >
                    <div className="duoLogo">
                      <div className="duoLogo__pictureContainer">
                        <img
                          src={
                            theme === "dark"
                              ? logoFinalB_White
                              : logoFinalB_Black
                          }
                        />
                      </div>
                      <div className="duoLogo__pictureContainer">
                        <img
                          src={
                            theme === "dark"
                              ? logoFinalA_White
                              : logoFinalA_Black
                          }
                        />
                      </div>
                    </div>
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.branding.section.logo.D.title}
                  >
                    <div className="singlePicture">
                      <img
                        src={
                          theme === "dark"
                            ? charteGraphiqueWhite
                            : charteGraphique
                        }
                      />
                    </div>
                  </ProjectGridElement>
                  <ProjectSubTitle
                    title={textToShow.spyde.branding.section.document.title}
                  />
                  <ProjectGridElement
                    title={textToShow.spyde.branding.section.document.A.title}
                  >
                    <p className="font__basicText ">
                      {textToShow.spyde.branding.section.document.A.text}
                    </p>
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.branding.section.document.B.title}
                  >
                    <div className="duoLogo">
                      <div className="duoLogo__pictureContainer">
                        <img
                          src={visitCard_recto}
                          alt="Recto de la carte de visite de l'entreprise Spyde"
                        />
                      </div>
                      <div className="duoLogo__pictureContainer">
                        <img
                          src={visitCard_verso}
                          alt="Verso de la carte de visite de l'entreprise Spyde"
                        />
                      </div>
                    </div>
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.branding.section.document.C.title}
                  >
                    <Diaporama
                      sliders={arrayOfSliders_commercial}
                      size="small"
                    />
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.branding.section.document.D.title}
                  >
                    <div className="profilPicture">
                      <img src={certificatRecyclage} />
                    </div>
                  </ProjectGridElement>
                </ProjectSection>
              </div>

              <div ref={ecosystemeSection}>
                {" "}
                <ProjectSection
                  id="webdev"
                  title={textToShow.spyde.webdev.title}
                  size="small"
                >
                  <ProjectSubTitle
                    title={textToShow.spyde.webdev.section.tools.title}
                  />
                  <FunctionList
                    title={textToShow.spyde.webdev.section.tools.A.title}
                    list={generateArrayOfTools(
                      textToShow.spyde.webdev.section.tools.A.list
                    )}
                  />
                  <FunctionList
                    title={textToShow.spyde.webdev.section.tools.B.title}
                    list={generateArrayOfTools(
                      textToShow.spyde.webdev.section.tools.B.list
                    )}
                  />
                  <FunctionList
                    title={textToShow.spyde.webdev.section.tools.C.title}
                    list={generateArrayOfTools(
                      textToShow.spyde.webdev.section.tools.C.list
                    )}
                  />
                  <FunctionList
                    title={textToShow.spyde.webdev.section.tools.D.title}
                    list={generateArrayOfTools(
                      textToShow.spyde.webdev.section.tools.D.list
                    )}
                  />
                  <FunctionList
                    title={textToShow.spyde.webdev.section.tools.E.title}
                    list={generateArrayOfTools(
                      textToShow.spyde.webdev.section.tools.E.list
                    )}
                  />
                </ProjectSection>
              </div>

              <div ref={webdesignSection}>
                {" "}
                <ProjectSection
                  id="design"
                  title={textToShow.spyde.design.title}
                >
                  <ProjectSubTitle title={textToShow.spyde.design.section_A} />

                  <ProjectGridElement title={textToShow.spyde.design.A.title}>
                    <p className="font__basicText">
                      {textToShow.spyde.design.A.text}
                    </p>
                  </ProjectGridElement>
                  <ProjectGridElement title={textToShow.spyde.design.B.title}>
                    <p className="font__basicText">
                      {textToShow.spyde.design.B.text}
                    </p>
                  </ProjectGridElement>
                  <ProjectGridElement title={textToShow.spyde.design.C.title}>
                    <Diaporama
                      sliders={arrayOfSliders_inspiration}
                      size="small"
                    />
                  </ProjectGridElement>
                  <ProjectGridElement title={textToShow.spyde.design.D.title}>
                    <Diaporama
                      sliders={arrayOfSliders_illustration}
                      size="small"
                    />
                  </ProjectGridElement>
                </ProjectSection>
              </div>

              <div ref={developerSection}>
                {" "}
                <ProjectSection
                  id="development"
                  title={textToShow.spyde.development.title}
                >
                  <ProjectSubTitle
                    title={textToShow.spyde.development.section_A}
                  />

                  <ProjectGridElement
                    title={textToShow.spyde.development.A.title}
                  >
                    <p className="font__basicText">
                      {textToShow.spyde.development.A.text}
                    </p>
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.development.B.title}
                  >
                    <div className="singlePicture">
                      <img src={frontendLogos} />
                    </div>
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.development.C.title}
                  >
                    <p className="font__basicText">
                      {textToShow.spyde.development.C.text}
                    </p>
                  </ProjectGridElement>

                  <ProjectGridElement
                    title={textToShow.spyde.development.D.title}
                  >
                    <p className="font__basicText">
                      {textToShow.spyde.development.D.text}
                    </p>
                  </ProjectGridElement>

                  <ProjectSubTitle
                    title={textToShow.spyde.development.section_B}
                  />

                  <ProjectGridElement
                    title={textToShow.spyde.development.E.title}
                  >
                    <p className="font__basicText">
                      {textToShow.spyde.development.E.text}
                    </p>
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.development.F.title}
                  >
                    <div className="singlePicture">
                      <img src={backendLogos} />
                    </div>
                  </ProjectGridElement>
                  <ProjectGridElement
                    title={textToShow.spyde.development.G.title}
                  >
                    <p className="font__basicText">
                      {textToShow.spyde.development.G.text}
                    </p>
                  </ProjectGridElement>

                  <ProjectGridElement
                    title={textToShow.spyde.development.H.title}
                  >
                    <p className="font__basicText">
                      {textToShow.spyde.development.H.text}
                    </p>
                  </ProjectGridElement>
                </ProjectSection>
              </div>

              <div ref={onlineSection}>
                {" "}
                <ProjectSection
                  id="online"
                  title={textToShow.spyde.online.title}
                >
                  <ProjectGridElement title={textToShow.spyde.online.B.title}>
                    <Diaporama sliders={arrayOfSliders_online} size="small" />
                  </ProjectGridElement>
                  <ProjectGridElement title={textToShow.spyde.online.A.title}>
                    <p className="font__basicText">
                      {textToShow.spyde.online.A.text}
                    </p>
                  </ProjectGridElement>
                </ProjectSection>
              </div>

              <a href={textToShow.spyde.link} target="_blank">
                <div className="linkToWebSite ">
                  <p className="font__menu font__bgColor">
                    {textToShow.spyde.linkName}
                  </p>
                </div>
              </a>
              <ProjectSection
                id="more"
                title={textToShow.spyde.buttons.title}
              />
              <div className="footerButtons">
                <Link to={textToShow.spyde.buttons.link_action}>
                  <button className="callToAction">
                    {textToShow.spyde.buttons.action}
                  </button>
                </Link>
                <Link to={textToShow.spyde.buttons.link_other}>
                  <button className="otherAction">
                    {textToShow.spyde.buttons.other}
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default SpydeProject;
