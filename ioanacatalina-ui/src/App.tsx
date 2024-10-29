import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from 'routes/Root';
import ErrorPage from 'routes/ErrorPage';
import Home from 'routes/Home';
import Albums from 'routes/Albums';
import Locations from 'routes/Locations';
import BlogPosts from 'routes/BlogPosts';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/albums',
                    element: <Albums />
                },
                {
                    path: '/locations',
                    element: <Locations />
                },
                {
                    path: '/blog',
                    element: <BlogPosts />
                }
            ]
        }
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
