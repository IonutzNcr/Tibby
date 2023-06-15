import { useRef, useState } from "react"
import React  from 'react'

export const Modal = () => {

    const [isSend,setIsSend] = useState(false)
   
    const sendDataToConsole = ()=>{
       let prenom =  document.getElementById("prenom").value
       let email =  document.getElementById("email").value
        console.log(prenom,email)
       

    }


    return (
        <div className='modal'>
            <h1>Formulaire de contact</h1>
            <div>
                <label htmlFor="prenom">Prenom</label>
                <input id ="prenom" type="text" name="prenom" placeholder='prenom'  />
            </div>
            <div>
                <label htmlFor ='email'>Email</label>
                <input id="email" type="email" name="email" placeholder="example@gmail.com"  />
            </div>
            
            <button onClick={()=>sendDataToConsole()}>Send</button>

        </div>
    )
}
