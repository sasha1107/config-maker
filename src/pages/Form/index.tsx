import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@shadcn/button';
import { useToast } from '@shadcn/use-toast';
import { formData } from '@constants';
import { Code } from '@components';

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
      navigate('/result', {
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
        title: '첫번째 페이지입니다.',
        className: 'top-0 left-0',
      });
      return;
    }
    setFormStep((prev) => prev - 1);
  };
  return (
    <div>
      <div>
        <Button onClick={handlePrevStep}>이전</Button>
      </div>
      {config}
      <div>{progress}</div>
      <div>
        <div className='flex gap-2'>
          {options.map(({ description, value }) => (
            <div key={value.toString()}>{description}</div>
          ))}
        </div>
        <div className='flex gap-2'>
          {options.map(({ code, value }) => (
            <div key={value.toString()}>
              <Code compact>{code.join('\n')}</Code>
            </div>
          ))}
        </div>
        <div className='flex gap-2'>
          {options.map(({ value }) => (
            <Button
              key={value.toString()}
              onClick={() => handleNextStep(value, config)}
            >
              {value.toString()}
            </Button>
          ))}
        </div>
        <div>
          <Button
            variant={'ghost'}
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
