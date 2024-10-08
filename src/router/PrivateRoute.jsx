/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	const { logged } = useContext(AuthContext);

      //Averiguamos la ultima pagina visitada y lo guardamos en el localstorage
      const { pathname, search } = useLocation();
      const lastPath = pathname+search;
      localStorage.setItem('lastPath', lastPath);
      
	return logged ? children : <Navigate to="/login" />;
};
