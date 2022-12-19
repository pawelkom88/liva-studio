import { motion } from "framer-motion";
import { pageTransitionVariants } from "@helpers/animation";

export default function PageTransition({ children, transitionKey }) {
  return (
    <motion.div
      key={transitionKey}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}>
      {children}
    </motion.div>
  );
}
