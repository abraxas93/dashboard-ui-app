import Image from "next/image";
import { useState } from "react";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  return (
    <div className="relative">
      <Image src="search.svg" width={50} height={50} alt="search" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <input 
        type="search" 
        className="w-full rounded-lg border-gray-300 bg-gray-100 px-9 py-2" 
        placeholder="Search" value={searchQuery}
        onChange={handleInputChange} 
        onKeyDown={(event) => event.key === 'Enter' && handleSearch(event)}
      />
    </div>
  )
}
