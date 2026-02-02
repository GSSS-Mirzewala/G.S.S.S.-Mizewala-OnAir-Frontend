// Assets
import UploadIcon from "@icons/Upload.svg";

function Hotbar() {
  return (
    <div className="px-4 py-2 flex gap-10 sm:gap-20 border-1 border-[#c0c0c0] bg-white rounded-full">
      <img src={UploadIcon} alt="Upload_Icon" width={35} />
    </div>
  );
}

export default Hotbar;
