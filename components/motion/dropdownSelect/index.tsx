"use client";
import { FaCheck, FaChevronDown } from "@/components/icons";
import { Locale } from "@/i18n-config";
import { formatLabel } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export function DropDownSelect({
  slugs,
  lang,
}: {
  slugs: string[];
  lang: Locale;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Rooms");

  const router = useRouter();
  const searchParams = useSearchParams();

  const categoria = searchParams.get("categoria");
  const param = categoria ? formatLabel(categoria.replace(/-/g, " ")) : "";
  const [currentOption, setCurrentOption] = useState(
    param ? param : "All Rooms",
  );

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

  useEffect(() => {
    if (categoria) {
      setSelectedCategory(categoria);
    } else {
      setSelectedCategory("All Rooms");
    }
  }, [categoria]);

  return (
    <motion.div className="relative z-[1] rounded-sm border p-3">
      <motion.button
        onClick={() => setShowDropdown((prev) => !prev)}
        className="flex w-full items-center justify-between px-2 text-left text-sm"
      >
        <span className="font-semibold">{selectedCategory}</span>
        <FaChevronDown
          className={`transform text-primary-highlight transition-transform delay-75 ${showDropdown ? "rotate-180" : "0"}`}
        />
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
            }}
          >
            <motion.div className="flex flex-col items-start justify-start gap-2 text-sm">
              {slugs.map((slug, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleOptionClick(slug)}
                  className={`hover:bg-muted-foreground/10 group relative flex w-full cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1.5 pl-2 text-left text-sm outline-none focus:bg-accent focus:text-accent-foreground ${
                    formatLabel(slug) === param
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }`}
                >
                  <span>{formatLabel(slug)}</span>
                  <FaCheck
                    className={
                      formatLabel(slug) === param
                        ? "text-primary-highlight"
                        : "text-highlight-muted"
                    }
                  />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
