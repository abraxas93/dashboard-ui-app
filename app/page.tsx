import cn from 'classnames'; 
import Image from "next/image";
import { Text } from "@/components/Text/Text";
import { Input } from '@/components/Input';

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
          <Input label='Email' placeholder='you@example.com'/>
          <Input label='Password' placeholder='Password'/>
        </div>
      </div>
    </main>
  );
}
