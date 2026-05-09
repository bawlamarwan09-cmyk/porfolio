"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-bg"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-24 w-24"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-60" />
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-transparent border-t-primary border-r-secondary"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 grid place-items-center font-display text-lg gradient-text">
              MB
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
