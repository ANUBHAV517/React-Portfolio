import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Projects from './pages/Projects';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />, // This wraps all routes
      children: [
        { index: true, element: <Home /> }, // default index route '/'
        { path: 'home', element: <Home /> }, // default index route '/'
        { path: 'about', element: <About /> },
        { path: 'projects', element: <Projects /> },

        {
          path: 'services',
          element: <Services />,
          children: [
            //   { index: true, element: <Services /> }, // default service subpage
            { path: 'backend', element: <Backend /> },
            { path: 'frontend', element: <Frontend /> },
          ],
        },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
  { basename: '/React-Portfolio' }
);

export default router;
