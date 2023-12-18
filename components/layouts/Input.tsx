import React from 'react';

type Props = {
    type: string;
    value: number | null;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };



const CustomTextInput = ({ type, value, label, onChange }: Props) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        id={label}
        value={`${value}`}
        onChange={onChange}
        className="border rounded-md px-3 py-2 w-full"
      />
    </div>
  );
};

export default CustomTextInput;
