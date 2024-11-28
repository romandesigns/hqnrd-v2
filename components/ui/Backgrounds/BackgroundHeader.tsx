import React from "react";

export function BackgroundHeader() {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 z-[-2] h-[80vh] bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,hsla(201,97%,21%,0.40)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:block" />
      <div className="absolute top-0 -z-10 h-full w-full bg-transparent backdrop-blur-xl">
        <div className="left-right absolute bottom-auto left-0 top-0 h-[50vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#bfbd3360] opacity-20 blur-[80px] dark:bg-[#bfbd3300] dark:opacity-65 dark:blur-[40rem]" />
        <div className="left-right absolute bottom-auto right-0 top-0 -z-[20] h-[60vh] w-[50vw] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#479dcf40] opacity-50 blur-[80px] dark:bg-[#479dcf20]" />
      </div>
    </>
  );
}
