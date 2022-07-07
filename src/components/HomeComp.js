import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeComp(props) {
    const navigate = useNavigate()
    const [cityNews, setCityNews] = useState([])
    const [loading, setLoading] = useState(true)
    async function fetchData() {

        let response = await fetch("data.json")
        let data = await response.json()
        setLoading(false)
        console.log("data : ", data)
        setCityNews(data)
    }
    useEffect(
        () => {
            fetchData()
            if (!localStorage.getItem("login")) {
                navigate("/login")
            }
        }, []
    )

    const backBtn = () => {
        navigate("/")
    }
    return (
        <div className='text-white relative'>
            <i onClick={backBtn} className="cursor-pointer fa-solid fa-arrow-left"></i>
            <h1 className='text-2xl'>City News</h1>
            {/* items1 */}
            <div className='pt-10 pb-36'>
                <div className='relative '>
                    <div className='overflow-hidden'>
                        <img alt="" className='hover:scale-110 cursor-pointer duration-300 transition-all ' src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
                    </div>
                    <div className='bg-white rounded-lg absolute top-32 p-5 flex flex-col space-y-2  text-[rgba(69,79,99)] '>
                        <div className='flex space-x-2'>
                            <div className="rounded-md w-16 h-16 bg-center bg-cover bg-[url('https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=')]"></div>
                            <div>
                                <h2 className="text-[rgba(69,79,99)]">Andrée-Ann Labranche</h2>
                                <p className="text-[rgba(69,79,99,0.6)]">18 Nov</p>
                            </div>
                        </div>
                        <p className="text-[rgba(69,79,99)] text-sm">
                            We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.
                        </p>
                        <div className='flex justify-between items-center'>
                            <i class="fa-solid fa-share-nodes"></i>
                            <div className='flex space-x-4'>
                                <div className='flex items-center space-x-2'>
                                    <p>256</p>
                                    <i class="fa-regular fa-comment"></i>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <p>4k</p>
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {cityNews.map(
                        (news, index) => {
                            return (
                                <div className="relative my-10" key={news.id}>
                                    <div className={`${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} bg-white text-[rgb(69,79,99)] py-5 px-4  w-72 flex rounded-md`}>
                                        <div
                                            className={`${index % 2 === 0 ? 'left-0' : 'right-0'} rounded-lg w-24 h-24 bg-cover bg-center absolute top-10 bg-[url('https://static01.nyt.com/images/2018/07/22/travel/22Getaway-1/22Getaway-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale')]`}>
                                        </div>
                                        <div className={`${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} flex flex-col  space-x-2 w-48 `}>
                                            <div className="flex items-center justify-start">
                                                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} `}>
                                                    <p className="text-[rgba(69,79,99,0.6)]">{news.date}</p>
                                                    <h2 className=" text-[rgba(69,79,99)]">{news.user}</h2>
                                                </div>
                                                <div
                                                    className={`${index % 2 === 0 ? 'order-2 ml-5' : 'order-1 mr-5'}  order-1 rounded-md bg-center bg-cover w-14 h-14 bg-[url('https://media.istockphoto.com/photos/man-working-at-home-picture-id1354077790?b=1&k=20&m=1354077790&s=170667a&w=0&h=Du48Su-tddPpoRW8oyENY-HDH0di8VNoLdSSTnOiIGI=')]`}>
                                                </div>
                                            </div>
                                            <p>{news.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </ul>
            )}



            {/* items2 */}

            {/* <div className="relative my-10">
                <div className="bg-white text-[rgba(69,79,99)] py-5 px-4 ml-auto w-72 flex rounded-md">
                    <div
                        className="rounded-lg w-24 h-24 bg-cover bg-center absolute top-10 left-0 bg-[url('https://static01.nyt.com/images/2018/07/22/travel/22Getaway-1/22Getaway-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale')]">
                    </div>
                    <div className="flex flex-col  space-x-2 w-48 ml-auto">
                        <div className="flex items-center justify-between">
                            <div className=''>
                                <p className="text-[rgba(69,79,99,0.6)]">18 Nov</p>
                                <h2 className=" text-[rgba(69,79,99)]">Adrien Stone</h2>
                            </div>
                            <div
                                class=" rounded-md bg-center bg-cover w-14 h-14 bg-[url('https://media.istockphoto.com/photos/man-working-at-home-picture-id1354077790?b=1&k=20&m=1354077790&s=170667a&w=0&h=Du48Su-tddPpoRW8oyENY-HDH0di8VNoLdSSTnOiIGI=')]">
                            </div>
                        </div>
                        <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
                    </div>
                </div>
            </div> */}


            {/* items3 */}
            {/* <div className="relative ">
                <div className="bg-white text-[rgba(69,79,99)] py-5 px-4 mr-auto w-72 flex rounded-md">
                    <div className="flex flex-col  space-x-2 w-48 mr-auto">
                        <div className="flex items-center  justify-between">
                            <div
                                className=" rounded-md bg-center bg-cover w-14 h-14 bg-[url('https://media.istockphoto.com/photos/man-working-at-home-picture-id1354077790?b=1&k=20&m=1354077790&s=170667a&w=0&h=Du48Su-tddPpoRW8oyENY-HDH0di8VNoLdSSTnOiIGI=')]">
                            </div>
                            <div className=''>
                                <p className="text-[rgba(69,79,99,0.6)]">18 Nov</p>
                                <h2 className=" text-[rgba(69,79,99)]">Bernard Nolan</h2>
                            </div>
                        </div>
                        <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
                    </div>
                    <div
                        className="rounded-lg  w-24 h-24 bg-cover bg-center absolute top-10 right-0 bg-[url('https://static01.nyt.com/images/2018/07/22/travel/22Getaway-1/22Getaway-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale')]">
                    </div>
                </div>
            </div> */}
            {/* items2 */}
            {/* <div className="relative my-10">
                <div className="bg-white text-[rgba(69,79,99)] py-5 px-4 ml-auto w-72 flex rounded-md">
                    <div
                        className="rounded-lg w-24 h-24 bg-cover bg-center absolute top-10 left-0 bg-[url('https://static01.nyt.com/images/2018/07/22/travel/22Getaway-1/22Getaway-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale')]">
                    </div>
                    <div className="flex flex-col  space-x-2 w-48 ml-auto">
                        <div className="flex items-center justify-between">
                            <div className=''>
                                <p className="text-[rgba(69,79,99,0.6)]">18 Nov</p>
                                <h2 className=" text-[rgba(69,79,99)]">Adrien Stone</h2>
                            </div>
                            <div
                                class=" rounded-md bg-center bg-cover w-14 h-14 bg-[url('https://media.istockphoto.com/photos/man-working-at-home-picture-id1354077790?b=1&k=20&m=1354077790&s=170667a&w=0&h=Du48Su-tddPpoRW8oyENY-HDH0di8VNoLdSSTnOiIGI=')]">
                            </div>
                        </div>
                        <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
                    </div>
                </div>
            </div> */}


            {/* items3 */}
            {/* <div className="relative ">
                <div className="bg-white text-[rgba(69,79,99)] py-5 px-4 mr-auto w-72 flex rounded-md">
                    <div className="flex flex-col  space-x-2 w-48 mr-auto">
                        <div className="flex items-center  justify-between">
                            <div
                                className=" rounded-md bg-center bg-cover w-14 h-14 bg-[url('https://media.istockphoto.com/photos/man-working-at-home-picture-id1354077790?b=1&k=20&m=1354077790&s=170667a&w=0&h=Du48Su-tddPpoRW8oyENY-HDH0di8VNoLdSSTnOiIGI=')]">
                            </div>
                            <div className=''>
                                <p className="text-[rgba(69,79,99,0.6)]">18 Nov</p>
                                <h2 className=" text-[rgba(69,79,99)]">Bernard Nolan</h2>
                            </div>
                        </div>
                        <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
                    </div>
                    <div
                        className="rounded-lg  w-24 h-24 bg-cover bg-center absolute top-10 right-0 bg-[url('https://static01.nyt.com/images/2018/07/22/travel/22Getaway-1/22Getaway-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale')]">
                    </div>
                </div>
            </div> */}
            {/* items2 */}
            {/* <div className="relative my-10">
                <div class="bg-white text-[rgba(69,79,99)] py-5 px-4 ml-auto w-72 flex rounded-md">
                    <div
                        class="rounded-lg w-24 h-24 bg-cover bg-center absolute top-10 left-0 bg-[url('https://static01.nyt.com/images/2018/07/22/travel/22Getaway-1/22Getaway-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale')]">
                    </div>
                    <div class="flex flex-col  space-x-2 w-48 ml-auto">
                        <div class="flex items-center justify-between">
                            <div className=''>
                                <p className="text-[rgba(69,79,99,0.6)]">18 Nov</p>
                                <h2 className=" text-[rgba(69,79,99)]">Adrien Stone</h2>
                            </div>
                            <div
                                class=" rounded-md bg-center bg-cover w-14 h-14 bg-[url('https://media.istockphoto.com/photos/man-working-at-home-picture-id1354077790?b=1&k=20&m=1354077790&s=170667a&w=0&h=Du48Su-tddPpoRW8oyENY-HDH0di8VNoLdSSTnOiIGI=')]">
                            </div>
                        </div>
                        <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
                    </div>
                </div>
            </div> */}


            {/* items3 */}
            {/* <div class="relative ">
                <div class="bg-white text-[rgba(69,79,99)] py-5 px-4 mr-auto w-72 flex rounded-md">
                    <div class="flex flex-col  space-x-2 w-48 mr-auto">
                        <div class="flex items-center  justify-between">
                            <div
                                class=" rounded-md bg-center bg-cover w-14 h-14 bg-[url('https://media.istockphoto.com/photos/man-working-at-home-picture-id1354077790?b=1&k=20&m=1354077790&s=170667a&w=0&h=Du48Su-tddPpoRW8oyENY-HDH0di8VNoLdSSTnOiIGI=')]">
                            </div>
                            <div className=''>
                                <p className="text-[rgba(69,79,99,0.6)]">18 Nov</p>
                                <h2 className=" text-[rgba(69,79,99)]">Bernard Nolan</h2>
                            </div>
                        </div>
                        <p>If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.</p>
                    </div>
                    <div
                        class="rounded-lg  w-24 h-24 bg-cover bg-center absolute top-10 right-0 bg-[url('https://static01.nyt.com/images/2018/07/22/travel/22Getaway-1/22Getaway-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale')]">
                    </div>
                </div>
            </div> */}

            <button className='uppercase bg-[#665EFF] px-6 py-2 sticky bottom-10 right-10 rounded-md'>
                Post News
            </button>
        </div>
    );
}

export default HomeComp;