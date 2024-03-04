import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="sign-in-form">
        <div className="card-header flex flex-col gap-3"> 
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <h2>Sign in to your account</h2>
          <p>Dont have an account?</p>
        </div>
      </div>
    </main>
  );
}
