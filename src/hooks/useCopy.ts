import { useState } from "react";

const useCopy = () => {
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");

  const copy = async (code: string) => {
    try {
      setCopyState("copied");
      await navigator.clipboard.writeText(code);
      setTimeout(() => {
        setCopyState("idle");
      }, 4000);
    } catch (error) {
      console.error(error);
    }
  };

  return { copy, copyState };
};

export default useCopy;
