import React from "react";

interface Props {
  data: any;
}

const DietThumbnail: React.FC<Props> = ({ data }: any) => {
  return (
    <div className="relative h-56 min-w-[200px] rounded-lg bg-fluoGreen p-3 font-bold text-white">
      <p className="text-lg">{data.calories} calories</p>
      <div className="mt-8">
        <p className="text-lg">{data.carbs} Carbs</p>
        <p className="text-lg">{data.protein} Protein</p>
        <p className="text-lg">{data.fat} Fat</p>
      </div>
      <p className="absolute right-4 bottom-4 text-3xl">Today</p>
    </div>
  );
};

export default DietThumbnail;
