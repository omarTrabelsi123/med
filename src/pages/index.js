import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Sidebar from '@/components/sidebar'
import RightSidebar from '@/components/rightSidebar'
import BasicTabs from '../components/post/index'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Navbar />
    <div className='container px-12 m-auto max-md:p-0 m'>
    <div className='my-[36px] z-10 max-md:my-0'>
        <img className='object-cover h-[350px] z-10 rounded-xl max-md:rounded-none max-md:h-[250px] ' src="https://res.cloudinary.com/dfwxzwkiw/image/upload/v1684708906/Rectangle_38_pl5uor.svg" alt="logo" />
      </div>
      <div className='px-12 max-md:px-0 flex items-stretch justify-stretch gap-5 max-md:flex-col'>
        <Sidebar />
        <BasicTabs />
        <RightSidebar />
      </div>
    </div>
    </>
  )
}
