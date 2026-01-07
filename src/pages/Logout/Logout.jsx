// External Modules
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Local Modules
import api from "@utils/api";
import useHead from "@hooks/Head.jsx";
import { CommonInfoActions } from "@/store/slices/CommonInfoSlice";
import { SpecialInfoActions } from "@/store/slices/SpecialInfoSlice";

function Logout() {
  useHead({
    title: "Logout | G.S.S.S. Mirzewala",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const logout = async () => {
      try {
        await api("POST", "auth/logout", true, {});
        dispatch(CommonInfoActions.LOGOUT());
        dispatch(SpecialInfoActions.LOGOUT());
      } catch (error) {
        console.error(error?.message || "Failed to Logout");
      } finally {
        // Always redirect
        navigate("/login", { replace: true });
      }
    };

    logout();
  }, [navigate]);

  return null;
}

export default Logout;
