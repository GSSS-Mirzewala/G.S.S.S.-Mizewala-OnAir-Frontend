// External Modules
import { useSelector } from "react-redux";

function Notification({ UPDATE_MODAL_STATE }) {
  const USER = useSelector((store) => store.COMMON_INFO);
  return (
    <div className="w-full flex flex-row items-center justify-between p-4 rounded-sm  bg-white">
      <div className="w-full flex flex-row items-center gap-2">
        <img src={USER.avatarUrl} alt="Avatar" width={40} height={40} />
        <input
          className="w-full px-2 text-md font-medium  border-none outline-none cursor-text"
          placeholder="What's new...?"
          readOnly={true}
          onClick={UPDATE_MODAL_STATE}
        ></input>
      </div>
    </div>
  );
}

export default Notification;
