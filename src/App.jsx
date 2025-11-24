// Styles Sheets
import "./App.css";

// Dependencies
import { Outlet } from "react-router-dom";

// Context (Block)
import RootProvider from "./RootProvider";

function App() {
  return (
    <RootProvider>
      <Outlet />
    </RootProvider>
  );
}

export default App;
