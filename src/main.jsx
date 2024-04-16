// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import './index.css'

// import HomePage from './pages/HomePage';
// import AboutPage from './pages/About';
// import ProjectsPage from './pages/ProjectsPage';
// import ContactPage from './pages/ContactPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/about", element: <About /> },
//       { path: "/projects", element: <ProjectsPage /> },
//       { path: "/contact", element: <ContactPage /> },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import HomePage from './pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage />  // HomePage now contains all content as a single-page application
    </BrowserRouter>
  </React.StrictMode>,
);
