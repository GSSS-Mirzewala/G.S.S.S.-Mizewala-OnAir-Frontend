// External Modules
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// Styles Sheets
import "./App.css";

// Local Modules
import AppLoader from "@components/AppLoader";
import health from "@utils/health.js";
import heartbeat from "@utils/heartbeat.js";
import RootProvider from "./RootProvider";

function App() {
  // States
  const [LOADING, SET_LOADING] = useState(false);

  async function checkSession() {
    if (!sessionStorage.getItem("appLoader")) {
      try {
        SET_LOADING(true);
        await health();
      } catch (error) {
        throw new Error(error?.message || "Something went wrong!");
      } finally {
        SET_LOADING(false);
        sessionStorage.setItem("appLoader", true);
      }
    }
  }

  useEffect(() => {
    checkSession();
    heartbeat();
    const heatBeatInterval = setInterval(heartbeat, 30000); // Every 30 Seconds

    return () => clearInterval(heatBeatInterval);
  }, []);

  if (LOADING) {
    return <AppLoader />;
  }
  return (
    <RootProvider>
      <Outlet />
    </RootProvider>
  );
}

export default App;
