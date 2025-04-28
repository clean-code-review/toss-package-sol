import { ChangeEvent, useState } from 'react';
import { TextInput } from '@saul-atomrigs/design-system';

const PHONE_REGEX = /^01[016789]\d{8}$/;

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  name?: string;
  placeholder?: string;
  showError?: boolean;
}

export function PhoneNumberInput({
  value,
  onChange,
  label = '휴대폰 번호',
  name = 'phoneNumber',
  placeholder = '전화번호를 - 없이 입력하세요',
  showError = false
}: PhoneNumberInputProps) {
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    if (inputValue && !/^\d*$/.test(inputValue)) {
      return;
    }
    
    onChange(inputValue);
    
    validatePhoneNumber(inputValue);
  };

  const validatePhoneNumber = (phone: string) => {
    if (!phone) {
      setError('');
      return;
    }
    
    if (phone.length !== 11) {
      setError('전화번호는 11자리여야 합니다');
      return;
    }
    
    const isValidPhoneFormat = PHONE_REGEX.test(phone);
    setError(isValidPhoneFormat ? '' : '올바른 휴대폰 번호 형식이 아닙니다');
  };

  return (
    <TextInput
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      error={showError ? error : ''}
    />
  );
}