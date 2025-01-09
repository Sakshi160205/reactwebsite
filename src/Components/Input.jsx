import React from 'react'

const Input = ({ label, value, onChange, name }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} name={name} />
    </div>
  )
}

export default Input;
