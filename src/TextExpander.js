import { useState } from "react";
import Button from "./Button";

export default function TextExpander({
  children,
  collapsedNumWords = 10,
  expanded = false,
  expandButtonText = "Expand Button Text",
  collapseButtonText = "Collapse Button Text",
  className = "",
  color = "black",
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
      <Button handleClick={handleClick} textColor={color} textSize={textSize}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </Button>
    </div>
  );
}
