import React from 'react'
import './Css/Contact.css'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

  const notify = () => toast.success('Massege sent', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
    const notifyError = () =>toast.error('something went wrong! ', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yepu1o9', 'template_9nsnlen', e.target, 'ukBuoK-lGJjbOignD')
      .then((result) => {
          console.log(result.text);
          notify()
          e.target.reset()
      }, (error) => {
          console.log(error.text);
          notifyError()
      });
  };
  return (
    <div className='contact' id='contact'>
        <div className='contact-t' >
          <div className='contact-head'>
          
            <div className='c-text-1'>Contact</div>
            <div className='c-text-2'>Say Hello.</div>
            <div className='c-text-3'>Submit the form below so I can get back to you as soon as possible</div>
          </div>
      
        </div>
      <div className='contact-body'>
        <div className='c-form-div'>
          <form className='c-form' onSubmit={sendEmail}>
            <div className='control'>
              <lable for='name'>Name</lable>
              <input type='text' id='name' name='name'/>
            </div>
            <div className='control'>
              <lable for='company'>Company name</lable>
              <input type='text' id='company' name='company'/>
            </div>
            <div className='control'>
              <lable for='email'>Email</lable>
              <input type='email' id='email' name='email'/>
            </div>
            <div className='control'>
              <lable for='subject'>Subject</lable>
              <input type='text' id='subject' name='subject'/>
            </div>
            <div className='control'>
              <lable for='massege'>Massege</lable>
              <textarea type='text-area' id='massege' name='message'/>
            </div>
            <div className='control'>
              
              <input type='Submit' id='subject'/>
            </div>
          </form>
        </div>

        <div className='c-form-div'>
          <h1>Contact</h1>
          <div className='c-form-div-div'>
            <i className="fas fa-phone"></i>
            <p>0760285407</p>
          </div>
          <div className='c-form-div-div'>
            <i className="fas fa-envelope"></i>
            <p>pasanhasalankaubayasena@gmail.com</p>
          </div>
          <a href='https://www.linkedin.com/in/pasan-hasalanka-b7007b226/' target="_blank">
            <div className='c-form-div-div'>
              
                <i className="fab fa-linkedin"></i>
                <p>www.linkedin.com/in/pasan-hasalanka-b7007b226</p>
              
            </div>
          </a>
          <div className='c-form-div-div'>
            <i className="fas fa-home"></i>
            <p>Sadakalum,Kukulpane,Dorawaka</p>
          </div>
          
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact