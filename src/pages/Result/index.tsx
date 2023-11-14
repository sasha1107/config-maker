import Install from './_components/Install';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const { state } = useLocation();
  return (
    <div>
      <Install />
      <pre>{JSON.stringify(Object.fromEntries(state), null, 2)}</pre>
    </div>
  );
};

export default Result;
