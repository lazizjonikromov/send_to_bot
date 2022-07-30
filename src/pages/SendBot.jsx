import React, { useEffect, useState } from 'react'

import axios from 'axios'

const SendBot = () => {
    const [name, setName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')


    let bot = {
        TOKEN: "5471127263:AAEjcNcEurDFNNf25J5LFcZZHX0gVq9mioc",
        chatID: ["143249567", '638726464']
    }

    const sendForm = (e) => {
        for (let index = 0; index < bot.chatID.length; index++) {
            const user = bot.chatID[index];
            
            e.preventDefault()
    
            axios.get(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${user}&text=${'Name: ' + name + '%0APhone number: %2B' + phone_number}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <>
            <form onSubmit={sendForm}>
                <div className="input">
                    <input
                        className='form-control'
                        type="text"
                        name='name'
                        placeholder='Ваше имя*'
                        required
                        autoComplete='off'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        className='form-control'
                        type="number"
                        min={1}
                        name='phone_number'
                        placeholder='Ваше телефон*'
                        required
                        autoComplete='off'
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                </div>

                <button className='btn myBtn d-flex align-items-center' type='submit'>Оставить Заявку</button>
            </form>
        </>
    )
}

export default SendBot