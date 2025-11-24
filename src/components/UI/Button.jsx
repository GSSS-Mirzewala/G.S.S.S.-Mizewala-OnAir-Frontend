function Button({ type, text, font, px, py }) {
  return (
    <button
      type="submit"
      className={`${
        type === "dark" ? "bg-black text-white" : "bg-white text-black border-1"
      } ${font} w-fit rounded-sm cursor-pointer font-semibold`}
      style={{ padding: `${py}rem ${px}rem` }}
    >
      {text}
    </button>
  );
}

export default Button;
