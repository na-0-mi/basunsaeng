import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "../pages/Start.jsx";
import Q_1 from "../pages/question/Q_1";
import Q_2 from "../pages/question/Q_2";
import Q_3 from "../pages/question/Q_2";
import Q_4 from "../pages/question/Q_2";
import Q_5 from "../pages/question/Q_2";
import BadEnding from "../pages/results/BadEnding_1";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/q1" element={<Q_1 />} />
        <Route path="/q2" element={<Q_2 />} />
        {/* <Route path="/q3" element={<Q_3 />} />
        <Route path="/q4" element={<Q_4 />} />
        <Route path="/q5" element={<Q_5 />} /> */}
        <Route path="/BadEnding" element={<BadEnding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
