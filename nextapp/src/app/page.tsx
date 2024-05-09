import Image from "next/image";
import  Link  from "next/link";
import Users from "../../lib/page";

export default function Home() {
   const Inti = Users();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div>
          <h1>Hello <span className="text-2xl">{Inti}</span> First Next App</h1>
          <Link href='/users' className="text-base hover:text-blue-500 transition-all">
             Users Page </Link>
       </div>
    </main>
  );
}
