'use server';
import Image from "next/image";
import { Text } from "@/components/Text/Text";
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { HLine } from '@/components/HLine';
import { FlexBoxColumn } from "@/components/FlexBoxColumn";

export default async function SignIn() {
  return (
    <main className="flex justify-center items-center h-screen">
      <FlexBoxColumn className="w-80 gap-3">
        <div className="flex items-center flex-col gap-2">
          <Image
            src="/ai.svg"
            alt="Next.js Logo"
            width={75}
            height={75}
            priority
          />
          <Text title="Sign in to your account" className='text-lg font-semibold pt-2'></Text>
          <Text text="Dont have an account?" className='text-gray-500 text-sm'></Text>
        </div>
        <div className="flex flex-col w-full gap-3">
          <Input label="Email" placeholder="you@example.com" className="text-sm"/>
          <Input label="Password" placeholder="Password" className="text-sm"/>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Button variant="filled" size='s' fullWidth>
            Sign up
          </Button>
          <div className="flex items-center my-4 w-full">
            <HLine />
            <Text className="flex-shrink mx-4 text-sm text-gray-600" text='OR'></Text>
            <HLine />
          </div>
          <Button variant="clear" size='s' fullWidth>Continue as Seller</Button>
          <div className="text-center text-sm text-gray-500">
            By clicking continue, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </div>
        </div>
      </FlexBoxColumn>
    </main>
  );
}
