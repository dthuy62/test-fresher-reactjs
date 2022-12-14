import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import { RouteList } from "./constants/routes";

import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoutes from "./utils/privateRoutes";
import { getAnimalsAPI } from "./api/animals";

function App() {
  const { pathname } = useLocation();


  return (
    <>
      {pathname !== RouteList.login ? <Header /> : null}
      <Routes>
        <Route element={<PrivateRoutes />}>
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
