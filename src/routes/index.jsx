import React from "react";
import { Routes, Route as RouteDOM } from "react-router-dom";

import { routes } from "./routes";

const Route = () => {
  return (
    <Routes>
      {routes.map((item) => (
        <RouteDOM path={item.path} element={item.component} key={item.path} />
      ))}
    </Routes>
  );
};
export { Route };
