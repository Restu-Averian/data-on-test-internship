import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound(props) {
    let navigate = useNavigate()
    function backHome(){
        navigate("/")
    }
    return (
        <div className='text-center mx-auto'>
            <h1 className='font-semibold text-2xl text-white'>Halaman tidak ditemukan</h1>
            <p className='text-white'>Mohon diperiksa url yang dituju, sepertinya ada kesalahan terhadap url yang dituju</p>
            <button className='px-4 py-2 bg-[#665EFF] text-white' onClick={backHome}>Kembali</button>
        </div>
    );
}

export default NotFound;