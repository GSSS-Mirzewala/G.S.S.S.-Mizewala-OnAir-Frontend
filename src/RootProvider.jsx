// Dependencies (Block)
import { Provider as ReduxProvider } from "react-redux";

// Context API Providers (Block)
import { HolidayProvider } from "./Storage/Holiday";
import { PrefProvider } from "./Storage/Preferences";
import { AuthProvider } from "./Storage/Auth";

// React Redux (Block)
import STORE from "./store/index";

function RootProvider({ children }) {
  return (
    <ReduxProvider store={STORE}>
      <AuthProvider>
        <PrefProvider>
          <HolidayProvider>{children}</HolidayProvider>
        </PrefProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}

export default RootProvider;
