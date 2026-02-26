// External Modules
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";

// Styles Sheets
import "./App.css";

// Local Modules
import AppLoader from "@components/AppLoader";
import health from "@utils/health.js";
import heartbeat from "@utils/heartbeat.js";
import { APIsContext } from "./contexts/APIs";
import { BPS } from "@/contexts/Protectors";

function App() {
  // Declarations
  const USER = useSelector((store) => store.COMMON_IDENTITY);
  const {
    AUTH_API_CALLED,
    IS_INFRASTRUCTURE_API_CALLED,
    SET_IS_INFRASTRUCTURE_API_CALLED,
  } = useContext(APIsContext);

  async function checkSession() {
    if (sessionStorage.getItem("appLoader") !== "true")
      try {
        SET_IS_INFRASTRUCTURE_API_CALLED(true);
        await health();
      } catch (error) {
        console.error(error);
      } finally {
        sessionStorage.setItem("appLoader", true);
        SET_IS_INFRASTRUCTURE_API_CALLED(false);
      }
  }

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    if (!USER?.isLoggedIn) return;

    heartbeat();
    const id = setInterval(heartbeat, 30000);
    return () => clearInterval(id);
  }, [USER?.isLoggedIn]);

  if (AUTH_API_CALLED) {
    return <AppLoader />;
  } else if (IS_INFRASTRUCTURE_API_CALLED) {
    return <AppLoader isLoaderIncluded={true} />;
  }

  return (
    <BPS>
      <Outlet />
      <Toaster />
    </BPS>
  );
}

export default App;
