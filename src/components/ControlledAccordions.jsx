"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { Stack } from '@chakra-ui/react';
import { FaRegEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

export default function ControlledAccordions({user}) {
  const [expanded, setExpanded] = React.useState(false);


  const [passShow, setPassShow] = React.useState(false)
  const [pinShow, setPinShow] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='w-full'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {user["name"]}
          </Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>Balance: {user["balance"]}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Credit Balance: {user["credit_balance"]}</Typography>
        </AccordionSummary>
        <AccordionDetails className='flex w-full'>
         <Stack style={{ width: '33%' }}>
         <Typography> Phone : {user["phone"]}</Typography>
          <Typography> Email : {user["email"]}</Typography>
         
         </Stack>
         <Stack style={{ width: '33%' }}>
         
          <Typography className='flex gap-2'> Password : {passShow ? `${user["password"]}` : "*****"}  <span  > {passShow? <FaEyeSlash className='cursor-pointer' onClick={()=>setPassShow(false)} />: <FaRegEye className='cursor-pointer' onClick={()=>setPassShow(true)}  />} </span></Typography>
          <Typography className='flex gap-2'> Pin : {pinShow ? `${user["pin"]}` : "*****"}  <span  > {pinShow? <FaEyeSlash className='cursor-pointer' onClick={()=>setPinShow(false)} />: <FaRegEye className='cursor-pointer' onClick={()=>setPinShow(true)}  />} </span></Typography>
         </Stack>
         <div  className='flex gap-6 justify-between'>
         
         <button className='p-1 pr-2 pl-2 text-white bg-green-600 rounded-md font-semibold '>Add Balance</button>
         <button className='p-1 pr-2 pl-2 text-white bg-amber-700 rounded-md font-semibold '>View Profile</button>
         

         </div>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
