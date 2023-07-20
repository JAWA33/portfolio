import { Route, Routes, useLocation } from "react-router-dom";
import PageConfig from "./components/layouts/PageConfig.jsx";
import { configDotenv } from "dotenv";

import ReactGA from "react-ga4";

ReactGA.initialize(import.meta.env.VITE_GA_ID);

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<PageConfig />} />
    </Routes>
  );
};

export default App;
