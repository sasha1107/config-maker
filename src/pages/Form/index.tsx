import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@shadcn/button';
import { formData } from '@constants';

const Form = () => {
  const [formStep, setFormStep] = useState(1);
  const currentForm = formData.find((form) => form.id === formStep);
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(new Map());
  const [progress, setProgress] = useState(0);

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
      alert('첫번째 페이지입니다.');
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
              <pre className='bg-gray-600 text-white'>{code.join('\n')}</pre>
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
