import React from "react";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import Detail from "../components/Detail";
import MainPage from "../components/Mainpage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
