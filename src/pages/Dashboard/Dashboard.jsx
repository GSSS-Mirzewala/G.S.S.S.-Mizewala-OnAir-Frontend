// External Modules
import { useSelector } from "react-redux";

// Local Modules
import useHead from "@hooks/Head.jsx";

// Dashboards
import Teacher from "./Teacher";
import Student from "./Student";

function Dashboard() {
  useHead({
    title: "Dashboard | G.S.S.S. Mirzewala",
  });
  const USER = useSelector((store) => store.USER);
  return (
    <>
      {USER.userType === "TCH" && <Teacher />}
      {USER.userType === "STD" && <Student />}
    </>
  );
}

export default Dashboard;
