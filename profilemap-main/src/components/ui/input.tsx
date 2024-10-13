import React from 'react';

interface InputProps {
  type?: string;  // Make sure the type prop is defined here
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;  // Optional className for styling
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}  // Use the type prop here
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export { Input };
