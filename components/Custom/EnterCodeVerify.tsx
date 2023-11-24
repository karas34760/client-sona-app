import { HStack, Input } from '@chakra-ui/react';
import React, { useRef, useState, useEffect, ChangeEvent } from 'react';
interface IProps {
  callback: any;
  isLoading: boolean;
}
export default function EnterCode({ callback, isLoading }: IProps) {
  const [code, setCode] = useState('');

  // Refs to control each digit input element
  const inputRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null), // todo remove after update
    useRef<HTMLInputElement | null>(null), // todo remove after update
  ];

  // Reset all inputs and clear state
  const resetCode = () => {
    inputRefs.forEach(ref => {
      if (ref && ref.current) {
        ref.current.value = '';
      }
    });
    inputRefs[0].current?.focus();
    setCode('');
  };

  // Call our callback when code = 6 chars
  useEffect(() => {
    if (code.length === 8) {
      if (typeof callback === 'function') {
        callback(code);
      }
    }
  }, [code]);

  // Handle input
  function handleInput(e: ChangeEvent<HTMLInputElement>, index: number) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    // Update code state with single digit
    const newCode = [...code];
    // Convert lowercase letters to uppercase
    if (/^[a-z]+$/.test(input.value)) {
      const uc = input.value.toUpperCase();
      newCode[index] = uc;
      inputRefs[index].current!!.value = uc;
    } else {
      newCode[index] = input.value;
    }
    setCode(newCode.join(''));

    input.select();

    if (input.value === '') {
      // If the value is deleted, select previous input, if exists
      if (previousInput) {
        previousInput.current?.focus();
      }
    } else if (nextInput) {
      // Select next input on entry, if exists
      nextInput.current?.select();
    }
  }

  // Select the contents on focus
  function handleFocus(e: ChangeEvent<HTMLInputElement>) {
    e.target.select();
  }

  // Handle backspace key
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    const input = e.target as HTMLInputElement;
    const previousInput = inputRefs[index - 1];
    // eslint-disable-next-line no-unused-vars
    const nextInput = inputRefs[index + 1];

    if ((e.keyCode === 8 || e.keyCode === 46) && input.value === '') {
      e.preventDefault();
      setCode(prevCode => prevCode.slice(0, index) + prevCode.slice(index + 1));
      if (previousInput) {
        previousInput.current?.focus();
      }
    }
  }

  // Capture pasted characters
  const handlePaste = (e: any) => {
    const pastedCode = e.clipboardData.getData('text');
    if (pastedCode.length === 8) {
      setCode(pastedCode);
      inputRefs.forEach((inputRef, index) => {
        inputRef.current!!.value = pastedCode.charAt(index);
      });
    }
  };

  // Clear button deletes all inputs and selects the first input for entry
  const ClearButton = () => {
    return (
      <button
        onClick={resetCode}
        className="text-2xl absolute right-[-30px] top-3"
      >
        Clear
      </button>
    );
  };

  return (
    <HStack>
      {[0, 1, 2, 3, 4, 5, 6, 7].map(index => (
        <Input
          width="50px"
          height="50px"
          textAlign="center"
          bg="primary.purple.400"
          color="white"
          key={index}
          type="text"
          maxLength={1}
          onChange={e => handleInput(e, index)}
          ref={inputRefs[index]}
          autoFocus={index === 0}
          onFocus={handleFocus}
          onKeyDown={e => handleKeyDown(e, index)}
          onPaste={handlePaste}
          disabled={isLoading}
        />
      ))}
      {code.length ? <ClearButton /> : <></>}
    </HStack>
  );
}
