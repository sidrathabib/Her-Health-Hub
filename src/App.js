import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "./webPage/Homepage";
import PCOS from "./webPage/PCOS";
// import Endo from "./webPage/Endo";
import Hypo from "./webPage/Hypo";
import AboutUs from "./webPage/AboutUs";
import ClinicSearch from "./webPage/ClinicSearch";

import { Routes, Route, Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    // <div>
    //   <Header></Header>
    //   {/* //routing
    //   <Layout></Layout>
    //     -> index -> home
    //     -> hypo
    //     -> page 3 */}
    //   <Homepage></Homepage>
    //   <Footer></Footer>
    // </div>

    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="PCOS" element={<PCOS />} />
          {/* <Route path="Endo" element={<Endo />} /> */}
          <Route path="Hypo" element={<Hypo />} />
          <Route path="ClinicSearch" element={<ClinicSearch />} />
          <Route path="AboutUs" element={<AboutUs />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
