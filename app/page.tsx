import cn from 'classnames'; 
import Image from "next/image";
import { Text } from "@/components/Text/Text";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="sign-in-form">
        <div className="card-header flex items-center flex-col gap-3"> 
          <Image
            src="/ai.svg"
            alt="Next.js Logo"
            width={75}
            height={75}
            priority
          />
          <Text title="Sign in to your account" className='py-1'></Text>
          <Text text="Dont have an account?"></Text>
        </div>
      </div>
    </main>
  );
}
