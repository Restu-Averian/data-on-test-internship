import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardComp(props) {
    const navigate = useNavigate()
    const moveToCityNews = ()=>{
        navigate("/city-news")
    }
    const LogOut  = ()=>{
        localStorage.removeItem("login")
        navigate("/login")
    }

    return (
        <div className='text-white cursor-pointer' onClick={moveToCityNews}>
            
            <div className='overflow-hidden '>
                <img className=' hover:scale-110 duration-300 transition-all' src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80' alt=""/>

            </div>
            <p className='text-center text-2xl font-semibold'>City News</p>
            <button onClick={LogOut} className='px-4 py-2 border-red-500 text-red-500 rounded-md border'>LogOut</button>

        </div>
    );
}

export default CardComp;