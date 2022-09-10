import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import oauthToken from "./api/oauthToken";
import Header from "./components/Header";
import { RouteList } from "./constants/routes";

import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoutes from "./utils/privateRoutes";
import axios from 'axios';

function App() {
  const { pathname } = useLocation();
  const token = localStorage.getItem('token');
useEffect(() => {
  axios.get('https://api.petfinder.com/v2/animals?type=dog&page=2', {
    headers: {
   Authorization: `Bearer ${token}`
 }
  })
}, [])

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
