function Hero({ children }) {
  return (
    <div className="flex flex-col w-[94%] md:w-[96%] m-[3%] md:m-[2%] gap-4">
      {children}
    </div>
  );
}

export default Hero;
