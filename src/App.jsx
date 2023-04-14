import { Route, Routes, useLocation } from "react-router-dom";
import PageConfig from "./components/layouts/PageConfig.jsx";

import { AnimatePresence } from "framer-motion";
//import Header from "./components/layouts/Header.jsx";
//import {AnimatePresence} from "framer-motion/dist/framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/*" element={<PageConfig />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
