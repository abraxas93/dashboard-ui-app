import Image from "next/image";
import { Text } from "@/components/Text/Text";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="sign-in-form">
        <div className="card-header flex items-center flex-col gap-3"> 
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/ai.svg"
            alt="Next.js Logo"
            width={75}
            height={75}
            priority
          />
          <Text title="Sign in to your account"></Text>
          <Text text="Dont have an account?"></Text>
        </div>
      </div>
    </main>
  );
}
