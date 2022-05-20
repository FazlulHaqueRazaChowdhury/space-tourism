import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Destination.css';
const Destination = () => {
    const [planets, setPlanets] = useState([]);
    const [planet, setPlanet] = useState({
        id: '1',
        name: "Moon",
        images: {
            png: "https://i.ibb.co/GMs3ZP6/image-moon.png",
            webp: "./assets/destination/image-moon.webp"
        },
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days"
    });

    const fakedata = [

        {


            id: '1',
            name: "Moon",
            images: {
                png: "https://i.ibb.co/GMs3ZP6/image-moon.png",
                webp: "./assets/destination/image-moon.webp"
            },
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            travel: "3 days"
        },
        {

            id: '2',
            name: "Mars",
            images: {
                png: "https://i.ibb.co/xGXvR3z/image-mars.png",
                webp: "./assets/destination/image-mars.webp"
            },
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            travel: "9 months"
        },
        {

            id: '3',
            name: "Europa",
            images: {
                png: "https://i.ibb.co/1vtxbdR/image-europa.png",
                webp: "./assets/destination/image-europa.webp"
            },
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            travel: '3 years'
        },
        {

            id: '4',
            name: "Titan",
            images: {
                png: "https://i.ibb.co/cyzHhTC/image-titan.png",
                webp: "./assets/destination/image-titan.webp"
            },
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            travel: "7 years"

        }
    ]
    const handleButton = (id) => {
        const found = fakedata.find(data => data.id == id);
        setPlanet(found);
    }
    console.log(fakedata);
    return (
        <div id='destination'>
            <Header />
            <div id="main" className='container mx-auto'>
                <div className="title text-20px lg:text-[28px] mt-[50px]">
                    <h1 className='primary-font primary-color text-4xl animate__animated animate__slideInLeft'>
                        <span className='mr-4 secondary-color-main'>01</span>

                        PICK YOUR DESTINATION</h1>
                </div>
                <div className="planet mt-[80px] container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-[140px]   w-[100%] lg:justify-items-end">
                        <div className="img-part-dest w-[100%] animate__animated animate__fadeIn">
                            <img src={planet.images.png} alt="" className='mx-auto w-[80%]' />
                        </div>
                        <div className="text-part animate__animated animate__slideInRight">
                            <div className="header">
                                <ul className='flex justify-center md:justify-center lg:justify-start gap-[35px]'>
                                    {
                                        fakedata.map(planete =>
                                            <li><button className={`text-2xl primary-font font-[100] primary-color pb-[13px] planetBtn ${planete.id == planet.id ? 'border-b-2' : ''}`} onClick={() => {
                                                handleButton(planete.id)
                                            }}>{planete.name.toLocaleUpperCase()}</button></li>
                                        )
                                    }
                                </ul>


                            </div>
                            <div className="detail-part">
                                <div className="header-part">
                                    <h1 className='text-8xl secondary-font primary-color my-[40px] text-center md:text-center lg:text-left'>
                                        {
                                            planet.name.toLocaleUpperCase()
                                        }
                                    </h1>
                                    <div >
                                        <p className='text-justify secondary-color prime-font w-[440px] mx-auto md:mx-auto lg:mx-0 md:text-center lg:text-left'>
                                            {
                                                planet.description
                                            }
                                        </p>
                                    </div>
                                    <hr className='my-[55px] text-[#979797] w-[440px] mx-auto md:mx-auto lg:mx-0' />
                                    <div className="info-part text-center md:text-center lg:text-left">
                                        <div className="flex gap-x-11 justify-center md:justify-center lg:justify-start">
                                            <div className="distance">
                                                <h4 className='primary-font secondary-color'>AVG. DISTANCE</h4>
                                                <h2 className='secondary-font text-3xl primary-color '>
                                                    {
                                                        planet.distance.toLocaleUpperCase()
                                                    }
                                                </h2>
                                            </div>
                                            <div className="travel ">
                                                <h4 className='primary-font secondary-color'>EST. TRAVEL TIME</h4>
                                                <h2 className='secondary-font text-3xl primary-color'>
                                                    {
                                                        planet?.travel.toLocaleUpperCase()
                                                    }
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;