import Image from "next/image";

export const Search = () => {
  return (
    <div className="relative">
      <Image src="search.svg" width={50} height={50} alt="search" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <input type="search" className="w-full rounded-lg border-gray-300 bg-gray-100 px-9 py-2" placeholder="Search" />
    </div>
  )
}
