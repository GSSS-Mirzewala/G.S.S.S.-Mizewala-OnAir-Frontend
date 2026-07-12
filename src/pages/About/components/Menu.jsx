// React Router (Components)
import { Link } from "react-router-dom";

// Local Hooks
import { usePreference } from "@hooks/ContextHooks";

function Menu({ SELECTED }) {
  const { LANGUAGE } = usePreference();
  return (
    <div className="w-full p-6 rounded-sm bg-white">
      <div className="flex flex-row items-center gap-8">
        <Link
          to="/credits"
          className={`text-base font-semibold cursor-pointer ${
            SELECTED === "Credits" ? "text-[var(--primary)]" : "text-black"
          }`}
        >
          {LANGUAGE === "hi" ? "श्रेय" : "Credits"}
        </Link>
      </div>
    </div>
  );
}

export default Menu;
