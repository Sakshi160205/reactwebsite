import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        label="Name"
      />
      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
        label="Email"
      />
      <Button label="Submit" />
    </form>
  )
}

export default Form;
