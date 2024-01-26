import Customers from "@/components/Customers";
import RechargeBox from "@/components/RechargeBox";
import StateCard from "@/components/StateCard"; 
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4"> 
      <div className="flex justify-between items-center mb-4">
        <div className="bg-green-400 p-4 flex items-center rounded-lg gap-4">
          <h1 className="text-white font-bold">bKash: 5000</h1>
          <h1 className="text-white font-bold">Nagad: 5000</h1>
          <h1 className="text-white font-bold">Rocket: 5000</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"> 
        <StateCard
          title="Your Current Balance"
          desc="You Can use This balance for everything"
          amount="5000"
        />
        <StateCard
          title="Total Send Amount"
          desc="From start your sended Amount"
          amount="5000"
        />
        <StateCard
          title="Total Receive amount"
          desc="This is your Total Lifetime deposite"
          amount="5000"
        />
      </div>

      <RechargeBox />

      <Customers />
    </div>
  );
}
