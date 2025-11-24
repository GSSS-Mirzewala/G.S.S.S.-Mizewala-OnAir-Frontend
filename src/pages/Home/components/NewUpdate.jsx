// React Router (Components)
import { Link } from "react-router-dom";

// Data
import Release_Notes from "@/data/Release_Notes";

// Icons
import Leaf from "@icons/Leaf.svg";
import Close from "@icons/Close.svg";

function NewUpdate({ SET_NOTIFY }) {
  const NOTIFICATION_INFO = {
    DATE: Release_Notes[0].DATE,
    UPDATE_TYPE: Release_Notes[0].UPDATE_TYPE,
    VERSION: Release_Notes[0].VERSION,
  };
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
            <span>
              New {NOTIFICATION_INFO.UPDATE_TYPE} ({NOTIFICATION_INFO.VERSION}){" "}
            </span>
            — Rolled out on {NOTIFICATION_INFO.DATE}.{" "}
            <Link to="/release_notes" className="text-blue-600">
              [View Release Notes]
            </Link>
          </span>
        </div>
        <div>
          <img
            src={Close}
            alt="Close Icon"
            width={25}
            className="cursor-pointer max-sm:w-20"
            onClick={() => {
              SET_NOTIFY(false);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default NewUpdate;
