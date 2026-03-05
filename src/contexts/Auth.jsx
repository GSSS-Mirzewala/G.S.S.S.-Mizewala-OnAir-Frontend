// External Modules
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

// Local Modules
import api from "@utils/api.js";
import { UserActions } from "@/store/slices/user.slice";
import { APIsContext } from "./APIs";
import { useOrganizer } from "@hooks/Manager";

export const AuthProvider = ({ children }) => {
  // Declarations
  const dispatch = useDispatch();
  const organizeUser = useOrganizer();
  const { SET_AUTH_API_CALLED } = useContext(APIsContext);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        SET_AUTH_API_CALLED(true);
        const response = await api("GET", "u/get/p/me", true);
        organizeUser(response.data, response.data.reference);
      } catch {
        dispatch(UserActions.LOGOUT());
        dispatch(UserActions.LOGOUT());
      } finally {
        SET_AUTH_API_CALLED(false);
      }
    };

    checkAuth();
  }, [dispatch]);

  return children;
};
