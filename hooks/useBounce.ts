import { ChangeEvent, MutableRefObject, useRef, useState } from 'react';

interface useBounceProps {
  delay: number;
}

export interface stateBounceProps {
  text?: string;
  debounce?: string;
}

export default function useBounce({ delay }: useBounceProps) {
  const [value, setValue] = useState<stateBounceProps>({
    debounce: '',
    text: '',
  });
  const debounceRef: MutableRefObject<NodeJS.Timeout | null> = useRef(null);

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setValue(prev => ({
      ...prev,
      text: value,
    }));

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setValue(prev => ({
        ...prev,
        debounce: value,
      }));
    }, delay);
  };

  return {
    debounceValue: value,
    setDebounceValue: setValue,
    debounceOnChange: inputChange,
  };
}
