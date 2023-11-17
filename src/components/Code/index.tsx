import type { ReactNode } from 'react';
import { CopyButton } from '@components';
import { useHover } from '@hooks';

type CodeProps = {
  children: ReactNode;
  copy?: boolean;
  compact?: boolean;
};

const Code = ({ children, copy = false, compact = false }: CodeProps) => {
  const padding = compact ? 'p-2' : 'p-4';
  const [hoverRef, isHovered] = useHover<HTMLPreElement>();
  return (
    <pre
      className={`bg-gray-800 rounded text-gray-100 text-sm ${padding}`}
      ref={hoverRef}
    >
      {copy && (
        <CopyButton
          copyText={children ? children.toString() : ''}
          visible={isHovered}
        />
      )}
      {children}
    </pre>
  );
};

export default Code;
