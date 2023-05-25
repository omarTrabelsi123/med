import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ImgComparisonSlider } from '@img-comparison-slider/react';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const galerie = [{ URL: 'https://health.ucdavis.edu/famcommed/images/Images/Main%20Images/How-Are-Clinic-Works.jpg', typeof: 'photo' },
    { URL: 'https://healthwaymedical.com/wp-content/uploads/2022/01/Boon-Lay-Corporation-Clinic-1024x681.jpg', typeof: 'photo' },
    { URL: 'https://media.istockphoto.com/id/1475691338/video/handshake-of-doctor-and-patient-at-meeting-in-clinic-4k-movie-slow-motion.mp4?s=mp4-640x640-is&k=20&c=ag8HEtKLJBZ3GRLst44pFQ5wYWw2y8DXFeJ0YbArIdI=', typeof: 'video' },
    { URL1: 'https://health.ucdavis.edu/famcommed/images/Images/Main%20Images/How-Are-Clinic-Works.jpg', URL2: 'https://healthwaymedical.com/wp-content/uploads/2022/01/Boon-Lay-Corporation-Clinic-1024x681.jpg', typeof: 'Before & After' }
    ]
    const photoArray = galerie.filter(item => item.typeof === 'photo');
    const videoArray = galerie.filter(item => item.typeof === 'video');
    const beforeAfterArray = galerie.filter(item => item.typeof === 'Before & After');

    return (

        <Box>
            
            <h2>
                This person have : {" "}{galerie.length} components 
            </h2>
            <div className='grid grid-cols-2 font-bold'>
            <h2>
                Images:{" "}{photoArray.length} 
            </h2>
            <h2>
            beforeAfterArray:{" "}{beforeAfterArray.length} 
            </h2>
            <h2>
            Video:{" "}{videoArray.length} 
            </h2>
           

            </div>
            <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="white"
                    indicatorColor="none"
                    aria-label="secondary tabs example"
                    variant="scrollable"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '20px'
                    }}

                >
                    <Tab sx={{ fontSize: '12px', minHeight: '30px', height: '30px', paddingTop: '6px', paddingBottom: '6px', whiteSpace: 'nowrap', }} className={`font-semibold  ${value === 0 ? 'btn' : ''}`} value={0} label="All Media"{...a11yProps(0)} />
                    <Tab sx={{ fontSize: '12px', minHeight: '30px', height: 'auto', paddingTop: '6px', paddingBottom: '6px', }} className={`font-semibold  ${value === 1 ? 'btn' : ''}`} value={1} label="Images" {...a11yProps(1)} />
                    <Tab sx={{ fontSize: '12px', minHeight: '30px', height: 'auto', paddingTop: '6px', paddingBottom: '6px', }} className={`font-semibold  ${value === 2 ? 'btn' : ''}`} value={2} label="Before & After" {...a11yProps(2)} />
                    <Tab sx={{ fontSize: '12px', minHeight: '30px', height: 'auto', paddingTop: '6px', paddingBottom: '6px', }} className={`font-semibold  ${value === 3 ? 'btn' : ''}`} value={3} label="Videos" {...a11yProps(3)} />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className='grid grid-cols-2 gap-6  justify-items-stretch place-items-stretch '>
                    {photoArray.map(item => (
                        <img className=' rounded-lg' src={item.URL} alt="logo" />
                    ))}
                    {beforeAfterArray.map(item => (
                        <ImgComparisonSlider className='slider-example-split-line rounded-xl'>
                            <img slot="first" src={item.URL1} />
                            <img slot="second" src={item.URL2} />
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
                    ))}
                    {videoArray.map(item => (
                        <video className='rounded-lg' controls>
                            <source src={item.URL} type="video/mp4" />
                        </video>
                    ))}
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='flex flex-col gap-6'>
                    {photoArray.map(item => (
                        <img className='rounded-lg h-[396px]' src={item.URL} alt="logo" />
                    ))}
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                {beforeAfterArray.map(item => (
                    <ImgComparisonSlider className='slider-example-split-line rounded-xl'>
                        <img slot="first" className='h-[396px]' src={item.URL1} />
                        <img slot="second" className='h-[396px] ' src={item.URL2} />
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
                ))}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {videoArray.map(item => (
                    <video className='rounded-lg' controls>
                        <source className='rounded-lg h-[396px]' src={item.URL} type="video/mp4" />
                    </video>
                ))}
            </TabPanel>

        </Box>

    );
}
