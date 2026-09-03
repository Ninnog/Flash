import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export function MathText({ children, className }: { children: string; className?: string }) {
  const segments = children.split(/(\$[^$]+\$)/g);
  return <span className={className}>{segments.map((segment, index) => {
    if (segment.startsWith("$") && segment.endsWith("$")) return <InlineMath key={index} math={segment.slice(1, -1)} />;
    return <span key={index}>{segment}</span>;
  })}</span>;
}
