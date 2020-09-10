import React, { useState } from "react";
const Emoji = ({ title, symbol }) => {
  const [hoverLine, setHoverLine] = useState(false);

  return (
    <div
      className="line"
      onMouseEnter={() => {
        setHoverLine(true);
      }}
      onMouseLeave={() => {
        setHoverLine(false);
      }}
      onClick={() => {
        navigator.clipboard.writeText(symbol);
      }}
    >
      {symbol} {title}
      {hoverLine && <span className="copy">Click to copy</span>}
    </div>
  );
};
export default Emoji;
