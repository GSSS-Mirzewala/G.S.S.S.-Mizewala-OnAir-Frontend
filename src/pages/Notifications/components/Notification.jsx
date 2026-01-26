function Notification({ Avatar, posterName, text, time }) {
  return (
    <div className="w-full flex flex-col px-2 py-1 bg-white border-1 border-[#c0c0c0] rounded-md">
      <div className="flex flex-row px-2 py-2 gap-4">
        <img
          src={Avatar}
          alt="Poster_Avatar"
          className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full"
        />
        <div className="w-full flex flex-col">
          <span className="w-fit font-semibold">Posted by {posterName}</span>
          <a
            href=""
            className="font-normal text-gray-500 tracking-wide cursor-pointer"
          >
            {text.length > 100 ? text.slice(0, 100) + "..." : text}
          </a>
        </div>
      </div>
      <span className="font-medium text-[var(--secondary)] text-end">
        {time}
      </span>
    </div>
  );
}

export default Notification;
