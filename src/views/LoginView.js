import React, { useState } from 'react';

function LoginView(props) {
    let [username,setUserName] = useState()
    let [password,setPassword] = useState()
    function handleLogin(e){
        e.preventDefault();
        const data = {
            username:username,
            password:password
        }
        localStorage.setItem("login",data)
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='username'/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='username'/>
                <button>Login</button>
            </form>
        </div>
    );
}

export default LoginView;