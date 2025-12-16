// External Modules
import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";

// Local Modules
import api from "@utils/api.js";
import { User_Actions } from "@/store/slices/UserSlice";

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api("GET", "auth/me", true);

        const { name, userType, gender, photoUrl } = response.data.mongodata;

        dispatch(
          User_Actions.SET_USER({
            name,
            userType,
            gender,
            photoUrl,
          })
        );
      } catch {
        dispatch(User_Actions.LOGOUT());
      }
    };

    checkAuth();
  }, [dispatch]);

  return children;
};
