import React, { useRef } from 'react'
import { getAuth} from "firebase/auth";
import './Register.css'

const Register = ({btnType, btnAction}) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const auth = getAuth();

  return (
    <div className='form_container'>
        <input ref={emailRef} type='text' placeholder='enter email'/>
        <input ref={passwordRef} type='text' placeholder='enter password' />
        <button onClick={()=>{
            btnAction(auth,emailRef.current.value, passwordRef.current.value)
        }}>{btnType}</button>
    </div>
  )
}

export default Register