import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Technology.css';
const Technology = () => {
    const [animate, setAnimate] = useState(false);
    const [current, setCurrent] = useState({
        id: 0,
        name: "Launch vehicle",
        images: {
            portrait: "https://i.ibb.co/gVGL2SQ/image-launch-vehicle-portrait.jpg",
            landscape: "https://i.ibb.co/fGdNPp0/image-launch-vehicle-landscape.jpg"
        },
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"

    });
    const data = [
        {
            id: 0,
            name: "Launch vehicle",
            images: {
                portrait: "https://i.ibb.co/gVGL2SQ/image-launch-vehicle-portrait.jpg",
                landscape: "https://i.ibb.co/fGdNPp0/image-launch-vehicle-landscape.jpg"
            },
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            id: 1,
            name: "Spaceport",
            images: {
                portrait: "https://i.ibb.co/6RgW5Nq/image-spaceport-portrait.jpg",
                landscape: "https://i.ibb.co/Z64Y6sq/image-spaceport-landscape.jpg"
            },
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            id: 2,
            name: "Space capsule",
            images: {
                portrait: "https://i.ibb.co/f4f56js/image-space-capsule-portrait.jpg",
                landscape: "https://i.ibb.co/WvKG0jf/image-space-capsule-landscape.jpg"
            },
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ];
    let index = 0;
    const changeIt = () => {
        setAnimate(true);
        if (index > data.length - 1) {
            index = 0;

        }
        else {

            setCurrent(data[index]);
            index++;
        }
    }
    useEffect(() => {
        setInterval(changeIt, 30000)
    })
    const handleChange = (index) => {
        setCurrent(data[index]);

    }
    return (
        <div id='technology'>
            <Header />
            <div className="title text-20px lg:text-[28px] my-[76px] ">
                <h1 className='primary-font primary-color text-left text-4xl animate__animated animate__slideInLeft'>
                    <span className='mr-4 secondary-color-main '>03</span>

                    SPACE LAUNCH 101</h1>
            </div>
            <div className="container mx-auto">


            </div>
            <div className="technology-main-part">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center  gap-y-[40px]">
                    <div className="text-part mx-auto flex flex-col md:flex-col lg:flex-row gap-x-[80px] items-center justify-center animate__animated animate__slideInLeft order-last md:order-last lg:order-first">
                        <div className="button-part flex flex-row md:flex-row lg:flex-col gap-x-[32px] gap-y-[32px]">
                            {
                                [...Array(data.length).keys()].map((single, index) => <button key={index} onClick={() => {
                                    handleChange(single);
                                    setAnimate(true);
                                }} className={`tech-button secondary-font text-[32px] ${current.id === single ? 'primary-background ' : 'primary-color'}`}>{single + 1}</button>)
                            }
                        </div>
                        <div className="info-part text-center lg:text-left">
                            <h4 className='text-[14px] lg:text-[16px] secondary-color primary-font font-light mt-5'>THE TERMINOLOGY…</h4>
                            <h4 className='text-[40px] lg:text-[56px] secondary-font primary-color my-[17px]'>{current.name.toLocaleUpperCase()}</h4>
                            <p className='text-[16px] lg:text-[18px] prime-font secondary-color lg:w-[444px] leading-[32px]'>{current.description}</p>
                        </div>
                    </div>
                    <div className="img-part-tech animate__animated animate__fadeIn order-first md:order-first lg:order-last">
                        <img src={current.images.portrait} onAnimationEnd={() => {
                            setAnimate(false);
                        }} className={`w-[100%] lg:w-[550px] ml-auto ${animate ? 'animate__animated animate__fadeIn' : ''}`} alt=""


                        />
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Technology;