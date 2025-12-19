import Image from "next/image";
import Link from "next/link";

import { getEpisodesByShowId, getShowById } from "@/src/server/functions";
import { Episode, Show } from "@/src/server/types";
import { getCleanSummary, getPremiereAndEndDates } from "@/src/utils/utils";
import ImageNotFound from "@/src/ui/components/image-not-found";

export default async function ShowIdPage(props: PageProps<"/show/[showId]">) {
  const { showId } = await props.params;

  const showData: Show = await getShowById(showId);
  let episodesData: Episode[] = [];

  if (showData) {
    episodesData = [...(await getEpisodesByShowId(showId))];
  }

  return (
    <div className="flex w-full max-w-3xl flex-col items-center justify-center p-4 bg-gray-600/40 rounded-2xl mb-4 xs:items-start">
      <h1 title={showData.name}>{showData.name}</h1>
      <h5
        title={`show air date (${getPremiereAndEndDates(
          showData.premiered,
          showData.ended
        )})`}
      >
        {getPremiereAndEndDates(showData.premiered, showData.ended)}
      </h5>
      <span className="my-4" title="Show summary">
        {getCleanSummary(showData.summary)}
      </span>

      {showData.image?.original ? (
        <Image
          src={showData.image?.original as string}
          alt={showData.name}
          width={300}
          height={1}
          priority
          className="rounded my-2"
        />
      ) : (
        <ImageNotFound height={"h-100"} width={"w-100"} />
      )}
      {episodesData.length ? (
        <div className="flex w-full flex-col items-center justify-center ">
          <ol className="list-decimal flex-col flex items-center max-h-130 w-full overflow-y-auto overflow-x-hidden">
            {episodesData.map((episode, key) => {
              return (
                <li
                  key={key}
                  className="rounded hover:bg-gray-500/70 cursor-pointer mb-2"
                >
                  <Link href={`/episode/${episode.id}`} title={episode.name}>
                    {episode.name}
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
        <h2 title="No episodes data">No episodes data</h2>
      )}
    </div>
  );
}
