import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginView(props) {
    let [username,setUserName] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()
    function handleLogin(e){
        e.preventDefault();
        if(username===""||password===""){
            alert("Inputan masih kosong")
        }else{
            const data = {
                username:username,
                password:password
            }
            localStorage.setItem("login",JSON.stringify(data) )
            navigate("/")
        }
    }
    return (
        <div className='text-white mx-auto'>
            <h1>Login Page</h1>
            <div className='my-5'>
                <form onSubmit={handleLogin} className="flex flex-col space-y-5 text-[rgba(69,79,99)]">
                    <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='username'/>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
                    <button className='bg-[#665EFF] text-white px-4 py-2'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginView;