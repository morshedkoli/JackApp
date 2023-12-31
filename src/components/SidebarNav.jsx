"use client"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import Person3Icon from '@mui/icons-material/Person3';
import { RiDashboardFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import SideberItem from './SideberItem';
import { MdAdminPanelSettings } from "react-icons/md";



function SidebarNav() {

  const [open, setOpen] = useState(true)
  const [subMenuOpen, setSubmenuOpen] = useState(false)



  const Menus= [
    {id:1, title:"Dashboard", icon: <MdDashboard />,  location:"/" },
    { id:4,
      location:"#",
      title:"New Request", 
      icon:<FaMoneyBillTrendUp />,
      submenu:true,
      submenuItems:[
        {id:1, title:"Mobile Recharge", location:"/services/recharge"},
        {id:2, title:"Bkash CashIn", location:"/services/bkash"},
        {id:3, title:"Nagad CashIn", location:"/services/nagad"},
        {id:4, title:"Rocket CashIn", location:"/services/rocket"},

      ]
    
    },
    {id:2, title:"Pending", icon: <MdOutlinePendingActions />, location:"/pending-request"  },
    {id:3, title:"Cash Out",  icon: <MdPayments />, location:"/cash-out"  },
    { id:4,
      title:"History", 
      location:"#",
      icon:<FaHistory />      ,
      submenu:true,
      submenuItems:[
        {id:1, title:"Send Money History", location:"/history/send-money"},
        {id:2, title:"Payment History", location:"/history/payment"},
        {id:3, title:"Cash Out History", location:"/history/cash-out"},

      ]
    
    },
    {id:1, title:"My Rate", icon: <MdDashboard />,  location:"/rate" },
    { id:4,
      title:"Admin", 
      location:"/admin",
      icon:<MdAdminPanelSettings />      ,
      submenu:true,
      submenuItems:[
        {id:1, title:"Users", location:"/admin/users"},
        {id:2, title:"New User", location:"/admin/users/registration"},
        {id:3, title:"Add Balance", location:"/admin/add-balance"},
        {id:4, title:"Notice", location:"/admin/notice"},
        {id:5, title:"Brand", location:"/admin/brand"},
        {id:5, title:"Api Settings", location:"/admin/api"},
        {id:5, title:"Log", location:"/admin/log"},
        {id:5, title:"Modem Settings", location:"/admin/modem"},
        {id:5, title:"B2B", location:"/admin/b2b"},
        {id:5, title:"SMS Inbox", location:"/admin/inbox"},

      ]
    
    },
  ]




  return (
    <div className={`bg-indigo-900	duration-300 min-h-screen p-5 pt-8  relative ${open? "w-72" : "w-20"} `}>
        <ArrowForwardIcon className={`bg-white text-indigo-900 text-3xl rounded-full absolute -right-3 top-9 border duration-300 border-indigo-900 cursor-pointer ${open && "rotate-180"}`} onClick={()=>setOpen(!open)}
        />


        <div className="inline-flex">
          <Person3Icon className='bg-white text-4xl rounded-full cursor-pointer block float-left'/>
          <h1 className={`text-white origin-left duration-300 font-medium text-2xl ${!open && "scale-0"}`}>Morshed Al Main</h1>
        </div>

        {
          Menus.map((item, index)=>(
            <SideberItem key={index} open={open} item={item} />
          ))
        }

        </div>
  )
}

export default SidebarNav