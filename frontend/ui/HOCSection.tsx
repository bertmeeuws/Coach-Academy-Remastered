import React, { ReactChildren } from "react";

export default function HOCSection({ children }: any) {
  return (
    <div className="bg-ghost min-h-screen overflow-hidden flex flex-grow flex-col">
      {children}
    </div>
  );
}
