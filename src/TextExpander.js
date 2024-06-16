import { useState } from "react";
import Button from "./Button";

export default function TextExpander({
  children,
  expandButtonText,
  collapseButtonText,
}) {
  const [expanded, setExpanded] = useState(false);
  function handleClick() {
    setExpanded(!expanded);
  }

  const threshold = 10;
  const text = children.split(" "); // this variable might not be needed

  const collapsedText = text.slice(0, threshold).join(" ");
  console.log("here ", collapsedText);
  return (
    <div>
      {expanded ? children : `${collapsedText}...`}
      <Button handleClick={handleClick}>
        {expanded ? collapseButtonText : expandButtonText}
      </Button>
    </div>
  );
}
