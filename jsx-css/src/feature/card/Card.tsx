import React from "react";
import cn from "classnames";

type CardProps = {
  title: string;
  action?: string;
  bgColor?: string;
  borderColor?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  action,
  bgColor,
  borderColor,
  children,
}) => {
  return (
    <div
      className={cn(
        "m-20",
        "border-2",
        `${borderColor}`,
        "rounded-md",
        "overflow-hidden",
        "shadow-xl"
      )}
    >
      <div className={cn("text-center", "text-white", `${bgColor}`)}>
        <h1>{title}</h1>
      </div>
      <div className="bg-white p-1">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
