//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports

import Home from "./pages/home/home";
import NotFound from "./pages/error/404";
import Services from "./pages/services/services";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/home",
			element: <Home/>
		},
		{
			path: "/about",
			element: <About/>
		},
		{
			path: "/services",
			element: <Services/>
		},
		{
			path: "/projects",
			element: <Projects/>
		},
		{
			path: "/contact",
			element: <Contact/>
		},
		{
			path: "/404",
			element: <NotFound/>
		},
		{
			path: "*",
			element: <Navigate to="/404" replace/>
		}
	])
}

export default Router