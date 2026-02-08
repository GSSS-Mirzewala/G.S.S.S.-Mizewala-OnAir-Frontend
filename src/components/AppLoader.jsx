// Framer Motion (Animations)
import { motion } from "framer-motion";

function Loader() {
  const BrandName = [
    { text: "G.", color: "text-orange-500" },
    { text: "S.", color: "text-orange-500" },
    { text: "S.", color: "text-orange-500" },
    { text: "S.", color: "text-orange-500" },
    { text: " ", color: "" },
    { text: "M", color: "text-green-700" },
    { text: "i", color: "text-green-700" },
    { text: "r", color: "text-green-700" },
    { text: "z", color: "text-green-700" },
    { text: "e", color: "text-green-700" },
    { text: "w", color: "text-green-700" },
    { text: "a", color: "text-green-700" },
    { text: "l", color: "text-green-700" },
    { text: "a", color: "text-green-700" },
  ];
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-white">
      <div></div>
      <h1 className="flex text-3xl font-semibold tracking-widest">
        {BrandName.map((letter, i) => (
          <motion.span
            key={i}
            className={letter.color}
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: (BrandName.length - 1) * 0.3,
              delay: i * 0.3, // bounce one-by-one
            }}
          >
            {letter.text}
          </motion.span>
        ))}
      </h1>
      <div></div>
      {/* <div className="pb-4">
        <h2
          className="font-semibold tracking-wider"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Setting up the app...{" "}
        </h2>
      </div> */}
    </div>
  );
}

export default Loader;
