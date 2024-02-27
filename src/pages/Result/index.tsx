import Install from "./_components/Install";
import { useLocation } from "react-router-dom";
import { Code } from "@components";

const Result = () => {
  const { state } = useLocation();
  return (
    <div>
      <h2 className="text-3xl text-center mb-10">결과</h2>
      <div className="flex flex-col gap-8">
        <Install />
        <Code copy>{JSON.stringify(Object.fromEntries(state), null, 2)}</Code>
      </div>
    </div>
  );
};

export default Result;
