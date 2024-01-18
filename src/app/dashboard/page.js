import Customers from "@/components/Customers";
import RechargeBox from "@/components/RechargeBox";
import { StateCard } from "@/components/StateCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full p-4">
      <div>
        <div className=" bg-green-400 mb-5 p-4 flex justify-start gap-10 rounded">
          <h1>bKash: 5000</h1>
          <h1>Nagad: 5000</h1>
          <h1>Rocket: 5000</h1>
        </div>
      </div>

      <div className="flex justify-between">
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
