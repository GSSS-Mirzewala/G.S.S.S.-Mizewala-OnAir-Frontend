// React Hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Local Components
import Menu from "./components/Menu";
import Introduction from "./components/Introduction";
import ReleaseNotes from "./components/ReleaseNotes";
import Credits from "./components/Credits";

function About() {
  const [SELECTED, SET_SELECTED] = useState("Introduction");
  const location = useLocation();

  // Set Selected Tab as per URL
  useEffect(() => {
    if (location.pathname.toLowerCase() === "/about") {
      SET_SELECTED("Introduction");
    } else if (location.pathname.toLowerCase() === "/release_notes") {
      SET_SELECTED("Release Notes");
    } else if (location.pathname.toLowerCase() === "/credits") {
      SET_SELECTED("Credits");
    }
  }, [location]);

  return (
    <>
      <Menu SELECTED={SELECTED} />
      <div className="w-full p-3 rounded-sm bg-white">
        {SELECTED === "Introduction" && <Introduction />}
        {SELECTED === "Release Notes" && <ReleaseNotes />}
        {SELECTED === "Credits" && <Credits />}
      </div>
    </>
  );
}

export default About;
