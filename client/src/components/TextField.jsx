'use client';
import classNames from 'classnames';

export default function TextField({
  type = 'text',
  name,
  id = name,
  error = null,
  value = null,
  label = null,
  placeholder = undefined,
  required = false,
  autocomplete = undefined,
  customClassNames = '',
  onChange,
}) {
  const className = classNames(
    customClassNames,
    ' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
    {
      'bg-gray-700': error,
      'border-red-500': error,
      'text-red-900': error,
      'placeholder-red-500': error,
      'focus:ring-red-500': error,
      'focus:border-red-500': error,
    }
  );

  const handleInput = (event) => {
    const target = event.target;
    const value = target.value;
    onChange(value);
  };

  return (
    <div>
      {label && (
        <label htmlFor={id} className='block mb-2 font-medium'>
          {label}
        </label>
      )}

      <input
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        type={type}
        value={value}
        className={className}
        onChange={handleInput}
        onBlur={handleInput}
        onFocus={handleInput}
        onInput={handleInput}
      />

      {error && <p className='mt-0.5 text-sm text-red-500 fixed'>{error}</p>}
    </div>
  );
}
