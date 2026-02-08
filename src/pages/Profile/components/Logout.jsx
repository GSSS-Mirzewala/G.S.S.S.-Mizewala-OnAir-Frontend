// External Modules
import { useNavigate } from "react-router-dom";

// Assets
import LogoutIcon from "@icons/Logout.svg";

function Logout() {
  const navigate = useNavigate();

  function handleConfirmation() {
    const isLogout = confirm("Are you sure you to logout?");
    if (isLogout) {
      navigate("/logout");
    }
  }

  return (
    <img
      src={LogoutIcon}
      alt="Logout-Icon"
      width={30}
      className="cursor-pointer"
      onClick={handleConfirmation}
    />
  );
}

export default Logout;
