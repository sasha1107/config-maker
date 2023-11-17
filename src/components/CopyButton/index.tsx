import { useState } from 'react';
import { Button } from '@shadcn/button';
import { Copy, CopyCheck } from 'lucide-react';

type CopyButtonProps = {
  copyText: string;
  visible: boolean;
};

const CopyButton = ({ copyText, visible }: CopyButtonProps) => {
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const visibility = visible ? 'visible' : 'invisible';
  const handleClickCopyButton = async (code: string) => {
    try {
      setCopyState('copied');
      await navigator.clipboard.writeText(code);
      setTimeout(() => {
        setCopyState('idle');
      }, 4000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      variant={'outline'}
      size={'icon'}
      onClick={() => handleClickCopyButton(copyText)}
      className={`float-right ${visibility}`}
    >
      {copyState === 'idle' ? (
        <Copy className='h-4 w-4' />
      ) : (
        <CopyCheck className='h-4 w-4' />
      )}
    </Button>
  );
};

export default CopyButton;
