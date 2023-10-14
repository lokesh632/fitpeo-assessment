import React,{useId} from 'react'
import { NavLink } from 'react-router-dom';
import {BiLeftArrowCircle,BiSolidChevronRight,BiSolidDashboard,BiSolidColor,BiMoney,BiLogoSlack, BiSolidUserRectangle,BiCube,BiSolidChat} from 'react-icons/bi'
import {BsChevronDown} from 'react-icons/bs';



const menuItem=(menu,key)=>{
    return <li key={key} className='relative  text-gray-200 text-sm rounded-md pl-2 py-2 my-1.5 transition-all duration-200 hover:bg-blue-900 cursor-pointer'>
        <NavLink to="#" className="flex justify-start items-center">
            <span className='mr-4'>{menu.icon}</span>
            {menu.title}
            <span className="absolute right-5">
                <BiSolidChevronRight />
            </span>
        </NavLink>
    </li>
}

const Sidebar = ({isOpen,setIsOpen}) => {
    const uid=useId();
    const menuList=[
        {
            title:'Dashboard',
            path:'',
            icon:<BiSolidDashboard />
        },
        {
            title:'Products',
            path:'',
            icon:<BiCube />
        },
        {
            title:'Customers',
            path:'',
            icon:<BiSolidUserRectangle />
        },
        {
            title:'Income',
            path:'',
            icon:<BiMoney />
        },
        {
            title:'Promote',
            path:'',
            icon:<BiSolidColor />
        },
        {
            title:'Help',
            path:'',
            icon:<BiSolidChat />
        },
    ];

  return (
    <>
    

<aside className={isOpen?`fixed lg:static z-[100] flex flex-col translate-x-0 transition-all duration-300 w-[250px] bg-blue-950 shadow-xl h-screen lg:block`:`fixed lg:static flex flex-col translate-x-[-250px] w-[250px] bg-blue-950 shadow-xl h-screen hidden`}>
<div className='flex flex-col h-[90vh]'>
    <h4 className='flex justify-start items-center text-gray-200 text-md font-semibold px-2 py-6 mx-3'>
        <span className='mr-2 p-1 border-2 rounded'><BiLogoSlack /></span>
        Brand name

        <span className='block lg:hidden absolute right-3 text-3xl cursor-pointer' onClick={()=>setIsOpen(false)}>
            <BiLeftArrowCircle />
        </span>
    </h4>
    <ul className='mx-3'>
        {menuList.map((menu)=>menuItem(menu,uid))}
    </ul>
</div>
<div className='flex justify-between items-center rounded-md hover:bg-blue-900 px-2 mb-8 mx-2'>
    <div className='flex items-center justify-between gap-2 px-2 py-2 cursor-pointer'>
        <img 
        className='h-[35px] w-[35px] rounded-full'
        src="https://273774.fs1.hubspotusercontent-na1.net/hub/273774/hubfs/mp/themes/Act-Theme/images/act-quote-author-sample.jpg?noresize&width=180&height=180&name=act-quote-author-sample.jpg"
        alt="user-pic"
        />
        <div className=''>
        <p className='text-gray-200 text-xs text-left'>Evano</p>
        <p className='text-gray-100 opacity-40 text-[0.6rem]'>Project Manager</p>
        </div>
    </div>
    
    <span className='text-gray-200 cursor-pointer'>
        <BsChevronDown />
    </span>
</div>
</aside>
    
</>
  )
}

export default Sidebar