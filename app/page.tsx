import { Card } from "@/components/Card";
import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <div className="left-col">
          <Card />
        </div>
        <div className="right-col">
          <div className="widget">
            
          </div>
        </div>
      </main>
    </>
  );
}
