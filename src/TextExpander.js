import { useState } from "react";
import Button from "./Button";

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expanded = false,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  className = "",
  buttonColor = "#1f09cd",
  textSize = 1,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  const collapsedText = children
    .split(" ")
    .slice(0, collapsedNumWords)
    .join(" ");

  return (
    <div className={className}>
      {isExpanded ? children : `${collapsedText}...`}
      <Button
        handleClick={handleClick}
        textColor={buttonColor}
        textSize={textSize}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </Button>
    </div>
  );
}
