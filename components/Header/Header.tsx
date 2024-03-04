import Image from "next/image";
import Link from "next/link";


export const Header = () => {
  return (<div className="box-border h-34 bg-white shadow">
    <div className="mx-auto max-w-7xl pt-4 px-4">
      <div className="flex items-center justify-between px-5 py-2">
        <div className="flex items-center">
          <span className="text-lg font-bold">ChatGPT Mastery</span>
        </div>
        <div className="mx-4 flex-1">
          <div className="relative">
            <Image src="https://icons.getbootstrap.com/assets/icons/search.svg" alt="search" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
            <input type="search" className="w-full rounded-lg border-gray-300 bg-gray-100 px-9 py-2" placeholder="Search" />
          </div>
        </div>
        <div className="flex items-center">
          <a className="">
            <Image src="https://icons.getbootstrap.com/assets/icons/chat.svg" alt="chat" className="mx-3 h-6 w-6" />
          </a>
          <a>
            <Image src="https://icons.getbootstrap.com/assets/icons/bell.svg" alt="notifications" className="mx-3 h-6 w-6" />
          </a>
          <a>
            <Image src="https://picsum.photos/id/237/50/50" alt="profile" className="mx-3 h-8 w-8 rounded-full" />
          </a>
        </div>
      </div>
      <div className="h-18 box-border px-5 flex space-x-8">
        <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black" aria-current="page">Community</Link>
        <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">classNameroom</Link>
        <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">Calendar</Link>
        <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">Members</Link>
        <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">Leaderboards</Link>
        <Link href="#" className="inline-flex items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black">About</Link>
      </div>
    </div>
  </div>)
}