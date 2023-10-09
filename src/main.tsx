import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage.tsx';
import HomePage from './Pages/HomePage.tsx';
import LoginPage from './Pages/LoginPage.tsx';
import AboutPage from './Pages/AboutPage.tsx';
import ContactPage from './Pages/ContactPage.tsx';
import { store } from './app/store.ts';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/home',
				element: <HomePage />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
				errorElement: <ErrorPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
