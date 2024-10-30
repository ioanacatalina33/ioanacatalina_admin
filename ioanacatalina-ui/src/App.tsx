import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from 'routes/Root';
import ErrorPage from 'routes/ErrorPage';
import { Home } from 'routes/Home';
import { Locations } from 'routes/Locations';
import { BlogPosts } from 'routes/BlogPosts';
import { Articles } from 'routes/Articles';
import { Routes } from 'utils/consts';
import { articlesLoader } from 'api/loaders';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: Routes.Home,
                    element: <Home />
                },
                {
                    path: Routes.Article,
                    element: <Articles />,
                    loader: articlesLoader
                },
                {
                    path: Routes.Locations,
                    element: <Locations />
                },
                {
                    path: Routes.Blog,
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
