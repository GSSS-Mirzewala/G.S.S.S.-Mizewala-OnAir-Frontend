// External Modules
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Local Modules
import api from "@utils/api";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    api("POST", "auth/logout", true, {}).then(() => {
      sessionStorage.clear("loggedIn");
      navigate("/login");
    });
  }, []);
}

export default Logout;
