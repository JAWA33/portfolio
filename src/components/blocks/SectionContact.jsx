import React, { useContext } from "react";
import TitleAndSubTitle from "../elements/TitleAndSubTitle";

import ContactBlocks from "./ContactBlocks";

//! To change by other icon :
import icon__phone from "../../icons/contact.svg";
import { ThemeContext } from "../layouts/PageConfig";

const SectionContact = () => {
  const { textToShow } = useContext(ThemeContext);

  return (
    <div className="sectContact">
      <TitleAndSubTitle
        title={textToShow.contact_page.titleA.title}
        subtitle={textToShow.contact_page.titleA.subtitle}
      />
      <div className="sectContact__container">
        <ContactBlocks
          title={textToShow.contact_page.card.A.title}
          text={textToShow.contact_page.card.A.text}
        >
          {/* //! PUT SVG ICON HERE */}
          <svg
            className="colorIcon"
            strokeWidth="0.5px"
            width="60px"
            height="60px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M44,7H20A13,13,0,0,0,7,20V44A13,13,0,0,0,20,57H44A13,13,0,0,0,57,44V20A13,13,0,0,0,44,7ZM55,44A11,11,0,0,1,44,55H20A11,11,0,0,1,9,44V20A11,11,0,0,1,20,9H44A11,11,0,0,1,55,20Z" />
            <path d="M22,25H15a1,1,0,0,0-1,1V49a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V26A1,1,0,0,0,22,25ZM21,48H16V27h5Z" />
            <path d="M42,25h0a14.18,14.18,0,0,0-7,2.11V26a1,1,0,0,0-1-1H27a1,1,0,0,0-1,1V49a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V33.81A7.66,7.66,0,0,1,38,33c2.81,0,3,2,3,2.44V49a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V33.17a8.3,8.3,0,0,0-2.14-6.11A7.93,7.93,0,0,0,42,25Zm6,23H43V35.44C43,33.9,42,31,38,31a10.24,10.24,0,0,0-4.45,1.29,1,1,0,0,0-.55.89V48H28V27h5v2.06a1,1,0,0,0,1.66.75A12.31,12.31,0,0,1,42,27h0a6,6,0,0,1,4.42,1.47A6.41,6.41,0,0,1,48,33.17Z" />
            <path d="M18.5,14A4.5,4.5,0,1,0,23,18.5,4.5,4.5,0,0,0,18.5,14Zm0,7A2.5,2.5,0,1,1,21,18.5,2.5,2.5,0,0,1,18.5,21Z" />
          </svg>
        </ContactBlocks>
        <ContactBlocks
          title={textToShow.contact_page.card.B.title}
          text={textToShow.contact_page.card.B.text}
        >
          {" "}
          <svg
            className="colorIcon"
            height="60px"
            width="60px"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <path
                class="st0"
                d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009
		c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067
		c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745
		c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51
		c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05
		c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104
		c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929
		c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443
		c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925
		l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244
		c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16
		c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572
		c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"
              />
            </g>
          </svg>
        </ContactBlocks>
        <ContactBlocks
          title={textToShow.contact_page.card.C.title}
          text={textToShow.contact_page.card.C.text}
        >
          <svg
            className="colorIcon"
            width="60px"
            height="60px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490 490"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M22.969,362.717h183.75v52.951h-69.863v30.625h216.289v-30.625h-69.863v-52.951h183.75
		c12.633,0,22.969-10.336,22.969-22.969V66.676c0-12.633-10.336-22.969-22.969-22.969H22.969C10.336,43.707,0,54.043,0,66.676
		v273.073C0,352.381,10.336,362.717,22.969,362.717z M30.625,74.332h428.75v257.76H30.625V74.332z"
              />
              <polygon
                points="112.151,217.159 129.871,150.443 147.651,217.159 166.762,217.159 188.444,127.915 170.306,127.915 
		156.608,190.257 140.952,127.915 119.523,127.915 103.209,189.218 89.751,127.915 71.298,127.915 92.607,217.159 	"
              />
              <polygon
                points="229.836,217.159 247.556,150.443 265.336,217.159 284.447,217.159 306.129,127.915 287.991,127.915 
		274.293,190.257 258.637,127.915 237.208,127.915 220.894,189.218 207.436,127.915 188.983,127.915 210.292,217.159 	"
              />
              <polygon
                points="391.978,190.257 376.322,127.915 354.893,127.915 338.579,189.218 325.121,127.915 306.668,127.915 
		327.977,217.159 347.521,217.159 365.241,150.443 383.021,217.159 402.132,217.159 423.814,127.915 405.676,127.915 	"
              />
              <rect x="82.544" y="251.251" width="324.912" height="30.625" />
            </g>
          </svg>
        </ContactBlocks>
      </div>
    </div>
  );
};

export default SectionContact;
