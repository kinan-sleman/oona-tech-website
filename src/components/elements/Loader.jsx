import { loader } from "../../assets";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-[10000]"
      style={{
        backdropFilter: "blur(5px)",
      }}
      initial={{ y: "-100%", filter: "opacity(0)" }}
      animate={{ y: 0, filter: "opacity(1)" }}
      exit={{ y: "-100%", filter: "opacity(0)" }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={loader}
        alt="Loading..."
        style={{ filter: "brightness(1.2)" }}
        className="mx-auto w-[200px]"
      />
    </motion.div>
  );
}

export default Loader;
