import React from "react";
import { Routes, Route } from "react-router-dom";

const paths = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/product",
    element: <Product />,
    children: [
      { path: "/women", element: <WomenClothes /> },
      { path: "/men", element: <MenClothes /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

function AppRoutes02() {
  const renderRoutes = (routes) =>
    routes.map(({ path, element, children }, index) => (
      <Route key={index} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ));

  return <Routes>{renderRoutes(paths)}</Routes>;
}

export default AppRoutes02;
