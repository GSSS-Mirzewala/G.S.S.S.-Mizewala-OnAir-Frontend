// React Hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Local Components
import Menu from "./components/Menu";
import Credits from "./components/Credits";

function About() {
  const [SELECTED, SET_SELECTED] = useState("Credits");
  const location = useLocation();

  return (
    <>
      <Menu SELECTED={SELECTED} />
      <div className="w-full p-3 rounded-sm bg-white">
        {SELECTED === "Credits" && <Credits />}
      </div>
    </>
  );
}

export default About;
