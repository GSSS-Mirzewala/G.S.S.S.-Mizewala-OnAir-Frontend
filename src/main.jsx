// Packages
import "./i18n";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Global CSS
import "./index.css";
import "../public/fonts.css";

// App
import App from "./App";

// Layouts
import Minimalist from "@/layouts/Minimalist.jsx";
import Classic from "@/layouts/Classic.jsx";

// Pages
import Home from "@page/Home/Home";
import Login from "@page/Login/Login";
import Help from "@page/Help/Help";
import About from "@page/About/About";
import Gallery from "@page/Gallery/Gallery";
import Dashboard from "@page/Dashboard/Dashboard";
import Notifications from "@page/Notifications/Notifications";
import Logout from "@page/Logout/Logout";

// Dashboard Tools
import Marker from "@page/Dashboard/tools/Marker.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Classic />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "release_notes", element: <About /> },
          { path: "credits", element: <About /> },
          { path: "gallery", element: <Gallery /> },
          { path: "notifications", element: <Notifications /> },
          { path: "dashboard", element: <Dashboard /> },
          { path: "dashboard/marker", element: <Marker /> },
        ],
      },
      {
        element: <Minimalist />,
        children: [
          { path: "login", element: <Login /> },
          { path: "help", element: <Help /> },
          { path: "logout", element: <Logout /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
