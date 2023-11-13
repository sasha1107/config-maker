import { Button } from '@shadcn/button';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div>
      <Button variant={'outline'} asChild>
        <Link to={'/form'}>시작하기</Link>
      </Button>
    </div>
  );
};

export default Splash;
