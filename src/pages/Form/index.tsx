import { useLoaderData } from 'react-router-dom';
import { Button } from '@shadcn/button';
type JoinedformDataType = {
  id: number;
  config: string;
  options: string[] | boolean[];
  default: string | boolean;
  description: string;
};
const Form = () => {
  const formData = useLoaderData() as JoinedformDataType[];
  console.log(formData);

  return (
    <div>
      {formData.map(({ id, config, description, options }) => {
        return (
          <div key={id}>
            <div>
              <p>{config}</p>
              <p>{description}</p>
            </div>
            <div>
              {options.map((option) => {
                return <Button>{option.toString()}</Button>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
