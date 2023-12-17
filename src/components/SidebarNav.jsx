"use client"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { useState } from 'react';
import Person3Icon from '@mui/icons-material/Person3';
import { RiDashboardFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";



function SidebarNav() {

  const [open, setOpen] = useState(true)
  const [subMenuOpen, setSubmenuOpen] = useState(false)



  const Menus= [
    {title:"Dashboard", icon: <RiArrowDropDownLine/>},
    {title:"Pages", icon: <RiArrowDropDownLine/>},
    {title:"Pages", spacing:true, icon: <RiArrowDropDownLine/>},
    {
      title:"Pages", 
      icon: <RiArrowDropDownLine/>,
      submenu:true,
      submenuItems:[
        {title:"menu 1"},
        {title:"menu 1"},
        {title:"menu 1"},

      ]
    
    },
  ]







  return (
    <div className={`bg-indigo-900	duration-300	 h-screen p-5 pt-8  relative ${open? "w-72" : "w-20"} `}>
        <ArrowForwardIcon className={`bg-white text-indigo-900 text-3xl rounded-full absolute -right-3 top-9 border duration-300 border-indigo-900 cursor-pointer ${open && "rotate-180"}`} onClick={()=>setOpen(!open)}
        />


        <div className="inline-flex">
          <Person3Icon className='bg-white text-4xl rounded-full cursor-pointer block float-left'/>
          <h1 className={`text-white origin-left duration-300 font-medium text-2xl ${!open && "scale-0"}`}>Morshed Al Main</h1>
        </div>


        <ul className='pt-2'>
            {
              Menus.map((menu, index)=>(
                <>
                <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md ${menu.spacing ? "mt-9": "mt-2"} `}>
                 <span className='text-2xl block float-left'>
                 <RiDashboardFill />


                 </span>
                  <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
                {menu.submenu && open && (
                  <RiArrowDropDownLine className={`${subMenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!subMenuOpen)} />

                )}
                
                </li>

                  {
                    menu.submenu && subMenuOpen && open && (
                      <ul>
                        {menu.submenuItems.map((submenuItem, index)=>(
                          <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white rounded-md'>
                            {submenuItem.title}
                          </li>
                        ))}
                      </ul>
                    )
                  }

                </>
              ))
            }
        </ul>

        </div>
  )
}

export default SidebarNav