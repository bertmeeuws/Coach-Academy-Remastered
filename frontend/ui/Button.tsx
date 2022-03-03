import classNames from "classnames";
import React from "react";

export default function Button({ children, className, ...props }: any) {
  return (
    <button
      {...props}
      type="button"
      className={classNames(
        "inline-flex justify-center rounded-md border border-transparent  bg-fluoGreen px-4 py-2 text-sm font-semibold text-white hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </button>
  );
}
