import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);

  // Slower rounding = better visual stepping
  const rounded = useTransform(count, (latest) => Math.round(latest));

useEffect(() => {
  if (isInView) {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }
}, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default Counter;