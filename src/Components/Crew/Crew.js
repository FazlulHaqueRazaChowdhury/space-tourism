import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Crew.css';
import { motion } from 'framer-motion';
const Crew = () => {

    const [person, setPerson] = useState({
        id: 0,
        name: "Douglas Hurley",
        images: {
            png: "https://i.ibb.co/Vj2XwDY/image-douglas-hurley.png",
            webp: "./assets/crew/image-douglas-hurley.webp"
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    });

    const data = [
        {
            id: 0,
            name: "Douglas Hurley",
            images: {
                png: "https://i.ibb.co/Vj2XwDY/image-douglas-hurley.png",
                webp: "./assets/crew/image-douglas-hurley.webp"
            },
            role: "Commander",
            bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            id: 1,
            name: "Mark Shuttleworth",
            images: {
                png: "https://i.ibb.co/ZJ8JtMj/image-mark-shuttleworth.png",
                webp: "./assets/crew/image-mark-shuttleworth.webp"
            },
            role: "Mission Specialist",
            bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            id: 2,
            name: "Victor Glover",
            images: {
                png: "https://i.ibb.co/W38s5vx/image-victor-glover.png",
                webp: "./assets/crew/image-victor-glover.webp"
            },
            role: "Pilot",
            bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            id: 3,
            name: "Anousheh Ansari",
            images: {
                png: "https://i.ibb.co/qRRrXbr/image-anousheh-ansari.png",
                webp: "./assets/crew/image-anousheh-ansari.webp"
            },
            role: "Flight Engineer",
            bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ];
    let x = 0;
    const changeCrew = () => {

        if (x > data.length - 1) {
            x = 0;
            console.log(x)
        }
        else {
            console.log(x);
            console.log(data[x].name);
            setPerson(data[x]);
            x++;
        }

    }
    const handleChange = (id) => {
        setPerson(data[id]);

    }
    useEffect(() => {

        setInterval(changeCrew, 30000)

    })
    return (
        <div id='crew' className='flex flex-col items-center'>
            <Header />
            <div className="container mx-auto">
                <div className="title mt-[70px] lg:mt-[76px]">
                    <h1 className='primary-font primary-color text-4xl animate__animated animate__slideInLeft'>
                        <span className='mr-4 secondary-color-main'>02</span>

                        MEET YOUR CREW</h1>
                </div>
            </div>
            <div className="container" id='flex-end'>

                <div id="crewMain" className='h-[100%]'>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto justify-around justify-items-center items-center gap-x-[125px]">
                        <div className="text-part  animate__animated animate__slideInLeft  flex  flex-col-reverse md:flex-col lg:flex-col  items-center  lg:items-start mt-[20px] order-last lg:order-first">
                            <div className="texts flex flex-col items-center justify-center lg:items-start lg:justify-start lg:mb-[50px] ">
                                <h4 className='text-[26px] lg:text-[32px] secondary-color-main secondary-font'>{person.role}</h4>
                                <h1 className='text-[40px] lg:text-[56px] primary-color secondary-font my-[20px]'>{person.name}</h1>
                                <p className='text-justify text-[15px] lg:text-[18px] secondary-color prime-font lg:w-[440px]  mx-auto md:mx-auto lg:mx-0 md:text-center lg:text-left h-[100px]'>{person.bio}</p>
                            </div>

                            <div className="mb-[200px]">
                                {
                                    [...Array(data.length).keys()].map(single => <button className={
                                        `carousel 
                                        
                                        ${single === person.id ? 'primary-background' : 'secondary-background'
                                        }
                                        `

                                    }
                                        onClick={
                                            () => {
                                                handleChange(single)
                                            }
                                        }>


                                    </button>)
                                }
                            </div>
                        </div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="img-part sm:order-first  md:order-last  lg:order-last max-w-[325px] lg:max-w-[500px] relative   mt-auto   flex justify-center items-center">
                            <hr className='lined absolute  w-[100%] lg:hidden  bottom-0 z-10 h-[1px] text-[#979797]' />
                            <img src={person.images.png} className='animate__animated animate__fadeIn max-h-[625px]' alt="" />
                        </motion.div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Crew;