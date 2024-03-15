import Image from "next/image";
import Link from "next/link";
import { FlexBoxColumn } from "@/components/FlexBoxColumn";
import { FlexBox } from "@/components/FlexBox";
import { Search } from "@/components/Search";


export const Header = () => {
  return (
    <FlexBoxColumn className="items-center bg-white shadow w-full">
      <div className="pt-4">
        <FlexBox className="items-center">
          <FlexBox className="items-center">
            <span className="text-lg font-bold">ChatGPT Mastery</span>
          </FlexBox>
          <div className="mx-4 flex-1">
            <Search />
          </div>
          <FlexBox className="flex items-center gap-2">
            <a className="">
              <Image width={25} height={25} src="https://icons.getbootstrap.com/assets/icons/chat.svg" alt="chat" />
            </a>
            <a>
              <Image width={25} height={25} src="https://icons.getbootstrap.com/assets/icons/bell.svg" alt="notifications" />
            </a>
            <a>
              <Image width={25} height={25} src="https://picsum.photos/id/237/50/50" alt="profile" className="rounded-full" />
            </a>
          </FlexBox>
        </FlexBox>
        <FlexBox className="h-18 box-border space-x-8">
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black" aria-current="page">Community</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">classNameroom</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">Calendar</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">Members</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">Leaderboards</Link>
          <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">About</Link>
        </FlexBox>
      </div>
    </FlexBoxColumn>
  )
}