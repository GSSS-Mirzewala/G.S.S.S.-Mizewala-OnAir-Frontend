// External Modules
import { useSelector } from "react-redux";

function Banner() {
  const USER = useSelector((store) => store.COMMON_IDENTITY);
  return (
    <>
      <div className="px-2">
        <div className="w-full min-h-40 border-3 border-green-800 bg-white rounded-md">
          <div className="p-1 relative top-22 -left-4 min-w-20 max-w-20 min-h-20 max-h-20 border-3 border-green-800 rounded-full bg-white">
            <img src={USER.avatarUrl} alt="Avatar" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
