import formJSON from './form.json';
import configJSON from './config.json';

type formDataType = {
  id: number;
  config: string;
  options: {
    value: string | boolean | number;
    description: string;
    code: string;
  }[];
  default: string | boolean | number;
  description: string;
};
type configDataType = {
  id: number;
  config: string;
  options: string[] | boolean[] | number[];
  default: string | boolean | number;
};

const formData: formDataType[] = formJSON;
const configData: configDataType[] = configJSON;

export { formData, configData };
