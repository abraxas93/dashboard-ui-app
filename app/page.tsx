import { Header } from "@/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex">
        <div className="left-col">
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body"></div>
            <div className="card-footer"></div>
          </div>
        </div>
        <div className="right-col">
          <div className="widget">
            
          </div>
        </div>
      </main>
    </>
  );
}
