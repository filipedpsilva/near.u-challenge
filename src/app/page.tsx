import Image from "next/image";
import Search from "../ui/search";
import List from "../ui/list";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-linear-to-tr from-red-900 to-cyan-900 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center align-top justify-between p-16 sm:items-start">
        <div className="flex flex-col w-full items-center justify-center">
          <Image
            src={"/logo-new.png"}
            alt={"app logo"}
            width={500}
            height={100}
            priority
            className="mb-2"
          />
          <h1 className="flex max-w-3xl justify-center">TV shows database</h1>
          <Search placeholder="Search for shows..." />
        </div>

        <List query={query} />
      </main>
    </div>
  );
}
