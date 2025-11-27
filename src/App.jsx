// Styles Sheets
import "./App.css";

// Local Modules
import AppLoader from "@components/AppLoader";

// Dependencies
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// Context (Block)
import RootProvider from "./RootProvider";

function App() {
  // Loader (Block)
  const [IsLoading, SET_Loading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("appLoader")) {
      const Delay = Math.random() * (5.5 - 1.5) + 1.5;
      const timer = setTimeout(() => {
        SET_Loading(false);
        sessionStorage.setItem("appLoader", true);
      }, Delay * 1000);

      return () => clearTimeout(timer);
    } else {
      SET_Loading(false);
    }
  }, []);

  if (IsLoading) {
    return <AppLoader />;
  }
  return (
    <RootProvider>
      <Outlet />
    </RootProvider>
  );
}

export default App;
