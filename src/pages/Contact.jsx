import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className='container py-5'>
      <h1 className='text-center mb-4'>Contact Me</h1>
      <h4 className='text-left mb-4'>
        <strong>Get in Touch</strong>
      </h4>
      <div className='row'>
        <div className='col-md-6'>
          <p>
            Please feel free to contact me at{' '}
            <a href='mailto:vaughanknouse@gmail.com'>vaughanknouse@gmail.com</a>{' '}
            if you have any questions or comments.
          </p>
        </div>
        <div className='col-md-6'>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <textarea
                className='form-control'
                id='message'
                name='message'
                rows='5'
                value={formData.message}
                onChange={handleChange}
                required></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
