"use client";

import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

interface NavContainerProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

export const NavContainer = ({
  isOpen,
  children,
  className,
}: NavContainerProps) => {
  return (
    <motion.div
      initial={{ x: "-100%" }} // Start with the nav off-screen to the left
      animate={{ x: isOpen ? 0 : "-100%" }} // Slide in/out based on `isOpen`
      exit={{ x: "-100%" }} // Exit transition (if using AnimatePresence)
      transition={{ type: "tween", duration: 0.3 }} // Smooth transition
      className={twMerge(
        "fixed left-0 top-0 z-50 h-full w-full bg-background shadow-lg",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
