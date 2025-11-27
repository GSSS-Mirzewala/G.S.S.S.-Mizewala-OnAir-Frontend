// Framer Motion (Animations)
import { motion } from "framer-motion";

function Loader() {
  const Name = [
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
    <div className="flex items-center justify-center h-screen bg-white">
      <h1 className="flex text-3xl font-semibold tracking-widest">
        {Name.map((letter, i) => (
          <motion.span
            key={i}
            className={letter.color}
            initial={{ y: 0 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: (Name.length - 1) * 0.3,
              delay: i * 0.3, // bounce one-by-one
            }}
          >
            {letter.text}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}

export default Loader;
