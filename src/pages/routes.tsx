import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Splash, Form, Result, Loading } from "@pages";

const routes = createBrowserRouter(
  [
    {
      path: "/",
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
      path: "/form",
      element: <Form />,
      // loader: () => {
      //   return new Promise((resolve) => {
      //     const result = joinJSON(formData, configData, 'config');
      //     resolve(result);
      //   });
      // },
    },
    {
      path: "/result",
      element: <Result />,
    },
  ],
  {
    basename: "/config-maker",
  },
);
const Router = () => {
  return <RouterProvider router={routes} fallbackElement={<Loading />} />;
};

export default Router;
