"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ChevronLeftIcon from "@atlaskit/icon/core/chevron-left";

export default function ShowIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      <div className="flex flex-col">
        <Image
          src={"/logo-new.png"}
          alt={"app logo"}
          width={500}
          height={100}
          priority
          className="mb-2"
        />
      </div>
      {children}
      <button
        className="flex mt-2 bg-gray-500 w-40 h-auto hover:bg-gray-400/70 cursor-pointer rounded mb-4 items-center justify-center"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon label="Go back" />
        Go back
      </button>
    </div>
  );
}
