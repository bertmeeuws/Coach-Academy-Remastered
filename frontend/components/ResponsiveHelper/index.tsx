import React from "react";
import { SHOW_RESPONSIVE_HELPER } from "../../constants/config";

export default function ResponsiveHelper() {
  return (
    <>
      {SHOW_RESPONSIVE_HELPER && (
        <div className="fixed bottom-4 left-2 z-50 rounded bg-black p-2 px-4 font-bold text-white sm:block">
          <span className="sm:hidden">_</span>
          <span className="hidden sm:block md:hidden">sm</span>
          <span className="hidden md:block lg:hidden">md</span>
          <span className="hidden lg:block xl:hidden">lg</span>
          <span className="hidden xl:block 2xl:hidden">xl</span>
          <span className="hidden 2xl:block">2xl</span>
        </div>
      )}
    </>
  );
}
