import { Route, Routes, useLocation } from "react-router-dom";
import PageConfig from "./components/layouts/PageConfig.jsx";

//import Header from "./components/layouts/Header.jsx";
//import {AnimatePresence} from "framer-motion/dist/framer-motion";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<PageConfig />} />
    </Routes>
  );
};

export default App;
