import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  options: Option[];
  placeholder?: string;
}

export default function SelectField({
  label,
  value,
  onChange,
  disabled = false,
  options,
  placeholder = "Todos"
}: SelectFieldProps) {
  return (
    <div className='flex flex-col'>
      <label className='text-white'>{label}</label>
      <select
        disabled={disabled}
        className='p-4 font-bold rounded-md cursor-pointer bg-amber-700/60 border border-yellow-500 text-white hover:border-red-800 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option className="text-gray-900 rounded-md" value="">
          {placeholder}
        </option>
        {options.map(option => (
          <option 
            className="text-gray-900 rounded-md" 
            key={option.value} 
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
