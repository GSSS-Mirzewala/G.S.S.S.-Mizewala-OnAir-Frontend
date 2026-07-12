// External Modules
import { Link } from "react-router-dom";
import { format } from "date-fns";

// Icons
import Leaf from "@icons/Leaf.svg";
import Close from "@icons/Close.svg";

function Enviornment() {
  return (
    <>
      <div className="flex flex-row items-start max-sm:items-end justify-between p-2 max-sm:p-2 border-2 border-green-700 rounded-sm max-sm:rounded-md pr-4">
        <div className="flex flex-row items-center max-sm:items-start gap-2">
          <img
            src={Leaf}
            alt="Leaf Icon"
            width={28}
            className="cursor-pointer"
          />
          <span className="font-mono">
            We do not inherit the earth from our ancestors; we borrow it from our children.
          </span>
        </div>
      </div>
    </>
  );
}

export default Enviornment;
