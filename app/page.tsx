import Image from "next/image";
import { Card } from "@/components/Card";
import { Header } from "@/layout/Header";
import { PostCard } from "@/features/PostCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex px-7">
        <div className="left-col w-3/5 p-3">
          <PostCard 
            content="Typical Challenges: Ensuring application scalability and maintainability, and developing team skills.
- Current Projects: Building a design system, refactoring the existing codebase, developing new React-based features."
            likes={15}
            comments={10}
            lastCommentDate="2 days"
          />
        </div>
        <div className="right-col w-2/5">
          <div className="widget">
            
          </div>
        </div>
      </main>
    </>
  );
}
