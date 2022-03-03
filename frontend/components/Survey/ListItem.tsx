import React from "react";

export default function ListItem({ data }: any) {
  const fake = ["", "", "", "", ""];

  return (
    <div>
      <p className="mb-4 text-center text-xl font-semibold capitalize">
        {data.name}
      </p>
      <div className="mb-4 flex items-center justify-between">
        <p className="font-bold text-gray-600">none</p>
        <div className="flex cursor-pointer space-x-4">
          {fake.map((k, idx) => (
            <>
              <div
                key={idx}
                className="h-3 w-3 rounded-full bg-gray-400 hover:bg-fluoGreen"
              ></div>
            </>
          ))}
        </div>
        <p className="font-bold text-gray-600">a lot</p>
      </div>
    </div>
  );
}
