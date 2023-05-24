import React from 'react'
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';



function Navbar() {
    const [open,setOpen]=useState(false);
    
    return (
        <>
        <div className='h-[62px] relative'>
        <div className='h-[62px] w-full z-[9000] fixed bg-white flex items-center justify-center'>
                <div>
                    <svg width="184" height="34" viewBox="0 0 184 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_5919)">
                            <path d="M48.6583 14.8445V26.5721H45.858V14.8445C45.858 12.7017 46.4298 11.0672 47.5735 9.94089C48.7172 8.8146 50.1957 8.25145 52.0091 8.25145C54.4625 8.25145 56.1834 9.24047 57.1718 11.2185H57.228C57.6621 10.2933 58.3723 9.52547 59.261 9.02084C60.219 8.49321 61.2993 8.22781 62.3928 8.25145C64.2235 8.25145 65.7067 8.8146 66.8424 9.94089C67.9781 11.0672 68.5459 12.7017 68.5459 14.8445V26.5721H65.7415V14.8445C65.7415 13.5267 65.4168 12.5283 64.7672 11.8493C64.1177 11.1703 63.2526 10.8355 62.1718 10.8449C61.6932 10.8263 61.2161 10.9082 60.7711 11.0854C60.3262 11.2625 59.9233 11.531 59.5884 11.8734C58.9295 12.5604 58.6001 13.5541 58.6001 14.8545V26.5821H55.7998V14.8445C55.7998 13.5441 55.475 12.5504 54.8255 11.8633C54.1759 11.1763 53.3108 10.8335 52.23 10.8348C51.1694 10.8348 50.3089 11.1696 49.6487 11.8392C48.9884 12.5089 48.6583 13.5106 48.6583 14.8445Z" fill="#1C1C3A" />
                            <path d="M85.3237 20.7484H73.5238V20.8047C73.6801 21.8603 74.2175 22.8221 75.0345 23.5086C75.838 24.1782 76.8545 24.513 78.0839 24.513C79.8423 24.513 81.1052 23.9365 81.8726 22.7834H84.7573C84.2462 24.0426 83.3469 25.1059 82.19 25.8188C80.9557 26.5742 79.5307 26.9598 78.0839 26.9296C75.9411 26.9296 74.1874 26.26 72.8227 24.9208C71.458 23.5816 70.773 21.8707 70.7677 19.7882C70.7677 17.7191 71.4493 16.0116 72.8127 14.6657C74.176 13.3198 75.9297 12.6468 78.0738 12.6468C80.1979 12.6468 81.9388 13.3198 83.2968 14.6657C84.6548 16.0116 85.3325 17.7191 85.3298 19.7882L85.3237 20.7484ZM80.9847 15.9554C80.138 15.3477 79.1155 15.0344 78.0738 15.0634C77.0357 15.0332 76.0167 15.3468 75.1751 15.9554C74.3821 16.5486 73.8232 17.402 73.5961 18.366V18.4142H82.5777V18.3599C82.3484 17.3949 81.7839 16.5427 80.9847 15.9554Z" fill="#1C1C3A" />
                            <path d="M101.473 7.07226V19.6777C101.473 21.8567 100.803 23.6097 99.4639 24.9369C98.1247 26.2641 96.375 26.9276 94.2148 26.9276C92.072 26.9276 90.319 26.258 88.9556 24.9188C87.5923 23.5796 86.9127 21.8694 86.9167 19.7882C86.9167 17.5906 87.5896 15.8496 88.9356 14.5652C89.5725 13.9424 90.3264 13.4519 91.1539 13.1219C91.9814 12.7919 92.866 12.6291 93.7568 12.6428C94.8051 12.6243 95.8412 12.8695 96.7701 13.3559C97.6174 13.8023 98.3219 14.4783 98.803 15.3065H98.8592V7.07025L101.473 7.07226ZM94.2148 24.511C95.5889 24.511 96.7058 24.0671 97.5656 23.1791C98.4253 22.2912 98.8559 21.1609 98.8572 19.7882C98.8572 18.4142 98.4267 17.2832 97.5656 16.3953C96.7044 15.5074 95.5875 15.0634 94.2148 15.0634C92.822 15.0634 91.6957 15.5027 90.8359 16.3812C89.9761 17.2598 89.5463 18.3981 89.5463 19.7963C89.5463 21.1864 89.9761 22.3247 90.8359 23.2113C91.6957 24.0979 92.822 24.5311 94.2148 24.511Z" fill="#1C1C3A" />
                            <path d="M105.949 11.0819C105.711 11.0845 105.475 11.0383 105.255 10.946C105.036 10.8537 104.838 10.7174 104.673 10.5455C104.499 10.3764 104.362 10.1735 104.27 9.94924C104.177 9.725 104.132 9.48423 104.137 9.24179C104.134 8.88103 104.24 8.52776 104.439 8.22742C104.639 7.92707 104.924 7.69339 105.258 7.55643C105.592 7.41947 105.959 7.3855 106.312 7.45887C106.666 7.53225 106.989 7.70963 107.24 7.96819C107.409 8.1353 107.541 8.33451 107.631 8.55398C107.721 8.77346 107.766 9.00872 107.763 9.24581C107.767 9.48698 107.723 9.72657 107.633 9.95047C107.544 10.1744 107.41 10.3781 107.24 10.5495C107.074 10.7233 106.873 10.8604 106.651 10.9521C106.428 11.0438 106.189 11.088 105.949 11.0819Z" fill="#1C1C3A" />
                            <path d="M107.268 13.0043H104.659V26.5721H107.268V13.0043Z" fill="#1C1C3A" />
                            <path d="M121.302 21.1342V21.4275C121.302 23.2207 120.812 24.5847 119.833 25.5195C118.855 26.4543 117.531 26.923 115.864 26.9257C114.199 26.9257 112.877 26.4569 111.897 25.5195C110.916 24.582 110.426 23.218 110.426 21.4275V8.37H113.038V13.0044H120.508V15.4009H113.036V21.4275C113.036 22.4721 113.287 23.2455 113.791 23.7477C114.294 24.2499 114.985 24.5017 115.864 24.503C117.77 24.5084 118.723 23.4832 118.723 21.4275V21.1261L121.302 21.1342Z" fill="#058ED9" />
                            <path d="M135.282 18.7436H132.7V18.5789C132.7 16.2366 131.62 15.0648 129.46 15.0634C127.3 15.0621 126.22 16.2339 126.22 18.5789V26.5721H123.608V18.5789C123.608 16.6384 124.134 15.1652 125.187 14.1595C126.24 13.1537 127.663 12.6501 129.458 12.6488C131.251 12.6488 132.67 13.1524 133.715 14.1595C134.759 15.1666 135.282 16.6518 135.282 18.6151V18.7436Z" fill="#058ED9" />
                            <path d="M149.577 14.6657C150.94 16.0116 151.622 17.7191 151.624 19.7882C151.625 21.8573 150.943 23.5642 149.577 24.9088C148.212 26.248 146.459 26.9176 144.318 26.9176C142.176 26.9176 140.423 26.248 139.058 24.9088C137.688 23.5655 137.003 21.8587 137.003 19.7882C137.003 17.7178 137.686 16.0103 139.05 14.6657C140.414 13.3198 142.167 12.6468 144.309 12.6468C146.452 12.6468 148.208 13.3198 149.577 14.6657ZM140.939 23.1932C141.8 24.0704 142.926 24.5097 144.318 24.511C145.709 24.5123 146.835 24.0731 147.696 23.1932C148.556 22.3133 148.986 21.175 148.986 19.7782C148.986 18.3814 148.556 17.243 147.696 16.3631C146.835 15.486 145.709 15.0467 144.318 15.0453C142.926 15.044 141.8 15.4833 140.939 16.3631C140.079 17.243 139.649 18.3814 139.649 19.7782C139.649 21.175 140.079 22.3133 140.939 23.1932Z" fill="#058ED9" />
                            <path d="M164.559 20.0895V13.0043H167.17V20.0895C167.17 22.2872 166.568 23.9766 165.362 25.1578C164.157 26.339 162.527 26.9289 160.473 26.9276C158.422 26.9276 156.793 26.3417 155.585 25.1699C154.377 23.998 153.775 22.3046 153.777 20.0895V13.0043H156.389V20.0895C156.389 21.5359 156.755 22.6347 157.488 23.386C158.22 24.1373 159.218 24.5123 160.481 24.511C161.745 24.511 162.743 24.136 163.476 23.386C164.208 22.6361 164.569 21.5372 164.559 20.0895Z" fill="#058ED9" />
                            <path d="M177.851 26.5721H174.695L169.036 13.0043H171.893L176.312 24.1474H176.336L180.756 13.0043H183.53L177.851 26.5721Z" fill="#058ED9" />
                            <path d="M26.3356 26.7332L24.5176 28.5512C23.9111 29.1584 23.1908 29.6401 22.398 29.9687C21.6052 30.2973 20.7554 30.4664 19.8972 30.4664C19.039 30.4664 18.1893 30.2973 17.3965 29.9687C16.6037 29.6401 15.8834 29.1584 15.2769 28.5512L5.39137 18.6597C3.87857 17.1499 2.96258 15.1442 2.81227 13.0122C2.66196 10.8802 3.28747 8.76576 4.57347 7.05868C5.85947 5.3516 7.71926 4.16697 9.80996 3.72322C11.9007 3.27946 14.0813 3.60648 15.9499 4.644C16.4573 3.8477 17.0413 3.1029 17.6935 2.42021C15.463 1.06855 12.8435 0.504355 10.2543 0.817941C7.66511 1.13153 5.25601 2.30476 3.41266 4.14983C2.32936 5.23192 1.46997 6.51692 0.883627 7.93136C0.297283 9.34581 -0.0045166 10.862 -0.0045166 12.3931C-0.0045166 13.9243 0.297283 15.4404 0.883627 16.8549C1.46997 18.2693 2.32936 19.5543 3.41266 20.6364L13.3042 30.5299C15.0537 32.2791 17.4263 33.2618 19.9003 33.2618C22.3742 33.2618 24.7468 32.2791 26.4963 30.5299L30.3412 26.683C29.0149 26.887 27.6666 26.9039 26.3356 26.7332Z" fill="#1C1C3A" />
                            <path d="M28.1459 3.53469C29.8988 3.53469 31.6123 4.05458 33.0697 5.02859C34.527 6.00261 35.6628 7.38698 36.3332 9.00659C37.0036 10.6262 37.1786 12.4083 36.8361 14.1273C36.4935 15.8464 35.6488 17.4253 34.4088 18.6642C33.1687 19.9031 31.5891 20.7464 29.8697 21.0874C28.1503 21.4284 26.3684 21.2518 24.7494 20.5799C23.1304 19.908 21.747 18.771 20.7744 17.3128C19.8017 15.8545 19.2833 14.1405 19.2849 12.3877C19.2876 10.0387 20.2217 7.78675 21.8825 6.12562C23.5432 4.4645 25.795 3.52984 28.1439 3.52665M28.1439 0.728333C25.8395 0.728333 23.5868 1.41167 21.6708 2.69193C19.7548 3.97219 18.2614 5.79187 17.3795 7.92087C16.4977 10.0499 16.2669 12.3925 16.7165 14.6527C17.1661 16.9128 18.2757 18.9889 19.9052 20.6183C21.5347 22.2478 23.6107 23.3575 25.8709 23.807C28.131 24.2566 30.4737 24.0259 32.6027 23.144C34.7317 22.2621 36.5513 20.7688 37.8316 18.8527C39.1119 16.9367 39.7952 14.684 39.7952 12.3796C39.7952 9.28951 38.5677 6.32596 36.3826 4.14092C34.1976 1.95588 31.234 0.728333 28.1439 0.728333Z" fill="#058ED9" />
                            <path d="M18.9655 23.5548C18.2442 22.96 17.5815 22.2974 16.9868 21.5761L14.6264 23.9365L16.6051 25.9152L18.9655 23.5548Z" fill="#058ED9" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_5919">
                                <rect width="183.51" height="32.5272" fill="white" transform="translate(0 0.736389)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-row gap-2 items-center ml-5  hover:text-[#058ED9] hover:mb-0.5  hover:font-bold cursor-pointer max-sm:hidden ">
                    <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:fill-[#CDE8F7]"
                    >
                        <path
                            d="M4.625 13.25V7H8.375V13.25M0.875 5.125L6.5 0.75L12.125 5.125V12C12.125 12.3315 11.9933 12.6495 11.7589 12.8839C11.5245 13.1183 11.2065 13.25 10.875 13.25H2.125C1.79348 13.25 1.47554 13.1183 1.24112 12.8839C1.0067 12.6495 0.875 12.3315 0.875 12V5.125Z"
                            stroke="#080341"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="font-semibold text-[14px]">Home</span>
                </div>
                <div className=''>
                    <input
                        className={`focus:outline-none bg-slate-100 rounded-full w-[42rem] p-2.5 ${<FiSearch /> && "pl-10 "}`}
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-outline"
                        onClick={() => setOpen(!open)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4_690)">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.6001 9H20.4001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.6001 15H20.4001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.5002 3C9.8155 5.69961 8.92236 8.81787 8.92236 12C8.92236 15.1821 9.8155 18.3004 11.5002 21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5 3C14.1847 5.69961 15.0778 8.81787 15.0778 12C15.0778 15.1821 14.1847 18.3004 12.5 21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4_690">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    {open && (
                      <div className="absolute z-10 w-28 mt-2 bg-white rounded-md shadow-lg">
                        <ul>
                            <li>français</li>
                            <li>english</li>
                        </ul>
                           
                       
                      </div>
                    )}
                </div>

            </div>
        </div>
          

        </>
    )
}

export default Navbar