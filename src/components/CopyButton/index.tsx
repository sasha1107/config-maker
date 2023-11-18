import { Button } from "@shadcn/button";
import { Copy, CopyCheck } from "lucide-react";
import { useCopy } from "@hooks";

type CopyButtonProps = {
  copyText: string;
  visible: boolean;
};

const CopyButton = ({ copyText, visible }: CopyButtonProps) => {
  const { copyState, copy } = useCopy();
  const visibility = visible ? "visible" : "invisible";

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={() => copy(copyText)}
      className={`float-right ${visibility}`}
    >
      {copyState === "idle" ? (
        <Copy className="h-4 w-4" />
      ) : (
        <CopyCheck className="h-4 w-4" />
      )}
    </Button>
  );
};

export default CopyButton;
