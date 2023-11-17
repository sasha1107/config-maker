import { useState, useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';

function useHover<T extends EventTarget>(): [
  MutableRefObject<T | null>,
  boolean
] {
  const [value, setValue] = useState<boolean>(false);
  const ref: MutableRefObject<T | null> = useRef<T | null>(null);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        // clean-up
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // ref가 변경될때만 실행
  );
  return [ref, value];
}

export default useHover;
