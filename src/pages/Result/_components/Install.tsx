import { useState } from 'react';
import { Button } from '@shadcn/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shadcn/tabs';
import { Copy, CopyCheck } from 'lucide-react';

const data = [
  {
    tool: 'npm',
    content: 'npm install --save-dev --save-exact prettier',
  },
  {
    tool: 'yarn',
    content: 'yarn add --dev --exact prettier',
  },
  {
    tool: 'pnpm',
    content: 'pnpm add --save-dev --save-exact prettier',
  },
];
const Install = () => {
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const handleClickCopyButton = async (code: string) => {
    try {
      setCopyState('copied');
      await navigator.clipboard.writeText(code);
      setTimeout(() => {
        setCopyState('idle');
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Tabs defaultValue={data[0].tool} className='w-[400px]'>
      <TabsList>
        {data.map(({ tool }) => (
          <TabsTrigger key={tool} value={tool}>
            {tool}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map(({ tool, content }) => (
        <TabsContent key={tool} value={tool} className='flex'>
          <pre>{content}</pre>
          <Button
            variant='outline'
            size='icon'
            onClick={() => handleClickCopyButton(content)}
          >
            {copyState === 'idle' ? (
              <Copy className='h-4 w-4' />
            ) : (
              <CopyCheck className='h-4 w-4' />
            )}
          </Button>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Install;
