import cn from 'classnames';
import Image from "next/image";
import { Text } from "@/components/Text/Text";
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-80 gap-3">
        <div className="card-header flex items-center flex-col gap-2">
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
          <Input label="Email" placeholder="you@example.com" />
          <Input label="Password" placeholder="Password" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Button variant="filled" fullWidth>
            Sign up
          </Button>
          <div className="flex items-center my-4 w-full">
            <div className="bg-gray-300 h-px flex-grow"></div>
            <span className="flex-shrink mx-4 text-gray-600">OR</span>
            <div className="bg-gray-300 h-px flex-grow"></div>
          </div>
          <button className="text-blue-700 font-semibold py-2 px-4 rounded hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Continue as Seller
          </button>
          <div className="text-center text-sm text-gray-500">
            By clicking continue, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </div>
        </div>

      </div>
    </main>
  );
}
