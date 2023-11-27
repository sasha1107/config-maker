import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@shadcn/button";
import { useToast } from "@shadcn/use-toast";
import { Progress } from "@shadcn/progress";
import { formData } from "@constants";
import { Code } from "@components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shadcn/card";

const Form = () => {
  const [formStep, setFormStep] = useState(1);
  const currentForm = formData.find((form) => form.id === formStep);
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(new Map());
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  useEffect(() => {
    setProgress(((formStep - 1) / formData.length) * 100);
  }, [formStep]);

  useEffect(() => {
    if (formStep > formData.length) {
      navigate("/result", {
        state: answer,
      });
    }
  }, [answer, formStep, navigate]);

  if (currentForm === undefined) {
    return <div>404</div>;
  }
  const { options, config, default: defaultOption } = currentForm;

  const handleUpdateAnswer = (value: unknown, config: string) => {
    setAnswer((prevMap) => new Map(prevMap).set(config, value));
  };
  const handleNextStep = (value: unknown, config: string) => {
    handleUpdateAnswer(value, config);
    setFormStep((prev) => prev + 1);
  };
  const handlePrevStep = () => {
    if (formStep === 1) {
      toast({
        title: "첫번째 페이지입니다.",
        className: "top-0 left-0",
      });
      return;
    }
    setFormStep((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-4 md:mb-8 mr-14">
        <Button className="float-left" onClick={handlePrevStep}>
          이전
        </Button>
        <h2 className="text-3xl">{config}</h2>
      </div>
      <div className="mb-2 md:mb-10">
        <Progress value={progress} />
      </div>
      <div className="flex-grow-0 md:flex-grow flex flex-col justify-between gap-0 md:gap-10">
        <div
          className={`flex-grow-0 md:flex-grow grid gap-4 px-2 py-4 grid-cols-1 ${
            options.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {options.map(({ description, value, code }) => (
            <Card
              className="transition-transform hover:scale-[1.02] bg-transparent hover:cursor-pointer hover:bg-[#ffffff1a]"
              key={value.toString()}
              onClick={() => handleNextStep(value, config)}
            >
              <CardHeader>
                <CardTitle className="text-white mb-2">
                  {value.toString()}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Code>{code.join("\n")}</Code>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <Button
            className="w-full text-slate-50"
            variant={"link"}
            onClick={() => handleNextStep(defaultOption, config)}
          >
            SKIP(기본값으로 설정)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
