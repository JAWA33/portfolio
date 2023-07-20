import React, { useContext, useEffect, useRef, useState } from "react";
import TitleAndSubTitle from "../elements/TitleAndSubTitle";
import { ThemeContext } from "../layouts/PageConfig";
import {
  CLIENT_REGEX,
  MESSAGE_REGEX,
  CONTACT_NAME_REGEX,
  EMAIL_REGEX,
} from "../../utils/regex";

import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import emailJS from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderS from "./LoaderS";

const SectionForm = () => {
  const navigate = useNavigate();
  const { textToShow, language } = useContext(ThemeContext);

  const focusInput_firstname = useRef(null);
  const infoText_firstname = useRef(null);
  const valid_firstname = useRef(null);

  const isInView = useInView(focusInput_firstname);

  const focusInput_lastname = useRef(null);
  const infoText_lastname = useRef(null);
  const valid_lastname = useRef(null);

  const focusInput_company = useRef(null);
  const infoText_company = useRef(null);
  const valid_company = useRef(null);

  const focusInput_email = useRef(null);
  const infoText_email = useRef(null);
  const valid_email = useRef(null);

  const focusInput_message = useRef(null);
  const infoText_message = useRef(null);
  const valid_message = useRef(null);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("d");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validToSend, setValidToSend] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (e) => {
    e.preventDefault();

    if (validToSend) {
      setIsLoading(true);
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE;

      const templateMail = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message,
        company: company,
      };

      const successMessage = textToShow.contact_page.form.email.success;
      const successErrorA = textToShow.contact_page.form.email.errorA;
      const successErrorB = textToShow.contact_page.form.email.errorB;

      emailJS.init(import.meta.env.VITE_EMAILJS_PUBLICKEY);

      emailJS
        .send(serviceId, templateId, templateMail)
        .then((res) => {
          toast.success(successMessage);
          navigate("/", { replace: true });
        })
        .catch((err) => {
          if (err.status === 412) {
            infoText_email.current.className =
              "inputBox__alert font__label inputBox__alert--error";
            infoText_email.current.innerHTML =
              textToShow.contact_page.form.alert.labelD.invalid;
            valid_email.current.className = "validInput validInput--invalid";
            setIsLoading(false);
            toast.error(successErrorA);
          } else {
            setIsLoading(false);
            toast.error(successErrorB);
          }
        });
    }
  };

  //check before sending request :
  useEffect(() => {
    if (
      CONTACT_NAME_REGEX.test(firstname) &&
      CONTACT_NAME_REGEX.test(lastname) &&
      CLIENT_REGEX.test(company) &&
      MESSAGE_REGEX.test(message) &&
      EMAIL_REGEX.test(email)
    ) {
      setValidToSend(true);
    } else {
      setValidToSend(false);
    }
  }, [firstname, lastname, company, message, email]);

  useEffect(() => {
    setChangeLanguage(!changeLanguage);
  }, [language]);

  //Verification :
  useEffect(() => {
    if (firstname.length < 2) {
      infoText_firstname.current.className = "inputBox__alert font__label";
      infoText_firstname.current.innerHTML =
        textToShow.contact_page.form.alert.labelA.default;
      valid_firstname.current.className = "validInput";
    } else if (firstname.length > 50) {
      infoText_firstname.current.className =
        "inputBox__alert font__label inputBox__alert--error";
      infoText_firstname.current.innerHTML =
        textToShow.contact_page.form.alert.labelA.outofrange;
      valid_firstname.current.className = "validInput validInput--invalid";
    } else if (CONTACT_NAME_REGEX.test(firstname)) {
      infoText_firstname.current.className =
        "inputBox__alert font__label  inputBox__alert--valid";
      infoText_firstname.current.innerHTML =
        textToShow.contact_page.form.alert.labelA.valid;
      valid_firstname.current.className = "validInput validInput--valid";
    } else if (!CONTACT_NAME_REGEX.test(firstname)) {
      infoText_firstname.current.className =
        "inputBox__alert font__label inputBox__alert--error";
      infoText_firstname.current.innerHTML =
        textToShow.contact_page.form.alert.labelA.invalid;
      valid_firstname.current.className = "validInput validInput--invalid";
    } else {
      infoText_firstname.current.className = "inputBox__alert font__label";
      infoText_firstname.current.innerHTML =
        textToShow.contact_page.form.alert.labelA.default;
      valid_firstname.current.className = "validInput";
    }
  }, [firstname, changeLanguage]);

  useEffect(() => {
    if (lastname.length < 2) {
      infoText_lastname.current.className = "inputBox__alert font__label";
      infoText_lastname.current.innerHTML =
        textToShow.contact_page.form.alert.labelB.default;
      valid_lastname.current.className = "validInput";
    } else if (lastname.length > 50) {
      infoText_lastname.current.className =
        "inputBox__alert font__label inputBox__alert--error";
      infoText_lastname.current.innerHTML =
        textToShow.contact_page.form.alert.labelB.outofrange;
      valid_lastname.current.className = "validInput validInput--invalid";
    } else if (CONTACT_NAME_REGEX.test(lastname)) {
      infoText_lastname.current.className =
        "inputBox__alert font__label inputBox__alert--valid";
      infoText_lastname.current.innerHTML =
        textToShow.contact_page.form.alert.labelB.valid;
      valid_lastname.current.className = "validInput validInput--valid";
    } else if (!CONTACT_NAME_REGEX.test(lastname)) {
      infoText_lastname.current.className =
        "inputBox__alert font__label inputBox__alert--error";
      infoText_lastname.current.innerHTML =
        textToShow.contact_page.form.alert.labelB.invalid;
      valid_lastname.current.className = "validInput validInput--invalid";
    } else {
      infoText_lastname.current.className = "inputBox__alert font__label";
      infoText_lastname.current.innerHTML =
        textToShow.contact_page.form.alert.labelB.default;
      valid_lastname.current.className = "validInput";
    }
  }, [lastname, changeLanguage]);

  useEffect(() => {
    if (company.length < 2) {
      infoText_company.current.className = "inputBox__alert font__label";
      infoText_company.current.innerHTML =
        textToShow.contact_page.form.alert.labelC.default;
      valid_company.current.className = "validInput";
    } else if (company.length > 50) {
      infoText_company.current.className =
        "inputBox__alert font__label inputBox__alert--error";
      infoText_company.current.innerHTML =
        textToShow.contact_page.form.alert.labelC.outofrange;
      valid_company.current.className = "validInput validInput--invalid";
    } else if (CLIENT_REGEX.test(company)) {
      infoText_company.current.className =
        "inputBox__alert font__label inputBox__alert--valid";
      infoText_company.current.innerHTML =
        textToShow.contact_page.form.alert.labelC.valid;
      valid_company.current.className = "validInput validInput--valid";
    } else if (!CLIENT_REGEX.test(company)) {
      infoText_company.current.className =
        "inputBox__alert font__label inputBox__alert--error";
      infoText_company.current.innerHTML =
        textToShow.contact_page.form.alert.labelC.invalid;
      valid_company.current.className = "validInput validInput--invalid";
    } else {
      infoText_company.current.className = "inputBox__alert font__label";
      infoText_company.current.innerHTML =
        textToShow.contact_page.form.alert.labelC.default;
      valid_company.current.className = "validInput";
    }
  }, [company, changeLanguage]);

  useEffect(() => {
    if (email.length < 10) {
      infoText_email.current.className = "inputBox__alert font__label";
      infoText_email.current.innerHTML =
        textToShow.contact_page.form.alert.labelD.default;
      valid_email.current.className = "validInput";
    } else if (email.length > 320) {
      infoText_email.current.className =
        "inputBox__alert font__label inputBox__alert--error";
      infoText_email.current.innerHTML =
        textToShow.contact_page.form.alert.labelD.outofrange;
      valid_email.current.className = "validInput validInput--invalid";
    } else if (EMAIL_REGEX.test(email)) {
      infoText_email.current.className =
        "inputBox__alert font__label inputBox__alert--valid";
      infoText_email.current.innerHTML =
        textToShow.contact_page.form.alert.labelD.valid;
      valid_email.current.className = "validInput validInput--valid";
    } else if (!EMAIL_REGEX.test(email)) {
      infoText_email.current.className =
        "inputBox__alert font__label inputBox__alert--error";
      infoText_email.current.innerHTML =
        textToShow.contact_page.form.alert.labelD.invalid;
      valid_email.current.className = "validInput validInput--invalid";
    } else {
      infoText_email.current.className = "inputBox__alert font__label";
      infoText_email.current.innerHTML =
        textToShow.contact_page.form.alert.labelD.default;
      valid_email.current.className = "validInput";
    }
  }, [email, changeLanguage]);

  useEffect(() => {
    if (message.length < 10) {
      infoText_message.current.className =
        "inputBox__alert inputBox__alert--textarea font__label";
      infoText_message.current.innerHTML =
        textToShow.contact_page.form.alert.labelF.default;
      valid_message.current.className = "validInput";
    } else if (message.length > 3000) {
      infoText_message.current.className =
        "inputBox__alert inputBox__alert--textarea font__label inputBox__alert--error";
      infoText_message.current.innerHTML =
        textToShow.contact_page.form.alert.labelF.outofrange;
      valid_message.current.className = "validInput validInput--invalid";
    } else if (MESSAGE_REGEX.test(message)) {
      infoText_message.current.className =
        "inputBox__alert inputBox__alert--textarea font__label inputBox__alert--valid";
      infoText_message.current.innerHTML =
        textToShow.contact_page.form.alert.labelF.valid;
      valid_message.current.className = "validInput validInput--valid";
    } else if (!MESSAGE_REGEX.test(message)) {
      infoText_message.current.className =
        "inputBox__alert inputBox__alert--textarea font__label inputBox__alert--error";
      infoText_message.current.innerHTML =
        textToShow.contact_page.form.alert.labelF.invalid;
      valid_message.current.className = "validInput validInput--invalid";
    } else {
      infoText_message.current.className =
        "inputBox__alert inputBox__alert--textarea font__label";
      infoText_message.current.innerHTML =
        textToShow.contact_page.form.alert.labelF.default;
      valid_message.current.className = "validInput";
    }
  }, [message, changeLanguage]);

  useEffect(() => {
    if (isInView && window.innerWidth >= 600) {
      focusInput_firstname.current.focus();
    }
  }, [focusInput_firstname, isInView]);

  return (
    <div className="sectForm">
      <TitleAndSubTitle
        title={textToShow.contact_page.titleB.title}
        subtitle={textToShow.contact_page.titleB.subtitle}
      />
      <motion.form
        className="contactForm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ul className="contactForm__container">
          <div className="contactBlock contactBlock--top">
            <li
              className="inputBox"
              onClick={() => focusInput_firstname.current.focus()}
            >
              <input
                ref={focusInput_firstname}
                className="inputBox__input inputBox__input--uppercase"
                type="text"
                required="required"
                name="firstname"
                onChange={(e) => setFirstname(e.target.value.trim())}
              />

              <label className="inputBox__text font__label" htmlFor="firstname">
                {textToShow.contact_page.form.labelA}
              </label>
              <p
                ref={infoText_firstname}
                className="inputBox__alert font__label"
              ></p>

              <i ref={valid_firstname} className="validInput"></i>
            </li>
            <li
              className="inputBox"
              onClick={() => focusInput_lastname.current.focus()}
            >
              <input
                ref={focusInput_lastname}
                className="inputBox__input inputBox__input--uppercase"
                type="text"
                required="required"
                name="lastname"
                onChange={(e) => setLastname(e.target.value.trim())}
              />

              <label className="inputBox__text font__label" htmlFor="lastname">
                {textToShow.contact_page.form.labelB}
              </label>
              <p
                ref={infoText_lastname}
                className="inputBox__alert font__label"
              ></p>

              <i ref={valid_lastname} className="validInput"></i>
            </li>
            <li
              className="inputBox"
              onClick={() => focusInput_email.current.focus()}
            >
              <input
                ref={focusInput_email}
                className="inputBox__input"
                type="text"
                required="required"
                name="email"
                onChange={(e) => setEmail(e.target.value.trim())}
              />

              <label className="inputBox__text font__label" htmlFor="email">
                {textToShow.contact_page.form.labelD}
              </label>
              <p
                ref={infoText_email}
                className="inputBox__alert font__label"
              ></p>

              <i ref={valid_email} className="validInput"></i>
            </li>
            <li
              className="inputBox"
              onClick={() => focusInput_company.current.focus()}
            >
              <input
                ref={focusInput_company}
                className="inputBox__input inputBox__input--uppercase"
                type="text"
                required="not"
                name="company"
                onChange={(e) => setCompany(e.target.value.trim())}
              />

              <label className="inputBox__text font__label" htmlFor="company">
                {textToShow.contact_page.form.labelC}
              </label>
              <p
                ref={infoText_company}
                className="inputBox__alert font__label"
              ></p>

              <i ref={valid_company} className="validInput"></i>
            </li>
          </div>
          <div className="contactBlock contactBlock--bottom">
            <li
              className="inputBox"
              onClick={() => focusInput_message.current.focus()}
            >
              <textarea
                ref={focusInput_message}
                className="inputBox__input inputBox__input--textarea"
                type="text"
                required="required"
                name="message"
                onChange={(e) => setMessage(e.target.value.trim())}
              />

              <label
                className="inputBox__text inputBox__text--textarea font__label"
                htmlFor="message"
              >
                {textToShow.contact_page.form.labelF}
              </label>
              <p
                ref={infoText_message}
                className="inputBox__alert font__label"
              ></p>
              <p className="inputBox__alert inputBox__alert--number font__label">
                {message.length + " / 3000"}
              </p>

              <i ref={valid_message} className="validInput"></i>
            </li>
          </div>
        </ul>
        {isLoading ? (
          <LoaderS text={textToShow.contact_page.form.loading} />
        ) : (
          <div className="buttonOnComplete">
            {validToSend ? (
              <motion.button
                className="callToAction"
                initial={{ x: -window.innerWidth }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "spring" }}
                onClick={(e) => handleEmail(e)}
              >
                <span className="callToAction__text">
                  {textToShow.contact_page.form.button}
                </span>
              </motion.button>
            ) : (
              <motion.div
                className="font__color font__label"
                initial={{ x: window.innerWidth }}
                animate={{ x: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {textToShow.contact_page.form.fillform}
              </motion.div>
            )}
          </div>
        )}
      </motion.form>
    </div>
  );
};

export default SectionForm;
