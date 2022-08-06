import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Footer.css'

const Footer = () => {

    const form = useRef();

    function sendEmail(e){
       
        e.preventDefault();
        emailjs.sendForm('service_rwuxix1', 'template_83jtbyo',form.current , 'LEE1E_gdBOcBWW-SL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  return (
    <>
        <div className="last"> 
        <div className="feedback">
            <div className="contact">
                <div className="left-size">
                    <div className="address detail">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">Surat, Gujarat</div>
                    </div>
                    <div className="phone detail">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one">+919727648750</div>
                    </div>
                    <div className="email detail">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">email</div>
                        <div className="text-one">divyatank1673@gmail.com</div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Contact Me</div>
                    
                    <form  ref={form} onSubmit={sendEmail}>
                        <div className="input-box">
                            <input type="text" name="name" placeholder="Enter your Name" />
                        </div>
                        <div className="input-box">
                            <input type="text" name="user_email" placeholder="Enter your Email" />
                        </div>
                        <div className="input-box message-box">
                            <textarea placeholder="Enter your message" name='message'></textarea>
                        </div>
                        <div className="button">
                            <input type="submit" name="" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    </div>      
    </>
  )
}

export default Footer