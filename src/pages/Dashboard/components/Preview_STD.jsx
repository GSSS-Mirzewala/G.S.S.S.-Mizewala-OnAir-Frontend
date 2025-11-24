function Preview_STD({ Name, Father, Status }) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-row">
        <div className="px-1 flex flex-col items-start justify-start">
          <span className="font-semibold">{Name}</span>
          <span className="font-semibold tracking-wide text-[14px] text-[#c0c0c0]">
            S/O {Father}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center px-4">
        <span
          className={`font-semibold ${
            Status === "Present" ? "text-green-700" : "text-red-500"
          }`}
        >
          {Status}
        </span>
      </div>
    </div>
  );
}

export default Preview_STD;
