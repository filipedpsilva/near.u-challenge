"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import GoBackButton from "@/src/ui/components/go-back-button";

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
      <GoBackButton onClick={() => router.back()} />
    </div>
  );
}
