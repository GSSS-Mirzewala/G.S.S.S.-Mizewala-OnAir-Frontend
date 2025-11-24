// React Hooks
import { useNavigate } from "react-router-dom";

// Styles
import styles from "./styles/ToolCard.module.css";

function ToolCard({ Name, Description, Icon, Route }) {
  const navigate = useNavigate();
  return (
    <div className={styles.CONTAINER}>
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <img src={Icon} alt={Icon} className="max-w-10" />
          <h4 className="text-center font-semibold">{Name}</h4>
        </div>
        <div>
          <p className="text-center font-light text-[15px] px-3">
            {Description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-3">
        <button
          className={styles.BUTTON}
          onClick={() => {
            navigate(Route);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ToolCard;
