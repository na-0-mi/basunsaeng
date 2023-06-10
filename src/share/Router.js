import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "../pages/Start.jsx";
import Q_1 from "../pages/question/Q_1";
import Q_2 from "../pages/question/Q_2";
import Q_3 from "../pages/question/Q_3";
import Q_4 from "../pages/question/Q_4";
import Q_5 from "../pages/question/Q_5";
import { BadEnding, BadEnding2 } from "../pages/results/BadEnding";
import Loading from "../pages/results/Loading";
import {
  Entj,
  Enfj,
  Enfp,
  Estj,
  Entp,
  Esfj,
  Esfp,
  Estp,
} from "../pages/results/Results";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/q1" element={<Q_1 />} />
        <Route path="/q2" element={<Q_2 />} />
        <Route path="/q3" element={<Q_3 />} />
        <Route path="/q4" element={<Q_4 />} />
        <Route path="/q5" element={<Q_5 />} />
        <Route path="/BadEnding" element={<BadEnding />} />
        <Route path="/BadEnding2" element={<BadEnding2 />} />
        <Route path="/Loading" element={<Loading />} />\
        <Route path="/Esfj" element={<Esfj />} />
        <Route path="/Estj" element={<Estj />} />
        <Route path="/Esfp" element={<Esfp />} />
        <Route path="/Estp" element={<Estp />} />
        <Route path="/Entp" element={<Entp />} />
        <Route path="/Entj" element={<Entj />} />
        <Route path="/Enfj" element={<Enfj />} />
        <Route path="/Enfp" element={<Enfp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
