import { useContext, useEffect, useState } from "react";
import InterSection from "../components/elements/InterSection";
import { motion } from "framer-motion";
import { ThemeContext } from "../components/layouts/PageConfig";
import SectionTitle from "../components/blocks/SectionTitle";
import SectionIntroduction from "../components/blocks/SectionIntroduction";
import SectionExperience from "../components/blocks/SectionExperience";
import SectionStack from "../components/blocks/SectionStack";
import FlexBubbleContainer from "../components/elements/FlexBubbleContainer";
import IconToCard from "../components/blocks/IconToCard";
import goOutAnimation from "../helpers/goOutAnimation";

const About = () => {
  const [toggleOpenCard, setToggleOpenCard] = useState(false);
  const { language, theme, colorTheme, textToShow } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="wrapper">
      <motion.div
        className="stickyPage aboutConfig"
        i
        exit={goOutAnimation(0.5, 0)}
      >
        <SectionTitle title={textToShow.about_page.title} />
        <SectionIntroduction
          text={textToShow.about_page.text}
          textColor={textToShow.about_page.textColor}
          intro={textToShow.about_page.intro}
          introBis={textToShow.about_page.introBis}
        />
        <SectionStack>
          <div className="bigBubbleGrid">
            {/* //* First Line */}
            <div></div>
            <div></div>
            {/** FIGMA */}
            <IconToCard
              title={textToShow.bubbleSkills.figma.title}
              text={textToShow.bubbleSkills.figma.text}
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="#1ABCFE"
                  d="M8.55 8c0-1.289 1.019-2.333 2.275-2.333C12.082 5.667 13.1 6.71 13.1 8c0 1.289-1.018 2.333-2.275 2.333C9.57 10.333 8.55 9.29 8.55 8z"
                />
                <path
                  fill="#0ACF83"
                  d="M4 12.667c0-1.289 1.019-2.334 2.275-2.334H8.55v2.334C8.55 13.955 7.531 15 6.275 15S4 13.955 4 12.667z"
                />
                <path
                  fill="#FF7262"
                  d="M8.55 1v4.667h2.275c1.257 0 2.275-1.045 2.275-2.334C13.1 2.045 12.082 1 10.825 1H8.55z"
                />
                <path
                  fill="#F24E1E"
                  d="M4 3.333c0 1.289 1.019 2.334 2.275 2.334H8.55V1H6.275C5.019 1 4 2.045 4 3.333z"
                />
                <path
                  fill="#A259FF"
                  d="M4 8c0 1.289 1.019 2.333 2.275 2.333H8.55V5.667H6.275C5.019 5.667 4 6.71 4 8z"
                />
              </svg>
            </IconToCard>
            {/** HTML5 */}
            <IconToCard
              title={textToShow.bubbleSkills.html.title}
              text={textToShow.bubbleSkills.html.text}
            >
              <svg
                viewBox="0 0 65 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.34979 66.9643L0 0H64.1975L58.8477 66.9643L32.0988 75L5.34979 66.9643Z"
                  fill="#E44D26"
                />
                <path
                  d="M58.8476 5.35712H32.0986V70.9821L53.4978 64.2857L58.8476 5.35712Z"
                  fill="#F16529"
                />
                <path
                  d="M14.7125 38.8392L12.0376 13.3928H53.4985L52.1611 21.4285H20.0623L21.3997 30.8035H50.8236L48.1487 56.25L32.0993 61.6071L16.0499 56.25L14.7125 42.8571H22.7372L24.0746 49.5535L32.0993 52.2321L40.124 49.5535L41.4615 38.8392H14.7125Z"
                  fill="white"
                />
              </svg>
            </IconToCard>

            <IconToCard
              title={textToShow.bubbleSkills.css.title}
              text={textToShow.bubbleSkills.css.text}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                ariaLabel="CSS3"
                role="img"
                viewBox="0 0 512 512"
              >
                <path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52" />
                <path fill="#2965f1" d="M256 37V472l149-41 35-394" />
                <path
                  fill="#ebebeb"
                  d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"
                />
                <path
                  fill="#ffffff"
                  d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"
                />
              </svg>
            </IconToCard>
            <div></div>
            <div></div>

            {/* //* Second Line */}
            <div></div>
            <IconToCard
              title={textToShow.bubbleSkills.react.title}
              text={textToShow.bubbleSkills.react.text}
            >
              <svg
                viewBox="0 -14 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z"
                    fill="#00D8FF"
                  ></path>
                </g>
              </svg>
            </IconToCard>
            <div></div>
            <div></div>
            <div></div>
            <IconToCard
              title={textToShow.bubbleSkills.mongo.title}
              text={textToShow.bubbleSkills.mongo.text}
            >
              <svg viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg">
                <g
                  id="databases-and-servers/databases/mongodb"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="container"
                    transform="translate(2.000000, 2.000000)"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                    stroke="#134514"
                    strokeWidth="2"
                  >
                    <rect
                      id="mask"
                      x="-1"
                      y="-1"
                      width="71"
                      height="71"
                      rx="14"
                    ></rect>
                  </g>
                  <g
                    id="Group"
                    transform="translate(25.000000, 11.000000)"
                    fillRule="nonzero"
                  >
                    <path
                      d="M12.4944775,50.7282275 L11.1460449,50.2673438 C11.1460449,50.2673438 11.3107227,43.3929395 8.8434082,42.8996191 C7.19912598,40.9915674 9.10717773,-38.0181006 15.0277344,42.6362061 C15.0277344,42.6362061 12.9881543,43.6556396 12.6263623,45.3993701 C12.2314209,47.1099512 12.4944775,50.7282275 12.4944775,50.7282275 Z"
                      id="Shape"
                      fill="#A6A385"
                    ></path>
                    <path
                      d="M13.218418,44.0837305 C13.218418,44.0837305 25.0274512,36.320708 22.2639307,20.1698145 C19.5998584,8.42743652 13.3171533,4.57889648 12.6263623,3.0985791 C11.8699854,2.04599609 11.1460449,0.204243164 11.1460449,0.204243164 L11.6397217,32.8667529 C11.6397217,32.8999023 10.6199316,42.8664697 13.2187744,44.0840869"
                      id="Shape"
                      fill="#499D4A"
                    ></path>
                    <path
                      d="M10.4556104,44.5111084 C10.4556104,44.5111084 -0.629838867,36.9455566 0.0281591797,23.624126 C0.653007813,10.3023389 8.48161621,3.75657715 9.99472656,2.57246582 C10.9817236,1.51988281 11.0145166,1.12494141 11.080459,0.0723583984 C11.77125,1.55267578 11.6397217,22.209751 11.7381006,24.6435596 C12.0339502,34.0180713 11.2119873,42.7352979 10.4556104,44.5111084 Z"
                      id="Shape"
                      fill="#58AA50"
                    ></path>
                  </g>
                </g>
              </svg>
            </IconToCard>
            <div></div>

            {/* //* 3th Line */}
            <IconToCard
              title={textToShow.bubbleSkills.mysql.title}
              text={textToShow.bubbleSkills.mysql.text}
            >
              <svg
                viewBox="0 0 73 73"
                xmlns="http://www.w3.org/2000/svg"
                //
              >
                <g
                  id="databases-and-servers/databases/mysql"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="container"
                    transform="translate(2.000000, 2.000000)"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                    stroke="#013247"
                    strokeWidth="2"
                  >
                    <rect
                      id="mask"
                      x="-1"
                      y="-1"
                      width="71"
                      height="71"
                      rx="14"
                    ></rect>
                  </g>
                  <g
                    id="MySQL"
                    transform="translate(14.000000, 16.000000)"
                    fill="#00618A"
                  >
                    <g
                      id="Group"
                      transform="translate(0.786008, 0.109629)"
                      fillRule="nonzero"
                    >
                      <path
                        d="M40.8827605,33.7385756 C38.4614916,33.672937 36.6119538,33.8980714 35.0307983,34.5648866 C34.5814496,34.7544412 33.8649454,34.7593487 33.7916387,35.3224916 C34.0385504,35.5813655 34.0768908,35.9678361 34.2731933,36.2862143 C34.6507689,36.8972059 35.2881387,37.7158487 35.8568025,38.1452605 C36.4782227,38.6142395 37.1186597,39.1160378 37.7848613,39.5221387 C38.9697311,40.2447773 40.2926261,40.6573193 41.4336345,41.3811849 C42.1059706,41.8078361 42.7740126,42.3452143 43.4300924,42.8267689 C43.7542983,43.0647857 43.9723782,43.435 44.3938151,43.5840672 C44.3938151,43.5613697 44.3938151,43.5383655 44.3938151,43.5153613 C44.1723613,43.2334832 44.1153109,42.8457857 43.9119538,42.5513319 C43.6138193,42.2531975 43.3153782,41.9547563 43.016937,41.6563151 C42.1418571,40.4947563 41.0309076,39.4745966 39.8500252,38.6271218 C38.9083866,37.951105 36.8005882,37.0379916 36.4076765,35.9420714 C36.3846723,35.9190672 36.3619748,35.896063 36.3386639,35.8730588 C37.0063992,35.7979118 37.7882353,35.5562143 38.4044412,35.3911975 C39.4396303,35.1136134 40.3647059,35.1853866 41.4336345,34.9093361 C41.9154958,34.7716176 42.3973571,34.6335924 42.8795252,34.4961807 C42.8795252,34.4041639 42.8795252,34.3127605 42.8795252,34.2207437 C42.3390798,33.6661891 41.9538361,32.9325084 41.3646218,32.4307101 C39.8230336,31.117937 38.1403529,29.8063908 36.4076765,28.7127403 C35.4467143,28.1061655 34.259084,27.7119962 33.2407647,27.1979903 C32.8981555,27.0251521 32.2963655,26.9352824 32.0700042,26.6471471 C31.5350798,25.9650878 31.2436933,25.1006513 30.8311513,24.3062702 C29.9668067,22.6420849 29.118105,20.8245076 28.3525252,19.0737345 C27.8301765,17.8797857 27.4891008,16.702308 26.8379286,15.631171 C23.7118109,10.4914803 20.3467563,7.38919496 15.1340042,4.33994202 C14.024895,3.69146891 12.6894244,3.43535546 11.2781933,3.10078235 C10.5212017,3.05495798 9.76359664,3.00882689 9.00629832,2.96300252 C8.54406723,2.7697979 8.06312605,2.20426261 7.62942017,1.93020588 C5.90257143,0.839294496 1.47318908,-1.53361345 0.194155462,1.58603235 C-0.613445378,3.55516134 1.40110924,5.47668697 2.12160084,6.47442521 C2.62738655,7.17442773 3.27487815,7.9592084 3.63619748,8.74638151 C3.87390756,9.2637 3.9150084,9.78249076 4.11836555,10.3300214 C4.61893697,11.6785277 5.05417647,13.1456437 5.70166807,14.3920113 C6.02894118,15.0225412 6.38964706,15.6869025 6.80341597,16.2509042 C7.05707563,16.5968874 7.49170168,16.7493286 7.56040756,17.2837008 C7.13528992,17.8785895 7.11105882,18.8020395 6.87212185,19.5556878 C5.79613866,22.9485008 6.20193277,27.1656311 7.76713866,29.6766471 C8.24746639,30.4474412 9.37865966,32.1006765 10.9340504,31.4666807 C12.2946723,30.9124328 11.9907101,29.1950924 12.3799412,27.6799437 C12.4679706,27.3363529 12.4139874,27.0838588 12.5863655,26.8538168 C12.5863655,26.8765756 12.5863655,26.8996412 12.5863655,26.9227067 C12.999521,27.7488336 13.4126765,28.5749298 13.8258319,29.4009034 C14.7429328,30.8780798 16.3707101,32.4218151 17.750042,33.4634454 C18.4653193,34.003584 19.0284622,34.9375546 19.9532311,35.253479 C19.9532311,35.2304748 19.9532311,35.2077773 19.9532311,35.1844664 C19.9299202,35.1844664 19.9072227,35.1844664 19.8842185,35.1844664 C19.7050924,34.905042 19.4247479,34.7894076 19.1959328,34.5648866 C18.657021,34.0367101 18.0579916,33.3800168 17.6123235,32.7748529 C16.3578277,31.0716218 15.2490252,29.2073613 14.2389874,27.2668803 C13.7565126,26.3404244 13.3372227,25.3181176 12.9305084,24.3751601 C12.7737731,24.0115403 12.7756134,23.4618933 12.4489538,23.2735042 C12.0035924,23.9645197 11.3475126,24.5231538 11.003063,25.3390668 C10.4521891,26.6432517 10.3810294,28.2337622 10.1770588,29.8830714 C10.0562101,29.9263193 10.1098866,29.8965672 10.0390336,29.9517773 C9.08021849,29.7205084 8.74313025,28.7333828 8.38702521,27.8866134 C7.48556723,25.7449529 7.31809664,22.2964084 8.11128151,19.8312475 C8.31647899,19.1935403 9.2440084,17.1845681 8.86857983,16.5953845 C8.68945378,16.0073971 8.09809244,15.6674256 7.76713866,15.2181382 C7.35766387,14.6627861 6.94880252,13.9316206 6.66539076,13.2903248 C5.92772269,11.6204345 5.58327311,9.74592941 4.80665126,8.05806513 C4.43551681,7.2511084 3.80765546,6.43458193 3.29205462,5.71721891 C2.7212437,4.92256176 2.08203361,4.33724286 1.6397395,3.37606597 C1.48239076,3.0345916 1.26860504,2.48791975 1.50202101,2.13687563 C1.5762479,1.89993235 1.68084034,1.8011063 1.91517647,1.72381218 C2.31452941,1.41589634 3.42670588,1.82625756 3.84262185,1.9990958 C4.94682353,2.45767689 5.86821849,2.89438866 6.80341597,3.5138458 C7.25245798,3.81158151 7.70640756,4.38726933 8.249,4.54664244 C8.45542437,4.54664244 8.66215546,4.54664244 8.86857983,4.54664244 C9.83782353,4.76947647 10.9236218,4.61583908 11.8290672,4.89078529 C13.4295462,5.37724748 14.8637815,6.13387101 16.1664328,6.95637857 C20.1348109,9.46199622 23.3793235,13.0288437 25.5987689,17.2837008 C25.9557941,17.9687353 26.1103824,18.6226374 26.4247731,19.3492941 C27.0593824,20.8146311 27.8587017,22.3224798 28.489937,23.7554269 C29.1199454,25.1851227 29.7340042,26.6279769 30.6244202,27.8177235 C31.0927857,28.4431311 32.900916,28.7786244 33.7226261,29.1257731 C34.2986513,29.3693109 35.242437,29.6229706 35.7880966,29.9517773 C36.8303403,30.5805588 37.8400714,31.3289622 38.8175966,32.0175546 C39.3062059,32.3616975 40.8079202,33.116542 40.8827605,33.7385756 Z"
                        id="Shape"
                      ></path>
                    </g>
                    <g id="Group" transform="translate(9.654588, 7.607551)">
                      <path
                        d="M1.23946639,0.00929369748 C0.73460084,5.20417043e-18 0.37757563,0.0644117647 0,0.146797479 C0,0.169832353 0,0.192897899 0,0.215687395 C0.0230042017,0.215687395 0.0460084034,0.215687395 0.069012605,0.215687395 C0.309789916,0.710492437 0.734907563,1.02890126 1.03273529,1.45515378 C1.26216387,1.93710714 1.49159244,2.4190605 1.72132773,2.90070714 C1.74402521,2.87791765 1.76733613,2.85488277 1.79003361,2.83209328 C2.21637815,2.5316584 2.4117605,2.05093193 2.40961345,1.31737395 C2.23876891,1.13763445 2.21361765,0.912101261 2.06547059,0.697610084 C1.86855462,0.411867227 1.48760504,0.249518908 1.23946639,0.00929369748 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </IconToCard>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <IconToCard
              title={textToShow.bubbleSkills.redux.title}
              text={textToShow.bubbleSkills.redux.text}
            >
              <svg
                viewBox="0 -6 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
                  fill="#764ABC"
                />
              </svg>
            </IconToCard>

            {/* //* 4th Line */}
            <div></div>
            <IconToCard
              title={textToShow.bubbleSkills.node.title}
              text={textToShow.bubbleSkills.node.text}
            >
              <svg
                viewBox="-13 0 282 282"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <g fill="#8CC84B">
                  <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />

                  <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
                </g>
              </svg>
            </IconToCard>
            <div></div>
            <div></div>
            <div></div>
            <IconToCard
              title={textToShow.bubbleSkills.javascript.title}
              text={textToShow.bubbleSkills.javascript.text}
            >
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
                <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
              </svg>
            </IconToCard>
            <div></div>

            {/* //* 5th Line */}
            <div></div>
            <div></div>
            <IconToCard
              title={textToShow.bubbleSkills.sass.title}
              text={textToShow.bubbleSkills.sass.text}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                ariaLabel="Sass"
                role="img"
                viewBox="0 0 512 512"
              >
                <rect width="512" height="512" rx="15%" fill="#c69" />
                <path
                  d="M258,88c-96,33-158,100-152,140s66,72,93,93h0c-35,18-79,45-78,80,2,48,54,33,76,19s44-53,30-94c31-8,58,2,66,8,31,22,15,47,4,51s-4,6,3,4,22-12,22-29c0-43-46-63-103-48-33-35-78-51-76-89,1-14,6-50,95-95s152-27,144,14c-12,62-120,104-158,68-2-4-9-7-5,4,20,50,182,27,189-79C410,79,329,64,258,88ZM172,408c-25,8-24-8-23-14,3-17,17-38,59-59C220,373,193,402,172,408Z"
                  fill="#ffffff"
                />
              </svg>
            </IconToCard>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            {/* </BigBubbleGrid> */}
          </div>
        </SectionStack>
        <InterSection />
        <SectionExperience />
      </motion.div>
    </div>
  );
};

export default About;
