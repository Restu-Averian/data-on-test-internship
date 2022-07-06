import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginView(props) {
    let [username,setUserName] = useState("")
    let [password,setPassword] = useState("")

    let [ErrorUsername,setErrorUsername] = useState("")
    let [ErrorPassword,setErrorPassword] = useState("")
    let navigate = useNavigate()
   
    function validate(field,fieldName,setErrorField){
        if(field===""){
            setErrorField(`${fieldName} masih kosong`)
        }else{
            setErrorField(``)
           
        }
    }
    function handleLogin(e){
        e.preventDefault();
        validate(username,"Username",setErrorUsername)
        validate(password,"Password",setErrorPassword)
        if(username!==""&&password!==""){
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
            <h1 className='text-center font-semibold text-2xl'>Login Page</h1>
            <div className='my-5'>
                <form onSubmit={handleLogin} className="flex flex-col space-y-5 text-[rgba(69,79,99)]">
                    <div className='flex flex-col w-full'>
                        <input className={`input`} value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='username'/>
                        <p className={`${ErrorUsername?'':'hidden'} text-red-500`}>{ErrorUsername}</p>
                    </div>
                    <div className='flex flex-col w-full'>
                        <input className={`input`} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
                        <p className={`${ErrorPassword?'':'hidden'} text-red-500`}>{ErrorPassword}</p>
                    </div>
                    <button className='bg-[#665EFF] text-white px-4 py-2'>Login</button>
                </form>
            </div>
            <em>
                *Bisa login dengan sembarang akun
            </em>
        </div>
    );
}

export default LoginView;