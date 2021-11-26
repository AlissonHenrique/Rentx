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

import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  plalceholder?: string;
  error?: FieldError;
  icon: React.ComponentType<IconBaseProps>;
  handleShow?: () => void;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, icon: Icon, placeholder, handleShow, error = null, ...rest },
  ref,
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsfocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [eyes, setEyes] = useState(true);
  function handle() {
    setEyes(!eyes);
  }
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
        {eyes ? (
          <input
            id={name}
            name={name}
            ref={inputRef}
            type="password"
            {...rest}
            placeholder={placeholder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        ) : (
          <input
            id={name}
            name={name}
            ref={inputRef}
            type="text"
            {...rest}
            placeholder={placeholder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        )}
        <div className="icon-2" onClick={handle}>
          {eyes ? (
            <RiEyeLine size={24} color="#7A7A80" />
          ) : (
            <RiEyeOffLine size={24} color="#7A7A80" />
          )}
        </div>
      </Container>
      {!!error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  );
};

export const InputPassword = forwardRef(InputBase);
