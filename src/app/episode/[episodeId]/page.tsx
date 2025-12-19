import Image from "next/image";

import { getEpisodeById } from "@/src/server/functions";
import { Episode } from "@/src/server/types";
import ImageNotFound from "@/src/ui/image-not-found";
import { getCleanSummary } from "@/src/utils/utils";

export default async function EpisodeIdPage(
  props: PageProps<"/episode/[episodeId]">
) {
  const { episodeId } = await props.params;

  const episodeData: Episode = await getEpisodeById(episodeId);

  return (
    <div className="flex w-full max-w-3xl flex-col items-center justify-center p-4 bg-gray-600/40 rounded-2xl xs:items-start">
      <h2 title={episodeData.name}>{episodeData.name}</h2>
      <span title={`Aired ${episodeData.airdate}`}>
        Aired {episodeData.airdate}
      </span>
      <span
        title={`Season ${episodeData.season} Episode ${episodeData.number}`}
      >
        Season {episodeData.season} Episode {episodeData.number}
      </span>
      <span title={`${episodeData.runtime} minutes of runtime`}>
        {episodeData.runtime} minutes of runtime
      </span>

      {episodeData.image?.original ? (
        <Image
          src={episodeData.image?.original as string}
          alt={episodeData.name}
          width={500}
          height={100}
          priority
          className="rounded"
        />
      ) : (
        <>
          <ImageNotFound height={"h-100"} width={"w-100"} />
        </>
      )}

      <span className="my-4" title="episode summary">
        {getCleanSummary(episodeData.summary)}
      </span>
    </div>
  );
}
