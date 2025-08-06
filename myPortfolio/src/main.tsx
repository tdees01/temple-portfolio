import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/",
    element: <About />
  },

  {
    path: "/",
    element: <Projects />
  },
  {
    path: "/",
    element: <Contact />
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
