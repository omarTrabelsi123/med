import React from 'react'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react';

function Sidebar() {
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const handleScroll = (event) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollMode = scrollTop > 500;

    return (
        
            <div className='static w-[250px] '>
                <div className={`w-[250px] ${scrollMode ? " fixed z-20 top-[100px]" : " z-20  absolute top-[350px]"}`}>
                    <div className="card  items-center">
                        <img
                            className="mb-3 h-[140px] w-[140px] rounded-full"
                            src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684739906/Ellipse_50_fnzf9n.svg"
                            alt="sideBarImage "
                        />
                        <div className="flex flex-row justify-center gap-2 items-center">
                            <h1 className="text-2xl font-bold text-[#080341]">
                                Jaden White
                            </h1>
                            <img src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684740258/united-states-of-america_xbihuy.svg" alt="usaflag" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 w-[206px] h-[36px]">
                            <p className="text-sm text-[#8E8EA9]">Chirurgien orthopédiste</p>
                            <p className="text-sm text-[#8E8EA9]">Los Angeles, California - USA</p>
                        </div>
                        <button className='btn w-full h-[40px] flex justify-center items-center gap-[10px]'>
                            <img className='w-[16px] h-[16px]' src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684742407/user-plus_senckx.svg" alt="logo" />
                            Follow user
                        </button>
                        <div className={`${scrollMode ? "hidden" : "flex flex-col items-start gap-5 mt-7 w-full"}`}>
                            <div className="flex flex-col items-start gap-5 w-full">
                                <h1 className="text-lg text-[#211C54] font-bold">
                                    Current Activities
                                </h1>
                                <div className="flex flex-col gap-3 w-full">
                                    <div className='flex flex-col gap-2 p-3 bg-[#F0F4F8] w-full rounded-xl'>
                                        <p className='font-bold text-sm text-[#080341]'>AChirurgien orthopédiste</p>
                                        <div className='flex flex-row items-center gap-1'>
                                            <img src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684746607/Frame_2069_ks6ikm.svg" alt="location" />
                                            <p className='text-[#8E8EA9]'>Random address</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    <div className='flex flex-col gap-2 p-3 bg-[#F0F4F8] w-full rounded-xl'>
                                        <p className='font-bold text-sm text-[#080341]'>AChirurgien orthopédiste</p>
                                        <div className='flex flex-row items-center gap-1'>
                                            <img src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684746607/Frame_2069_ks6ikm.svg" alt="location" />
                                            <p className='text-[#8E8EA9]'>Random address</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${scrollMode ? "hidden" : "flex flex-col items-start gap-5 mt-7 w-full "}`}>
                                <h1 className="text-lg text-[#211C54] font-bold">Contact & Media links</h1>
                                <div className="flex flex-col gap-2.5 w-full">
                                    <button className='contact-btn'>
                                        <img className="mr-2" src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684744933/Call_icon_opxczi.svg" alt="phone" />
                                        Phone number
                                    </button>
                                    <button className='contact-btn '>
                                        <img className="mr-2" src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684745462/brand-whatsapp_an7c95.svg" alt="social-media" />
                                        Whatsapp
                                    </button>
                                    <button className='contact-btn'>
                                        <img className="mr-2" src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684745679/mail_v0xlib.svg" alt="email" />
                                        Email Address
                                    </button>
                                    <button className='contact-btn'>
                                        <img className="mr-2" src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684745811/brand-facebook_xexg5m.svg" alt="facebook" />
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
    

    )
}

export default Sidebar
