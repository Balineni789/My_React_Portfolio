
import React from 'react'
import './Contacts.css'
import Theme from '../assets/Theme.svg'
import MailIcon from '../assets/Mail.svg'
import CallIcon from '../assets/Call.svg'
import LocationIcon from '../assets/Location.svg'
import githubIcon from '../assets/github.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {

const onSubmit = async (event) => {
  event.preventDefault();
  toast.info("Sending...");
  const formData = new FormData(event.target);

  formData.append("access_key", "0d67503e-7817-475e-9ace-490043458a9e");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully!");
      event.target.reset();
    } else {
      toast.error(`Error: ${data.message}`);
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again later.");
    console.error("Submit error:", error);
  }
};

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={Theme} alt='' className='Theme'/>
      </div>

      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's Talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me Anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={MailIcon} alt=''/> <p>Harshasaibalineni@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={githubIcon} alt='' className='git'/> <a href='https://github.com/Balineni789'>git-hub</a>
            </div>
            <div className="contact-detail">
              <img src={CallIcon} alt=''/> <p>91+7894565920</p>
            </div>
            <div className="contact-detail">
              <img src={LocationIcon} alt=''/> <p>India, Hyderabad-Madhapur</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor=''>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name' required/>
          <label htmlFor=''>Your Mail</label>
          <input type='email' placeholder='Enter Your e-mail' name='email' required/>
          <label htmlFor=''>Write Your Message</label>
          <textarea name='message' rows='8' placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  )
}

export default Contacts

