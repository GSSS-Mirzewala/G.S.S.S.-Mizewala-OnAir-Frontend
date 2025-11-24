function Message({ MESSAGE, Graphic }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-sm p-4 bg-white min-h-[59vh] md:min-h-[65vh]">
      <img src={Graphic} alt="No Notifications" />
      <p className="text-center text-base md:text-lg font-semibold text-gray-600">
        "{MESSAGE}"
      </p>
    </div>
  );
}

export default Message;
