// External Modules
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Local Modules
import api from "@utils/api.js";
import { CommonInfoActions } from "@/store/slices/CommonInfoSlice";
import { SpecialInfoActions } from "@/store/slices/SpecialInfoSlice";

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api("GET", "auth/me", true);
        dispatch(
          CommonInfoActions.SETUP_NEW_USER({
            ...response.data.mongodata.common,
          })
        );
        if (response.data.mongodata.common.userType === "Teacher") {
          dispatch(
            SpecialInfoActions.SETUP_TEACHER({
              ...response.data.mongodata.special,
            })
          );
        } else if (response.data.mongodata.common.userType === "Student") {
          dispatch(
            SpecialInfoActions.SETUP_STUDENT({
              ...response.data.mongodata.special,
            })
          );
        }
      } catch {
        dispatch(CommonInfoActions.LOGOUT());
        dispatch(SpecialInfoActions.LOGOUT());
      }
    };

    checkAuth();
  }, [dispatch]);

  return children;
};
