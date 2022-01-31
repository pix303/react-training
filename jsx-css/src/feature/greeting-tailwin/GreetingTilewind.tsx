import React, { CSSProperties } from "react";
import cn from "classnames";
type GreeetingProps = {
  isValid: boolean;
  text: string;
  name: string;
};

function GreetingTilewind({ isValid, text, name }: GreeetingProps) {
  const dynaStyle = cn("text-4xl", { "text-red-500 font-mono": isValid });
  // React type for rappresenting styles
  const inlineStyle: CSSProperties = { color: "red", backgroundColor: "black" };
  return (
    <div>
      <h1 className={dynaStyle}>
        Example with dynimic applied style by prop with classnames lib: {text}{" "}
        {name}
      </h1>
      <h1 style={inlineStyle}>
        Example how to apply inline styles: {text} {name}
      </h1>
    </div>
  );
}

export default GreetingTilewind;
