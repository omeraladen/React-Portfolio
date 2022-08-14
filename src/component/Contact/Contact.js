import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetter/animate';
import emailjs from '@emailjs/browser'
import './contact.scss';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'gmail',
            'template_YeJhZkgb',
           
            'your-token'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <div className='container contact-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    idx={15}
                    strArray={['C' , 'o' , 'n','t','a','c','t',' ','M','e']}/>
                </h1>

                <p>I'm ambitious font-end developer looking for a role in 
                    established IT Company With the opportunity to
                     work with the latest technology's </p>
               <div className='contact-form'>

               <form  onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
               </div>
            </div>
            <Loader type='pacman' />
        </div>
    )
}

export default Contact;