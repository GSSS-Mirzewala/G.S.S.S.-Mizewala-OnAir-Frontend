// Assets
import VerifiedIcon from "@icons/Verified.svg";

function Banner({ info }) {
  return (
    <>
      <div className="px-2">
        <div
          className={`w-full min-h-40 border-3 ${
            info?.isOnline ? "border-green-800" : "border-black"
          }  bg-white rounded-md`}
        >
          <div className="flex flex-row items-center justify-end py-2 px-4">
            {info?.isVerified && (
              <img
                src={VerifiedIcon}
                alt="Verified_Icon"
                width={35}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <div
          className={`p-1 relative -top-14 -left-4 min-w-20 max-w-20 min-h-20 max-h-20 border-3 ${
            info?.isOnline ? "border-green-800" : "border-black"
          } rounded-full bg-white`}
        >
          <img
            src={info?.profilePictureUrl}
            alt={`${info?.name}' Profile Picture`}
            style={{
              borderRadius: "50%",
              minWidth: "66px",
              maxWidth: "66px",
              minHeight: "66px",
              maxHeight: "66px",
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
