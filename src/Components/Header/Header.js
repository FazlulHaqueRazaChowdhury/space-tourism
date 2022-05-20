import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/shared/icon-hamburger.svg'
const Header = () => {
    const [nav, showNav] = useState(false);
    const navData = [
        {
            id: '00',
            name: 'HOME',
            path: '/'

        },
        {
            id: '01',
            name: 'DESTINATION',
            path: '/destination'
        },
        {
            id: '02',
            name: 'CREW',
            path: '/crew'
        },
        {
            id: '03',
            name: 'TECHNOLOGY',
            path: '/technology'
        },
    ]
    const location = useLocation();

    return (
        <div id='header' className='overflow-hidden'>
            <div>
                <div className="grid grid-cols-2  items-center justify-between">
                    <div className="svg-part ml-[55px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                    </div>
                    <button className='buttonShow text-5xl text-white ml-auto p-3' onClick={() => {
                        showNav(!nav);
                    }}>{
                            !nav ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>

                        }</button>
                    <div className={
                        `nav-bar flex flex-col sm:flex-col md:flex-row lg:flex-row md:gap-x-[18px] lg:gap-x-[48px] lg:items-center  w-half pr-0 lg:pr-[200px] ease-linear duration-200 md:right-0  ${nav ? 'right-0' : 'right-[1000%] lg:right-0'}`
                    }>
                        <div className="margin-100"></div>

                        {
                            navData.map(nav =>
                                <div className={`nav-item ml-auto h-full flex items-center primary-font ${location.pathname == nav.path ? 'border-b-2' : ''}`}>

                                    <Link className='links'
                                        to={nav.path}>
                                        <span className='font-bold mx-2'>{nav.id}</span>
                                        {
                                            nav.name
                                        }
                                    </Link>

                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;