import Image from "next/image";
import Search from "../ui/components/search";
import List from "../ui/components/list";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="flex w-full max-w-3xl flex-col items-center align-top justify-between p-16 sm:items-start">
      <div className="flex flex-col w-full items-center justify-center">
        <Image
          src={"/logo-new.png"}
          alt={"app logo"}
          width={500}
          height={100}
          priority
          className="mb-2"
        />
        <h1 title="TV show database" className="flex max-w-3xl justify-center">
          TV show database
        </h1>
        <Search placeholder="Search for shows..." />
      </div>

      <List query={query} />
    </div>
  );
}
