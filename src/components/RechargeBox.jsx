

import BoxLayout from './BoxLayout'

function RechargeBox() {


  const services = [
        {title:"Recharge", location:"/services/recharge", image:"https://ikramtel.in/webapp/img/Mobile%20Recharge.png"},
        {title:"bKash", location:"dashboard/services/bkash", image:"https://ikramtel.in/webapp/img/bKash.png"},
        {title:"Nagad", location:"/services/nagad", image:"https://ikramtel.in/webapp/img/Nagad.png"},
        {title:"Rocket", location:"/services/rocket", image:"https://ikramtel.in/webapp/img/Rocket.png"},
        // {titile:"mChash", location:"/services/mcash", image:"https://ikramtel.in/webapp/img/mCash.png"},
        {title:"C-Card", location:"/services/calling-card", image:"https://ikramtel.in/webapp/img/Calling%20Card.png"},
        {title:"BTB", location:"/services/b2b", image:"https://ikramtel.in/webapp/img/BTB%20Transfer.png"}
    ]


  return (
   <div className='p-5 gap-3 flex justify-start flex-wrap'>
      {services.map((service) => (
        <BoxLayout key={service.id} service={service} />
      ))}
    </div>
  );
}

export default RechargeBox
