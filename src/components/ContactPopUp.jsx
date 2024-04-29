import React, { useState, useContext } from 'react'
import '../css/ContactPopUp.css'
import { stateContext } from './context/context'

function ContactPopUp() {
    const [contactData, setContactData] = useState({ name: "", lastName: "", email: "", message: "" })
    const { setContactPopUp } = useContext(stateContext)
  
    const handleOnSubmitContactForm = (e) => {
        e.preventDefault()
        setContactPopUp(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    }

    return (
        <div className='pop-up-main'>
            <div className='pop-up-title-wrapper'>   
                <h3>Déjanos tu consulta a</h3>
                <p onClick={() => setContactPopUp(false)}>X</p>
            </div>
            <div>
                <h3 className='pop-up-sub-title'>Teléfono</h3>
                <p className='pop-up-data'>+54 9 11 2732 7352</p>
                <h3 className='pop-up-sub-title'>Email</h3>
                <p className='pop-up-data'>rescataloapp@gmail.com</p>
            </div>
            {/* <form onSubmit={handleOnSubmitContactForm} className='pop-up-form'>
                <input type="text" name="name" placeholder='Nombre' value={contactData['name']} onChange={handleInputChange} />
                <input type="text" name="lastName" placeholder='Apellido' value={contactData['lastName']} onChange={handleInputChange} />
                <input type="text" name="email" placeholder='E-mail' value={contactData['email']} onChange={handleInputChange} />
                <textarea 
                    maxLength={300} name="message" 
                    placeholder='Escribe tu mensaje aquí' 
                    value={contactData['message']} onChange={handleInputChange}>
                </textarea>
                <button type='submit'>Enviar</button>
            </form> */}
        </div>
  )
}

export default ContactPopUp