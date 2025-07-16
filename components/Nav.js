"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log(isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { y: "-100%" },
    visible: {
      y: 0,
      transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] },
    },
    exit: {
      y: "-100%",
      transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
    },
  };

  const bigTextAnimation = (delay) => ({
    initial: { y: 50 },
    animate: { y: 0, transition: { delay, ease: [0.77, 0, 0.175, 1], duration: 1.5 } },
  });

  const smallTextAnimation = (delay) => ({
    initial: { y: 25 },
    animate: { y: 0, transition: { delay, ease: [0.77, 0, 0.175, 1], duration: 1.5 } },
  });

  const underlineAnimation = (delay) => ({
    initial: { width: 0 },
    animate: { width: "100%", transition: { delay, duration: 1, ease: "easeInOut" } },
  });

  return (
    <>
      <div className="text-xs flex items-center justify-between font-medium fixed w-full px-4 z-50 bg-transparent">
        <div className="flex items-center gap-10">
          <h1
            className={`uppercase ${
              isMenuOpen ? "text-[#0e0e0e]" : "text-[#eceae5]"
            } transition-colors duration-300`}
          >
            Design
          </h1>
          {isMenuOpen ? (
            <div className="text-[#0e0e0e]">Bhopal, India</div>
          ) : (
            <div>00%</div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <div className="text-[#0e0e0e] transition-colors duration-300 underline">
                Close
              </div>
            ) : (
              <div className="text-[#eceae5] transition-colors duration-300">
                Menu
              </div>
            )}
          </button>
          <div
            className={`h-2 w-2 rounded-full ${
              isMenuOpen ? "bg-[#0e0e0e]" : "bg-[#eceae5]"
            } transition-colors duration-300`}
          ></div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-[#eceae5] z-40 text-[#0e0e0e] text-xs flex flex-col"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="w-full pt-20 flex-1">
              <div className="w-full px-4">
                <div className="w-full">
                  <div className="overflow-hidden">
                    <motion.h2
                      {...smallTextAnimation(1)}
                      className="pb-2 text-zinc-500 font-medium"
                    >
                      (Navigation)
                    </motion.h2>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.05)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.1)}>
                        <Link
                          href="/"
                          className={`text-4xl ${
                            pathname === "/" ? "text-[#0e0e0e]" : "text-zinc-500"
                          }`}
                        >
                          Home
                        </Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.2)}
                        className={`text-4xl ${
                          pathname === "/" ? "text-[#0e0e0e]" : "text-zinc-500"
                        }`}
                      >
                        01
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.25)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.3)}>
                        <Link
                          href="/events"
                          className={`text-4xl ${
                            pathname === "/events"
                              ? "text-[#0e0e0e]"
                              : "text-zinc-500"
                          }`}
                        >
                          Events
                        </Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.4)}
                        className={`text-4xl ${
                          pathname === "/events"
                            ? "text-[#0e0e0e]"
                            : "text-zinc-500"
                        }`}
                      >
                        02
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.45)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
                <div className="w-full">
                  <div className="flex pb-2 items-center text-4xl justify-between">
                    <div className="overflow-hidden">
                      <motion.div {...bigTextAnimation(1.5)}>
                        <Link
                          href="/members"
                          className={`text-4xl ${
                            pathname === "/members"
                              ? "text-[#0e0e0e]"
                              : "text-zinc-500"
                          }`}
                        >
                          Members
                        </Link>
                      </motion.div>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        {...bigTextAnimation(1.6)}
                        className={`text-4xl ${
                          pathname === "/members"
                            ? "text-[#0e0e0e]"
                            : "text-zinc-500"
                        }`}
                      >
                        03
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    {...underlineAnimation(1.65)}
                    className="w-full bg-[#0e0e0e] h-[1px]"
                  ></motion.div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 pb-4">
              <div className="overflow-hidden">
                <motion.div {...smallTextAnimation(1.7)}>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    Instagram
                    <GoArrowUpRight />
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <div className="overflow-hidden">
                  <motion.div
                    {...smallTextAnimation(1.8)}
                    className="flex flex-col leading-none"
                  >
                    <h1>Collectible Furniture</h1>
                    <h1>and Objects</h1>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    {...smallTextAnimation(1.8)}
                    className="flex flex-col leading-none"
                  >
                    <h1>Designed by</h1>
                    <h1>UX Club, VIT Bhopal</h1>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}