// Assets
import Avatar from "@/assets/public/Avatar.svg";

function Notification({ UPDATE_MODAL_STATE }) {
  return (
    <div className="w-full flex flex-row items-center justify-between p-4 rounded-sm  bg-white">
      <div className="w-full flex flex-row items-center gap-2">
        <img src={Avatar} alt="Avatar" width={40} height={40} />
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
