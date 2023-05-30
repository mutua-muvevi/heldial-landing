//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports

import Home from "./pages/home/home";
import NotFound from "./pages/error/404";
import Services from "./pages/services/services";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Layout from "./layout/layout";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/landing",
			element: <Layout/>,
			children: [
				{
					path: "/landing/home",
					element: <Home/>
				},
				{
					path: "/landing/about",
					element: <About/>
				},
				{
					path: "/landing/services",
					element: <Services/>
				},
				{
					path: "/landing/projects",
					element: <Projects/>
				},
				{
					path: "/landing/contact",
					element: <Contact/>
				},
			]
		},
		{
			path: "/",
			element: <Navigate to="/landing/home" replace />,
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