import React from 'react'

import "../Styles/Contact.css"
const Contact = () => {

  return (
     <section className='contact'>
        <h5>Contact Me</h5>
        <div className="contactleft">
            <div className="link">Linkend in</div>
            <div className="mail">Email</div>
        </div>
        <div className='contact-content'>
            <form action="">
                <div className='form'>
                    <input type="text" name="Firstname" placeholder='Firstname'/>
                    <input type="text" name="Lastname" placeholder='Lastname'/>
                </div>
                <input type="text" name="email" placeholder='Email' />
                <textarea placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </form>
        </div>
     </section>
  )
}

export default Contact