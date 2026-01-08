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
  const USER = useSelector((store) => store.COMMON_IDENTITY);
  return (
    <>
      {USER.userType === "Teacher" && <Teacher />}
      {USER.userType === "Student" && <Student />}
    </>
  );
}

export default Dashboard;
