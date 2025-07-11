"use client";

import Lenis from "lenis";
import Image from "next/image";
import "lenis/dist/lenis.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landing from "@/components/Landing";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (showPreloader) {
      setCount(0); // reset count when preloader shows
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 100) return prev + 1;
          return 100;
        });
      }, 16); // ~60fps
      return () => clearInterval(interval);
    }
  }, [showPreloader]);

  useEffect(() => {
    if (count === 100) {
      setTimeout(() => setShowPreloader(false), 500);
    }
  }, [count]);

  return (
    <main className="relative">
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="h-screen w-full bg-[#eceae5] absolute top-0 left-0 text-[#0e0e0e] z-50 flex flex-col items-center justify-center font-[Neue]"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 2, ease: [0.77, 0, 0.175, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="mb-8 font-[Socilo]"
            >
              <div className="flex items-center gap-2">
                <h1 className="text-5xl">U</h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "15vh" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  exit={{ width: 0 }}
                  className="h-[15vh] bg-[#0e0e0e]"
                ></motion.div>
                <h1 className="text-5xl">X</h1>
              </div>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.2 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="bottom-2 absolute w-full"
            >
              <div className=" flex items-center justify-between w-full px-5 font-bold">
                <div className="text-xs">( Loading )</div>
                <div className="text-xs">{count}%</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        {/* Home content goes here */}
      <Landing/>
      <div className="h-screen w-full bg-[#0e0e0e] px-4 pt-2 text-[#eceae5] font-[Neue]">

      </div>
    </main>
  );
}
