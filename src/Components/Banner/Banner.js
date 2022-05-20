import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='container mx-auto '>
            <div className="flex justify-center items-end height-80vh">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center gap-x-[200px] p-4 md:mt-[100px]">
                    <div className="text-part text-justify flex flex-col items-center md:items-center lg:items-start ">
                        <h6 className=' text-[16px] lg:text-[28px] secondary-color animate__animated animate__slideInLeft '>SO, YOU WANT TO TRAVEL TO SPACE</h6>
                        <h1 className='text-[80px] lg:text-[150px] secondary-font primary-color leading-[173px] 
                        animate__animated animate__slideInLeft animate_delay-5s'>SPACE</h1>
                        <p className='secondary-color text-justify prime-font leading-[32px] lg:w-[435px] animate__animated animate__slideInLeft animate_delay-10s text-[15px] lg:text-[18px]'>
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className="circle-part animate__animated animate__slideInRight animate_delay-5 flex justify-center items-center">

                        <div className="out-circle">
                            <button className="main-circle primary-background w-[200px] h-[200px] lg:w-[274px] lg:h-[274px]" onClick={() => {
                                navigate('/destination')
                            }}>
                                <h1 className='text-20px lg:text-[32px] secondary-font '>EXPLORE</h1>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;