import Image from "next/image";
import { Text } from "@/components/Text/Text";
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { HLine } from '@/components/HLine';
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
