function Quote() {
  const Quote =
    '"Education is not the learning of facts, but the training of the mind to think."';
  return (
    <div className="rounded-[7px] p-6 bg-white flex items-center justify-center flex-col gap-3.5">
      <h1 className="text-3xl border-b-2 border-b-gray-800">
        Quote of The Day
      </h1>
      <p className="text-xl text-center max-sm:text-lg">{Quote}</p>
    </div>
  );
}

export default Quote;
