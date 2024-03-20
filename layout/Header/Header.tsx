import Image from "next/image";
import Link from "next/link";
import { FlexBoxColumn } from "@/components/FlexBoxColumn";
import { FlexBox } from "@/components/FlexBox";
import { Search } from "@/components/Search";
import { Navbar } from "./Navbar";

const navLinks = [
  { href: "#", label: "Posts" },
  { href: "#", label: "Prompts" },
  { href: "#", label: "Documents" },
  { href: "#", label: "Comments" },
  { href: "#", label: "Leaderboards" },
  { href: "#", label: "About" },
];


export const Header = () => {
  return (
    <FlexBoxColumn className="items-center bg-white shadow w-full">
      <FlexBoxColumn className="pt-4 w-6/12">
        <FlexBox className="items-center gap-3">
          <FlexBox className="items-center">
            <span className="text-lg font-bold">ChatGPT Mastery</span>
          </FlexBox>
          <div className="mx-4 flex-1">
            <Search />
          </div>
          <FlexBox className="flex items-center gap-3">
            <Link href={'/'}>
              <Image width={25} height={25} src="https://icons.getbootstrap.com/assets/icons/chat.svg" alt="chat" />
            </Link>
            <Link href={'/'}>
              <Image width={25} height={25} src="https://icons.getbootstrap.com/assets/icons/bell.svg" alt="notifications" />
            </Link>
            <Link href={'/'}>
              <Image width={25} height={25} src="https://picsum.photos/id/237/50/50" alt="profile" className="rounded-full" />
            </Link>
          </FlexBox>
        </FlexBox>
        <Navbar links={navLinks}/>
      </FlexBoxColumn>
    </FlexBoxColumn>
  )
}