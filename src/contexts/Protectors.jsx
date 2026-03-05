// External Modules
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// Local Modules
import { APIsContext } from "./APIs";

const Routes = [
  { path: "/", type: "public" },
  { path: "/login", type: "public" },
  { path: "/help", type: "public" },
  { path: "/logout", type: "private" },
  { path: "/gallery", type: "public" },
  { path: "/dashboard", type: "private" },
  { path: "/marker", type: "private", access: ["Teacher"] },
  { path: "/about", type: "public" },
  { path: "/credits", type: "public" },
  { path: "/release_notes", type: "public" },
  { path: "/notifications", type: "public" },
  { path: "/profile", type: "private" },
  { path: "/music", type: "private", access: ["Teacher", "Admin"] },
];

export const BPS = ({ children }) => {
  // Declarations
  const User = useSelector((store) => store.User);
  const { AUTH_API_CALLED } = useContext(APIsContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const included = Routes.find(
      (route) =>
        location.pathname === route.path ||
        location.pathname.startsWith(route.path + "/"),
    );

    // 1️⃣ Unknown route
    if (!included && !location.pathname.startsWith("/profile/")) {
      navigate("/", { replace: true });
      return;
    }

    // 2️⃣ Private route but not logged in
    if (included?.type === "private" && AUTH_API_CALLED && !User?.isLoggedIn) {
      navigate("/", { replace: true });
      return;
    }

    // 3️⃣ Role restriction
    if (
      included?.access &&
      included.type === "private" &&
      AUTH_API_CALLED &&
      User?.isLoggedIn &&
      !included.access.includes(User.userType)
    ) {
      navigate("/", { replace: true });
    }
  }, [
    location.pathname,
    AUTH_API_CALLED,
    User?.isLoggedIn,
    User?.userType,
    navigate,
  ]);

  return children;
};
