import Image from "next/image";
import { Text } from "@/components/Text/Text";
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { HLine } from '@/components/HLine';
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Header />
    </main>
  );
}
