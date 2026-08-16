import { motion, useReducedMotion } from "framer-motion";

/**
 * One shared scroll reveal so the whole site moves the same way.
 * Respects the operating system's "reduce motion" setting.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as = "div",
  once = true,
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
