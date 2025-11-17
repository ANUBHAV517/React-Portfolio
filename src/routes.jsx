import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Projects from './pages/Projects';

// Custom error component
function RouteError() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error: {error.status || 'Unknown'}</h1>
      <p>{error.statusText || error.message || 'Page not found'}</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteError />, // Add errorElement here
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      {
        path: 'services',
        element: <Services />,
        children: [
          { path: 'backend', element: <Backend /> },
          { path: 'frontend', element: <Frontend /> },
        ],
      },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default router;
