import React from 'react'
import Button from './Button'

const Contact = () => (
  <form>
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
    <textarea placeholder="Your Message"></textarea>
    <Button text="Send Message" />
  </form>
)

export default Contact;
