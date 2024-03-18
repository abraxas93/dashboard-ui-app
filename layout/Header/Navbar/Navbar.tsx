import { FlexBox } from "@/components/FlexBox";
import Link from "next/link";
import { FC } from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}

const NavLink = ({ href, label, ...otherProps }: NavLinkProps) => (
  <div className="flex flex-grow">
    <Link
      href={href}
      className="items-center border-b-4 border-transparent py-5 text-base font-medium text-gray-500 hover:border-black hover:text-black"
      aria-current={label === "Posts" ? "page" : undefined}
      {...otherProps}
    >
      {label}
    </Link>
  </div>
);

export const Navbar: FC<{ links: NavLinkProps[]}> = (props) => (
  <FlexBox className="h-18 box-border flex-wrap">
    {props.links.map((linkProps, index) => (
      <NavLink key={index} {...linkProps} />
    ))}
  </FlexBox>
);