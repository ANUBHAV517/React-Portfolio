import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './routes.jsx';
import { store } from './store.js';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <BrowserRouter basename="/React-Portfolio">
    <Provider store={store}>
      <App />
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </BrowserRouter>
);
