import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomeLayout from './Layout/HomeLayout';
import Home from './pages/Homes/Home/Home';
import Error from './Error/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home></Home>,

		childred: [
			{
				path: '/',
				element: <HomeLayout></HomeLayout>,
			},
		],
	},
	{
		path: '*',
		element: <Error></Error>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
