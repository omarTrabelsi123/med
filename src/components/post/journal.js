import React from 'react'
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { useState } from 'react';
import Like from './like';

function Journal() {

    const initialDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptateoccaecat cupidatat non proident, sunt in culpa qui officia deserun mollit anim id est laborum";
    const [description, setDescription] = useState(initialDescription);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const handleSeeMoreClick = () => {
        setShowFullDescription(true);
    };
    const handleSeeLessClick = () => {
        setShowFullDescription(false);
    };
    return (

        <div className='flex flex-col gap-[30px]'>
            <div className='frame'>
                <div className='p-5'>
                    <div className='flex items-center justify-between pb-5' >
                        <div className='flex gap-4 justify-center items-center'>
                            <img className='w-10 h-10' src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684739906/Ellipse_50_fnzf9n.svg" alt="logo" />
                            <div className='flex flex-col'>
                                <p className='text-[#080341] text-sm font-bold '>Jaden White</p>
                                <p className="text-sm text-[#8E8EA9]">Chirurgien orthopédiste</p>
                            </div>
                        </div>
                        <p>2h ago</p>
                    </div>
                    <div >
                        <span className=' text-[#080341] text-justify'>
                            {showFullDescription ? description : description.substr(0, 229)}
                        </span>
                        {!showFullDescription && (
                            <button onClick={handleSeeMoreClick} className={"text-[#8E8EA9] "}> ...Read more </button>
                        )}
                        {showFullDescription && (

                            <button onClick={handleSeeLessClick} className={"text-[#8E8EA9]"}> Read Less </button>
                        )}
                    </div>
                </div>
                <img className='w-full' src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684833731/Rectangle_5_vbdtx0.svg" alt="img" />
                <Like  />
            </div>

            <div className='frame'>
                <div className='p-5'>
                    <div className='flex items-center justify-between pb-5' >
                        <div className='flex gap-4 justify-center items-center'>
                            <img className='w-10 h-10' src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684739906/Ellipse_50_fnzf9n.svg" alt="logo" />
                            <div className='flex flex-col'>
                                <p className='text-[#080341] text-sm font-bold '>Jaden White</p>
                                <p className="text-sm text-[#8E8EA9]">Chirurgien orthopédiste</p>
                            </div>
                        </div>
                        <p>2h ago</p>
                    </div>
                    <div >
                        <span className=' text-[#080341] text-justify'>
                            {showFullDescription ? description : description.substr(0, 229)}
                        </span>
                        {!showFullDescription && (
                            <button onClick={handleSeeMoreClick} className={"text-[#8E8EA9] "}> ...Read more </button>
                        )}
                        {showFullDescription && (

                            <button onClick={handleSeeLessClick} className={"text-[#8E8EA9]"}> Read Less </button>
                        )}
                    </div>
                </div>
                <ImgComparisonSlider className='slider-example-split-line rounded-xl'>
                    <img slot="first" className='h-[396px]' src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
                    <img slot="second" className='h-[396px] ' src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
                    <svg slot="handle" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="white" fill-opacity="0.1" />
                        <g filter="url(#filter0_b_1_2323)">
                            <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="#080341" fill-opacity="0.4" />
                        </g>
                        <g filter="url(#filter1_b_1_2323)">
                            <g clip-path="url(#clip0_1_2323)">
                                <path d="M16.5 20L11.5 25L16.5 30" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                        <g filter="url(#filter2_b_1_2323)">
                            <g clip-path="url(#clip1_1_2323)">
                                <path d="M32.5 20L37.5 25L32.5 30" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_b_1_2323" x="-40" y="-40" width="130" height="130" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_2323" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_2323" result="shape" />
                            </filter>
                            <filter id="filter1_b_1_2323" x="-96" y="-85" width="220" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_2323" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_2323" result="shape" />
                            </filter>
                            <filter id="filter2_b_1_2323" x="-75" y="-85" width="220" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_2323" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_2323" result="shape" />
                            </filter>
                            <clipPath id="clip0_1_2323">
                                <rect x="4" y="15" width="20" height="20" rx="10" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1_2323">
                                <rect width="20" height="20" rx="10" transform="matrix(-1 0 0 1 45 15)" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </ImgComparisonSlider>
                <Like  />
            </div>
            

        </div>
    )
}

export default Journal
