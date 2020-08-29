import React from 'react'
const Input = (props) => {
    const {placeholder="Enter Placeholder text",value,onChange,type="text",name}=props;
    return (
                       <input
                        type={type}
                        placeholder={placeholder}
                        name={ name}
                        onChange={onChange}
                        value={value}
                        className="form-control"
                      />
    )
}

export default Input
