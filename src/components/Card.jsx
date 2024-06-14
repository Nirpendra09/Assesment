import { cardColors } from "@/constants/colors";
import React from "react";

const Card = ({ data, onDelete }) => {
  console.log(data);
  const currentCardColor = cardColors[data?.type];
  return (
    <div
      className="w-32 h-36 rounded flex items-center justify-center border-4 border-[#cc3030] relative bg-white cursor-pointer"
      style={{
        color: currentCardColor,
      }}
      onClick={onDelete}
    >
      <span className="absolute top-1 left-1"> {data?.name}</span>
      <p>{data?.type?.[0]?.toUpperCase()}</p>
    </div>
  );
};

export default Card;
