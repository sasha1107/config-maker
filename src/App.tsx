import Router from '@pages/routes';
import { Layout } from '@components';
import { Toaster } from '@shadcn/toaster';

function App() {
  return (
    <>
      <Layout>
        <Router />
        <Toaster />
      </Layout>
    </>
  );
}

export default App;
