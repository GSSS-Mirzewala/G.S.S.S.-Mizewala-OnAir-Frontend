// Local Hooks
import { useAuth } from "@hooks/ContextHooks";

export default function ProtectedRoute({ children }) {
  const { UserType } = useAuth();

  if (UserType === "Checking...") {
    return <div>Checking access...</div>;
  }

  return children;
}
