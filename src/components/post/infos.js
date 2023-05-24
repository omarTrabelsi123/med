import React from 'react'

function Infos() {
    const Days = ["Lundi", "Mardi", "Mecredi", "Jeudi", "Vendredi", "Samedi"]
    return (
        <div>
            <div className='frame p-5 gap-7'>
                <h1 className='text-xl font-bold'>Infos Pratique</h1>
                <p className='font-semibold text-base'>Opening Hours</p>
                {Days.map(item => (
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <p className=' font-semibold text-sm'>{item}</p>
                            <p className=' text-sm'>10h00 - 12h00,  3h00 - 18h30</p>
                        </div>
                        <hr width="100%" color='#CAD4E0' />
                    </div>
                ))}
                <p className='font-semibold text-base'>Other Infos</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" rx="15" fill="#080341" />
                            <path d="M14.9997 14.3333C16.4724 14.3333 17.6663 13.1394 17.6663 11.6667C17.6663 10.1939 16.4724 9 14.9997 9C13.5269 9 12.333 10.1939 12.333 11.6667C12.333 13.1394 13.5269 14.3333 14.9997 14.3333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11 21V19.6667C11 18.9594 11.281 18.2811 11.781 17.781C12.2811 17.281 12.9594 17 13.6667 17H16.3333C17.0406 17 17.7189 17.281 18.219 17.781C18.719 18.2811 19 18.9594 19 19.6667V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className=' text-sm'>Accepter les nouveaux patients avec et sans RDV</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_5624)">
                                <rect width="30" height="30" rx="15" fill="#080341" />
                                <path d="M11.4444 19V15.4444C11.4444 14.5015 11.819 13.5971 12.4858 12.9303C13.1526 12.2635 14.057 11.8889 15 11.8889C15.943 11.8889 16.8474 12.2635 17.5142 12.9303C18.181 13.5971 18.5556 14.5015 18.5556 15.4444V19M7 15.4444H7.88889M15 7.44444V8.33333M22.1111 15.4444H23M9.31111 9.75555L9.93333 10.3778M20.6889 9.75555L20.0667 10.3778M10.5556 19H19.4444C19.9354 19 20.3333 19.398 20.3333 19.8889V21.6667C20.3333 22.1576 19.9354 22.5556 19.4444 22.5556H10.5556C10.0646 22.5556 9.66667 22.1576 9.66667 21.6667V19.8889C9.66667 19.398 10.0646 19 10.5556 19Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_5624">
                                    <rect width="30" height="30" rx="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-sm'>Accepter les cas urgents</p>
                    </div>
                </div>
                <p className='font-semibold text-base'>Payment Methods</p>
                <div className='flex gap-5'>
                    <div className='payment-card'>
                        <svg width="42" height="50" className=' stroke-[#080341] hover:stroke-[#69BBE8]' viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.642 10.0587H8.02841C4.4919 10.0587 1.625 12.9256 1.625 16.4621V33.5379C1.625 37.0744 4.4919 39.9413 8.02841 39.9413H33.642C37.1786 39.9413 40.0455 37.0744 40.0455 33.5379V16.4621C40.0455 12.9256 37.1786 10.0587 33.642 10.0587Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.625 20.7316H40.0455" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.1631 31.4034H10.1844" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.7012 31.4034H22.9701" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className=' font-semibold text-base '>Credit Card</p>
                    </div>
                    <div className='payment-card'>
                        <svg width="33" height="44" viewBox="0 0 33 44" className=' stroke-[#080341] hover:stroke-[#69BBE8]' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.0036 14.4581C27.7719 14.6734 27.4685 14.7951 27.1523 14.7997C26.836 14.8043 26.5293 14.6914 26.2914 14.4829C23.9883 12.5389 21.0725 11.4711 18.0586 11.4679C15.5791 11.4679 13.0974 12.2846 13.0974 14.5594C13.0974 16.8611 15.7569 17.6284 18.8259 18.7781C24.1944 20.5691 28.6426 22.8191 28.6426 28.0864C28.6426 33.8126 24.1944 37.7501 16.9336 38.1844L16.2699 41.2534C16.2109 41.5354 16.0565 41.7886 15.8328 41.9701C15.609 42.1517 15.3295 42.2506 15.0414 42.2501H10.4649L10.2354 42.2254C9.90788 42.1521 9.62236 41.9529 9.44049 41.6708C9.25863 41.3887 9.19501 41.0465 9.26338 40.7179L9.97888 37.4689C7.223 36.7782 4.68853 35.3968 2.61463 33.4549V33.4301C2.5 33.3162 2.40904 33.1807 2.34696 33.0314C2.28489 32.8822 2.25293 32.7222 2.25293 32.5605C2.25293 32.3989 2.28489 32.2388 2.34696 32.0896C2.40904 31.9404 2.5 31.8049 2.61463 31.6909L5.17288 29.2114C5.65438 28.7614 6.40363 28.7614 6.88513 29.2114C9.22473 31.4216 12.334 32.6324 15.5521 32.5864C18.8776 32.5864 21.1006 31.1801 21.1006 28.9549C21.1006 26.7296 18.8506 26.1424 14.6071 24.5584C10.1071 22.9474 5.83663 20.6704 5.83663 15.3536C5.83663 9.16614 10.9756 6.14889 17.0619 5.86764L17.7009 2.72214C17.76 2.44265 17.9149 2.19259 18.1388 2.01513C18.3627 1.83767 18.6415 1.74395 18.9271 1.75014H23.4789L23.7354 1.77714C23.8932 1.81029 24.043 1.8743 24.176 1.9655C24.309 2.0567 24.4227 2.17329 24.5105 2.30857C24.5983 2.44385 24.6585 2.59515 24.6877 2.75378C24.7168 2.91241 24.7144 3.07523 24.6804 3.23289L23.9896 6.73614C26.3103 7.50633 28.4625 8.71298 30.3301 10.2911L30.3819 10.3406C30.8679 10.8536 30.8679 11.6209 30.3819 12.0799L28.0036 14.4581V14.4581Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className=' font-semibold text-base '>Cash</p>
                    </div>
                    <div className='payment-card'>
                        <svg className=' stroke-[#080341] hover:stroke-[#69BBE8]' width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.165 25.875C29.5143 25.875 33.04 22.3492 33.04 18C33.04 13.6508 29.5143 10.125 25.165 10.125C20.8158 10.125 17.29 13.6508 17.29 18C17.29 22.3492 20.8158 25.875 25.165 25.875Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M43.54 2.25H6.79004C3.89054 2.25 1.54004 4.6005 1.54004 7.5V28.5C1.54004 31.3995 3.89054 33.75 6.79004 33.75H43.54C46.4395 33.75 48.79 31.3995 48.79 28.5V7.5C48.79 4.6005 46.4395 2.25 43.54 2.25Z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M40.915 18H40.9413" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.41504 18H9.44129" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className=' font-semibold text-base '>Chéque bancaire</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infos