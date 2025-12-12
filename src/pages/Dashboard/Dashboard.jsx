// External Modules
import { useSelector } from "react-redux";
import { useEffect } from "react";

// Local Modules
import api from "@utils/api";

// Dashboards
import Teacher from "./Teacher";
import Student from "./Student";

function Dashboard() {
  const USER = useSelector((store) => store.USER);
  return (
    <>
      {USER.userType === "TCH" && <Teacher />}
      {USER.userType === "STD" && <Student />}
    </>
  );
}

export default Dashboard;
