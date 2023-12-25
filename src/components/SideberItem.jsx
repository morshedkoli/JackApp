import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { useState } from 'react';

import { RiArrowDropDownLine } from "react-icons/ri";





function SideberItem({open, item}) {

    const [subMenuOpen, setSubmenuOpen] = useState(false)

  return (
  <>
   
   <div  className={`text-gray-100 bg-slate-50	bg-opacity-40	 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black  rounded-md ${item.spacing ? "mt-9": "mt-2"} `}
    > 
    
     <span className='text-2xl block float-left'>
    {item.icon}
     </span>
      <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}
      onClick={() => setSubmenuOpen(!subMenuOpen)}
      ><Link href={item.location}>{item.title}</Link></span>
      
    {item.submenu && open && (
      <RiArrowDropDownLine className={`${subMenuOpen && "rotate-180"} text-3xl `} onClick={() => setSubmenuOpen(!subMenuOpen)} />

    )}

 
   </div>


   {
                    subMenuOpen && open && (
                      <ul >
                        {item.submenu && item.submenuItems.map((submenuItem)=>(
                          <li 
                          key={submenuItem.id}
                          className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white hover:text-gray-900 rounded-md'>
                           <Link href={submenuItem.location}> {submenuItem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )
                  }
  </>

   
  )
}

export default SideberItem