import React, { useContext, useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import RevealText from "../animations/RevealText";
import goOutAnimation from "../helpers/goOutAnimation";
import { ThemeContext } from "../components/layouts/PageConfig";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Diaporama from "../components/blocks/Diaporama";
import DiapoA_1 from "../img/diaporama/spyde/acceuil.png";
import DiapoA_2 from "../img/diaporama/spyde/blog.png";
import DiapoA_3 from "../img/diaporama/spyde/blog_edition.png";
import DiapoA_4 from "../img/diaporama/spyde/nouveau_compte.png";
import FunctionText from "../components/blocks/FunctionText";
import ProjectSection from "../components/blocks/ProjectSection";
import ProjectSubTitle from "../components/blocks/ProjectSubTitle";
import ProjectGridElement from "../components/blocks/ProjectGridElement";
import logoSpydeBlack from "../icons/LogoSpyde.svg";
import logoSpydeWhite from "../icons/LogoSpydeWhite.svg";
import charteGraphique from "../img/diaporama/spyde/charteGraphique.png";
import FunctionList from "../components/blocks/FunctionList";

const SpydeProject = () => {
  const { textToShow, theme } = useContext(ThemeContext);

  const [navigation, setNavigation] = useState(false);

  const arrayOfSliders = [
    { image: DiapoA_1, title: "", text: "" },
    { image: DiapoA_2, title: "", text: "" },
    { image: DiapoA_3, title: "", text: "" },
    { image: DiapoA_4, title: "", text: "" },
  ];

  const generateArrayOfTools = (listToShow) => {
    let newArray = [];

    listToShow.map((el) => {
      return newArray.push({ tool: el });
    });

    return newArray;
  };

  //! Google Analytics :
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
                    <li>{textToShow.spyde.menu.A.text}</li>

                    <li>{textToShow.spyde.menu.B.text}</li>
                    <li>{textToShow.spyde.menu.C.text}</li>
                    <li>{textToShow.spyde.menu.D.text}</li>
                    <li>{textToShow.spyde.menu.E.text}</li>
                    <li>{textToShow.spyde.menu.F.text}</li>
                    <li>{textToShow.spyde.menu.G.text}</li>
                  </ul>
                )}
              </nav>
            </aside>
            <article className="pageProject">
              <ProjectSection
                id="presentation"
                title={textToShow.spyde.presentation.title}
              >
                <div className="elementProject--large">
                  <Diaporama sliders={arrayOfSliders} />
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
                  <Diaporama sliders={arrayOfSliders} size="small" />
                </ProjectGridElement>
                <ProjectGridElement
                  title={textToShow.spyde.branding.section.logo.C.title}
                >
                  <div className="duoLogo">
                    <div className="duoLogo__pictureContainer">
                      <img
                        src={theme === "dark" ? logoSpydeWhite : logoSpydeBlack}
                      />
                    </div>
                    <div className="duoLogo__pictureContainer">
                      <img
                        src={theme === "dark" ? logoSpydeWhite : logoSpydeBlack}
                      />
                    </div>
                  </div>
                </ProjectGridElement>
                <ProjectGridElement
                  title={textToShow.spyde.branding.section.logo.D.title}
                >
                  <div className="singlePicture">
                    <img src={charteGraphique} />
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
                        src={theme === "dark" ? logoSpydeWhite : logoSpydeBlack}
                      />
                    </div>
                    <div className="duoLogo__pictureContainer">
                      <img
                        src={theme === "dark" ? logoSpydeWhite : logoSpydeBlack}
                      />
                    </div>
                  </div>
                </ProjectGridElement>
                <ProjectGridElement
                  title={textToShow.spyde.branding.section.document.C.title}
                >
                  <Diaporama sliders={arrayOfSliders} size="small" />
                </ProjectGridElement>
                <ProjectGridElement
                  title={textToShow.spyde.branding.section.document.D.title}
                >
                  <div className="singlePicture">
                    <img src={charteGraphique} />
                  </div>
                </ProjectGridElement>
              </ProjectSection>

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

                {/* <ProjectGridElement
                  title={textToShow.spyde.branding.section.tools.A.title}
                >
                  <p className="font__basicText">
                    {textToShow.spyde.branding.section.tools.A.text}
                  </p>
                </ProjectGridElement> */}
              </ProjectSection>

              <ProjectSection id="design" title={textToShow.spyde.design.title}>
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
                  <Diaporama sliders={arrayOfSliders} size="small" />
                </ProjectGridElement>
                <ProjectGridElement title={textToShow.spyde.design.D.title}>
                  <div className="singlePicture">
                    <img src={charteGraphique} />
                  </div>
                </ProjectGridElement>
              </ProjectSection>

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
                    <img src={charteGraphique} />
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
                    <img src={charteGraphique} />
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

              <ProjectSection id="online" title={textToShow.spyde.online.title}>
                <ProjectGridElement title={textToShow.spyde.online.B.title}>
                  <Diaporama sliders={arrayOfSliders} size="small" />
                </ProjectGridElement>
                <ProjectGridElement title={textToShow.spyde.online.A.title}>
                  <p className="font__basicText">
                    {textToShow.spyde.online.A.text}
                  </p>
                </ProjectGridElement>
              </ProjectSection>
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
