import React from 'react';
import './FormField.css';

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  required = false,
  placeholder
}) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormField; 