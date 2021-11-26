import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useRef,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';
import {
  Container,
  ErrorMessage,
} from '../../../styles/components/Form/input.module';
import { IconBaseProps } from 'react-icons';

import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  plalceholder?: string;
  error?: FieldError;
  icon: React.ComponentType<IconBaseProps>;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  name,
  icon: Icon,
  placeholder,
  error = null,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsfocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsfocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsfocused(false);
    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);
  return (
    <>
      <Container isFilled={isFilled} isFocused={isFocused} isError={error}>
        <div className="icon">
          <Icon size={24} color="#7A7A80" />
        </div>
        <input
          id={name}
          name={name}
          ref={inputRef}
          {...rest}
          placeholder={placeholder}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </Container>
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  );
};

export const Input = forwardRef(InputBase);
