import React from 'react'

const InputComponent = ({
  id,
  type,
  labelName,
  placeholder,
  name,
  value,
  onChange,
  isDisabled = false,
  isVisible = true,
  errorMessage = '',
}) => {
  return (
    <div className='form-floating mb-3'>
      <input
        className='form-control'
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        aria-describedby='inputGroupPrepend'
      />
      <label htmlFor={name}>{labelName}</label>
      <div className='invalid-feedback' id={id + '-Error'} style={{ display: 'none' }}>{errorMessage}</div>
    </div>
  )
}

export default InputComponent
