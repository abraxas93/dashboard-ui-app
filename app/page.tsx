import Image from "next/image";
import { Card } from "@/components/Card";
import { Header } from "@/layout/Header";
import { PostCard } from "@/features/PostCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <div className="left-col w-3/5 p-3">
          <PostCard />
        </div>
        <div className="right-col w-2/5">
          <div className="widget">
            
          </div>
        </div>
      </main>
    </>
  );
}
