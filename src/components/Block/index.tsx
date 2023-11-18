import type { ReactNode } from "react";
type BlockProps = {
  color?: string;
  children: ReactNode;
  span?: number;
  inverted?: boolean;
};
const Block = ({ color, children, span, inverted }: BlockProps) => {
  const currentColor = color || "text-white";
  const colorClass = color ? "colorChange" : "";
  const colSpan = span
    ? [
        "col-span-2",
        "col-span-3",
        "col-span-4",
        "col-span-5",
        "col-span-6",
        "col-span-7",
        "col-span-8",
        "col-span-9",
      ][span - 2]
    : "";
  const filledClass = inverted ? "bg-white text-black" : "";
  return (
    <div
      className={`p-2 border-2 border-current ${currentColor} text-3xl ${colSpan} flex justify-center items-center min-w-[56px] rounded-full ${filledClass} ${colorClass}`}
    >
      {children}
    </div>
  );
};

export default Block;
