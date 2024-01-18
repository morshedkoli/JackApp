import Customers from "@/components/Customers";
import Login from "@/components/Login";
import RechargeBox from "@/components/RechargeBox";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const tokenList = cookies();
  const token = tokenList.has("token");
  if (token) {
    redirect("/dashboard");
  }

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10 w-full">
      <Login />
    </main>
  );
}
