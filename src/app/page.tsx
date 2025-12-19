import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-linear-to-tr from-red-900 to-cyan-900 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between p-16 sm:items-start">
        <div className="flex flex-col">
          <Image
            src={"/logo-new.png"}
            alt={"app logo"}
            width={500}
            height={100}
            priority
            className="mb-2"
          />
          <h1 className="flex justify-center">TV shows database</h1>
        </div>
      </main>
    </div>
  );
}
