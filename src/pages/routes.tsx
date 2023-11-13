import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Splash, Form, Result, Loading } from '@pages';
import { configData, formData } from '@constants';
import { joinJSON } from '@utils';

type formDataType = {
  id: number;
  config: string;
  options: string[] | boolean[] | number[];
  default: string | boolean | number;
  description: string;
};
type configDataType = {
  id: number;
  config: string;
  options: string[] | boolean[] | number[];
  default: string | boolean | number;
};
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
    // loader: async () => {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve({});
    //       console.log('done');
    //     }, 3000); // 3-second delay
    //   });
    // },
  },
  {
    path: '/form',
    element: <Form />,
    loader: () => {
      return new Promise((resolve) => {
        const result = joinJSON<formDataType, configDataType>(
          formData,
          configData,
          'config'
        );
        resolve(result);
      });
    },
  },
  {
    path: '/result',
    element: <Result />,
  },
]);
const Router = () => {
  return <RouterProvider router={routes} fallbackElement={<Loading />} />;
};

export default Router;
