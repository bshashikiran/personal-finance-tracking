import React from 'react'

const InputComponent = ({
    id,
    type,
    labelName,
    placeholder,
    name,
    value,
    onChange,
    isDisabled=false,
    isVisible=true,
    errorMessage=''
}) => {
  return (
    <div className='pft_col'>
        <div className='pft_label'>{labelName}</div>
            <div className='pft_input'>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    id={id}
                    onChange={onChange}
                    value={value}
                />
                <div className='pft_error' id={id+'-Error'} style={{display: 'none'}}>{errorMessage}</div>
            </div>
    </div>
  )
}

export default InputComponent
