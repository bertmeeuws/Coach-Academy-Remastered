import React from "react";

export default function Button({ children, ...props }: any) {
  return (
    <button
      {...props}
      type="button"
      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-neutralGreen border border-transparent rounded-md hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      {children}
    </button>
  );
}
