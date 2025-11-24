// React Router (Components)
import { Link } from "react-router-dom";

// Icons
import Home from "@icons/Home.svg";
import Gallery from "@icons/Gallery.svg";
import Dashboard from "@icons/Dashboard.svg";
import Notifications from "@icons/Notifications.svg";

function Navigation() {
  return (
    <div className="flex md:hidden fixed bottom-0 w-full items-center justify-between px-8 pt-4 pb-6 bg-white gap-1">
      <div>
        <Link to="/">
          <img src={Home} alt="Home" width={25} />
        </Link>
      </div>
      <div>
        <Link to="/gallery">
          <img src={Gallery} alt="Gallery" width={25} />
        </Link>
      </div>
      <div>
        <Link to="/dashboard">
          <img src={Dashboard} alt="Dashboard" width={25} />
        </Link>
      </div>
      <div>
        <Link to="/notifications">
          <img src={Notifications} alt="Notifications" width={25} />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
