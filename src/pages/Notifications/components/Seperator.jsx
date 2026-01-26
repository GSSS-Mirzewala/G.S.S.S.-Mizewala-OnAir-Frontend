function Seperator({ date }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className="bg-black/80 px-4 py-1.5 font-medium text-white text-sm whitespace-nowrap rounded-lg"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {date}
      </span>
    </div>
  );
}

export default Seperator;
