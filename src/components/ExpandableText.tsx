import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = expanded ? children : children.substring(0, maxChars);
  return (
    <div>
      <p>
        {text}...
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Less" : "More"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;
