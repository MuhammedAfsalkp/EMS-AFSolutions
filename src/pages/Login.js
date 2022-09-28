import './Login.css'
import {useRef} from 'react'
function Login() {
    const emailRef= useRef();
    const passwordRef= useRef();

    const formSubmitHandler = e =>{
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div className="Login">
            <form onSubmit={formSubmitHandler}>
                <h2>Login</h2>
                <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input id="email"type="email" ref={emailRef}></input>
                </div>
                <div className='form-control'>
                <label htmlFor="password"  >Password</label>
                <input id="password" type="password" ref={passwordRef}></input>
                </div >
                <button className="button" type="submit">Login</button>
            </form>
        </div>

    );
}

export default Login;