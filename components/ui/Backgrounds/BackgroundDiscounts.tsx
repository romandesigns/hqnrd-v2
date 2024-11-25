import React from "react";

export function BackgroundDiscounts() {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-transparent">
      <div className="left-right absolute bottom-auto left-0 top-0 h-[50vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#bfbd3360] opacity-25 blur-[80px] dark:-left-[20rem] dark:w-[70vw] dark:bg-[#bfb63300] dark:opacity-15 dark:blur-[300px]" />
      <div className="left-right absolute bottom-auto right-0 top-0 h-[70vh] w-[60vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#479dcf60] opacity-50 blur-[80px] dark:bg-[#479dcf00]" />
    </div>
  );
}
