"use client";

import clsx from "clsx";
import { useState } from "react";

const TabToggler = () => {
  const [active, setActive] = useState(0);
  const tabs = ["Home", "About", "Contact", "Blog"];

  return (
    <div className="flex w-full flex-col items-center px-4">
      <div className="relative flex w-full items-center justify-between rounded-full bg-neutral-200 py-2">
        <div
          className={clsx(
            "absolute top-1/2 left-[2px] z-0 h-[calc(100%-4px)] -translate-y-1/2 rounded-full bg-black transition-transform duration-300 ease-out"
          )}
          style={{
            minWidth: `calc(${1 / tabs.length} * 100%)`,
            transform: `translateX(${active * 98.5}%)`
          }}
        ></div>

        {tabs.map((tab, i) => (
          <button className="z-[1] flex-1/3 cursor-pointer" key={i} onClick={() => setActive(i)}>
            <p
              className={clsx(
                "relative text-center text-sm font-semibold transition-colors duration-150 ease-out select-none",
                active === i ? "text-white" : "text-neutral-500"
              )}
            >
              {tab}
            </p>
          </button>
        ))}
      </div>

      {/* Tabs content */}
      <div className="mt-8">
        <style jsx>
          {`
            @keyframes slideUp {
              0% {
                transform: translateY(20px);
                filter: blur(4px);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                filter: blur(0px);
                opacity: 1;
              }
            }
            .animate-slideup {
              animation: slideUp 0.15s ease-out;
            }
          `}
        </style>
        {tabs[active] === "Home" && <div className="animate-slideup font-semibold">Home Content</div>}
        {tabs[active] === "About" && <div className="animate-slideup font-semibold">About Content</div>}
        {tabs[active] === "Contact" && <div className="animate-slideup font-semibold">Contact Content</div>}
        {tabs[active] === "Blog" && <div className="animate-slideup font-semibold">Blog Content</div>}
      </div>
    </div>
  );
};

export default TabToggler;
