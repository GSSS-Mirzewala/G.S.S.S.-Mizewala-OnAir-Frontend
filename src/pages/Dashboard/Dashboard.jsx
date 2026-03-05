// External Modules
import { useSelector } from "react-redux";

// Local Modules
import useHead from "@hooks/Head.jsx";
import Teacher from "./Teacher";
import Student from "./Student";
import Admin from "./Admin";

function Dashboard() {
  // Meta Data
  useHead({
    title: "Dashboard | G.S.S.S. Mirzewala",
  });

  // Declarations
  const User = useSelector((store) => store.User);
  return (
    <>
      {User?.userType === "Student" && <Student />}
      {User?.userType === "Teacher" && <Teacher />}
      {User?.userType === "Admin" && <Admin />}
    </>
  );
}

export default Dashboard;
