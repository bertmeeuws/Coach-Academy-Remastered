import classNames from "classnames";
import React from "react";

export default function ListItem({ data, setValue }: any) {
  const fake = ["", "", "", "", ""];

  return (
    <div>
      <p className="mb-4 text-center text-xl font-semibold capitalize text-darkBlue">
        {data.name}
      </p>
      <div className="mb-4 flex items-center justify-between">
        <p className="font-bold text-gray-600">none</p>
        <div className="flex cursor-pointer space-x-4">
          {fake.map((k, idx) => (
            <>
              <div onClick={(e) => setValue(idx + 1)} className="p-2">
                <div
                  key={idx}
                  className={classNames(
                    "h-3 w-3 rounded-full  hover:bg-fluoGreen",
                    {
                      "bg-fluoGreen": idx + 1 === data.score,
                    },
                    {
                      "bg-gray-400": idx + 1 !== data.score,
                    }
                  )}
                ></div>
              </div>
            </>
          ))}
        </div>
        <p className="font-bold text-gray-600">a lot</p>
      </div>
    </div>
  );
}
