// External Modules
import { useDispatch } from "react-redux";

// Local Modules
import { UserActions } from "@/store/slices/user.slice";

export const useOrganizer = () => {
  const dispatch = useDispatch();

  return (data, reference) => {
    const obj = data;
    delete obj.reference;

    dispatch(UserActions.SETUP_NEW_USER(data));

    if (obj.userType === "Teacher") {
      dispatch(UserActions.SETUP_TEACHER(reference));
    } else if (data.userType === "Student") {
      dispatch(UserActions.SETUP_STUDENT(reference));
    } else if (data.userType === "Admin") {
      dispatch(UserActions.SETUP_ADMIN(reference));
    }
  };
};
