import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = ({onSubmition}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cuwey2t', 'template_68r2r1y', form.current, '7eRpikTK5vlNI14kV')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
          onSubmition();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <form ref={form} onSubmit={sendEmail}>

      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input className='send-btn' type="submit" value="Send" />

    </form>
  );
};

export default Form;