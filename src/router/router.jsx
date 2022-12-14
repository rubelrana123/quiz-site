import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Home from '../components/Home';
import ErrorPage from '../components/ErrorPage';
import Statistics from '../components/Statistics';
import { loadedTopicData } from '../Loader';
import Quiz from '../components/Quiz';
import Blog from '../components/Blog';
import About from '../components/About';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{ path: '/', loader: loadedTopicData, element: <Home></Home> },
			{ path: '/home', loader: loadedTopicData, element: <Home></Home> },
			{
				path: '/statistics',
				loader: loadedTopicData,
				element: <Statistics></Statistics>,
			},
			{
				path: '/quiz/:id',
				loader: async ({ params }) => {
					return fetch(
						`https://openapi.programming-hero.com/api/quiz/${params.id}`
					);
				},
				element: <Quiz></Quiz>,
			},
			{ path: '/blog', element: <Blog></Blog> },
			{ path: '/about', element: <About></About> },
		],
	},
]);
