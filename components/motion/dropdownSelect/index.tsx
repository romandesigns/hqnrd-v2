"use client";
import { Locale } from "@/i18n-config";
import { formatLabel } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function DropDownSelect({
  slugs,
  lang,
}: {
  slugs: string[];
  lang: Locale;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentOption, setCurrentOption] = useState("All Rooms");
  const router = useRouter();

  const dropdownVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 20 },
    exit: { opacity: 0, y: 0 },
  };

  const handleOptionClick = (option: string) => {
    setCurrentOption(formatLabel(option));
    setShowDropdown(false);
    router.push(`/${lang}/habitaciones?categoria=${option}`);
  };

  return (
    <motion.div className="relative rounded-sm border p-3">
      <motion.button
        onClick={() => setShowDropdown((prev) => !prev)}
        className="block w-full text-left text-sm"
      >
        {currentOption}
      </motion.button>
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 rounded-sm border bg-background p-3 shadow-sm"
            variants={dropdownVariants}
            transition={{
              speed: 0.25,
              duration: 0.1,
            }} // Adjust duration as needed
          >
            <motion.div className="flex flex-col items-start justify-start gap-2 text-sm">
              {slugs.map((slug, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleOptionClick(slug)}
                  className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 pl-2 pr-8 text-left text-sm outline-none hover:bg-muted-foreground/10 focus:bg-accent focus:text-accent-foreground"
                >
                  {formatLabel(slug)}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
