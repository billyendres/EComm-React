import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/Home";

const Nav = () => {
  return (
    <>
      <h1>Navigation</h1>
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
