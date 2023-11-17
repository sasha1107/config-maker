import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shadcn/tabs';
import { Code } from '@components';
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
          <Code copy>{content}</Code>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Install;
