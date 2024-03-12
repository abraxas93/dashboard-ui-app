import Image from "next/image";
import Link from "next/link";
import { FlexBoxColumn } from "@/components/FlexBoxColumn";
import { FlexBox } from "@/components/FlexBox";


export const Header = () => {
  return (
    <FlexBoxColumn className="items-center bg-white shadow w-full">
      <div className="pt-4">
        <FlexBox className="items-center">
          <FlexBox className="items-center">
            <span className="text-lg font-bold">ChatGPT Mastery</span>
          </FlexBox>
          <div className="mx-4 flex-1">
            <div className="relative">
              <Image src="search.svg" width={50} height={50} alt="search" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
              <input type="search" className="w-full rounded-lg border-gray-300 bg-gray-100 px-9 py-2" placeholder="Search" />
            </div>
          </div>
          <div className="flex items-center">
            <a className="">
              <Image width={25} height={25} src="https://icons.getbootstrap.com/assets/icons/chat.svg" alt="chat" className="mx-3 h-6 w-6" />
            </a>
            <a>
              <Image width={25} height={25} src="https://icons.getbootstrap.com/assets/icons/bell.svg" alt="notifications" className="mx-3 h-6 w-6" />
            </a>
            <a>
              <Image width={25} height={25} src="https://picsum.photos/id/237/50/50" alt="profile" className="mx-3 h-8 w-8 rounded-full" />
            </a>
          </div>
        </FlexBox>
        <div className="h-18 box-border px-5 flex space-x-8">
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black" aria-current="page">Community</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">classNameroom</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">Calendar</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">Members</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">Leaderboards</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">About</Link>
        </div>
      </div>
    </FlexBoxColumn>
  )
}