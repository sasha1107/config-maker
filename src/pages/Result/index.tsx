import Install from './_components/Install';
import { useLocation } from 'react-router-dom';
import { Code } from '@components';

const Result = () => {
  const { state } = useLocation();
  return (
    <div>
      <Install />
      <Code copy>{JSON.stringify(Object.fromEntries(state), null, 2)}</Code>
    </div>
  );
};

export default Result;
