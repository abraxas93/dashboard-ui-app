import cn from 'classnames'; 
import Image from "next/image";
import { Text } from "@/components/Text/Text";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="sign-in-form">
        <div className="card-header flex items-center flex-col gap-1"> 
          <Image
            src="/ai.svg"
            alt="Next.js Logo"
            width={75}
            height={75}
            priority
          />
          <Text title="Sign in to your account" className='text-lg font-semibold pt-2'></Text>
          <Text text="Dont have an account?" className='text-gray-500 text-sm'></Text>
          <div className='flex flex-col'>
            <div>Label</div>
            <input />
          </div>
          <div className='flex'>
            <div>Label</div>
            <input />
          </div>
        </div>
      </div>
    </main>
  );
}
