"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { getShowsByQuery } from "../server/functions";
import { ScoredShow } from "../server/types";
import { getPremiereAndEndDates } from "../utils/utils";
import ImageNotFound from "./image-not-found";

export default function List({ query }: { query: string }) {
  const [shows, setShows] = useState<ScoredShow[]>([]);

  useEffect(() => {
    async function fetchData() {
      setShows(await getShowsByQuery(query));
    }

    fetchData();
  }, [query]);

  return (
    <div className="flex w-full items-center justify-center shrink-0 mt-2">
      <ul className="w-full max-h-160 overflow-y-auto">
        {shows.length ? (
          shows.map((show, key) => {
            return (
              <li
                key={key}
                className="rounded hover:bg-gray-500/70 cursor-pointer bg-gray-600/40 p-2 mb-1"
              >
                <Link
                  href={`/show/${show.show.id}`}
                  className="flex w-full flex-col items-center justify-center"
                >
                  {show.show.image?.original ? (
                    <Image
                      src={show.show.image?.original as string}
                      alt={show.show.name}
                      width={200}
                      height={100}
                      priority
                      className="rounded"
                    />
                  ) : (
                    <ImageNotFound height={"h-50"} width={"w-50"} />
                  )}
                  <h2>{show.show.name}</h2>

                  <h5>
                    {getPremiereAndEndDates(
                      show.show.premiered,
                      show.show.ended
                    )}
                  </h5>
                </Link>
              </li>
            );
          })
        ) : (
          <li className="flex w-full flex-col items-center justify-center rounded bg-gray-600/40 p-2 mb-1">
            No show matches your query
          </li>
        )}
      </ul>
    </div>
  );
}
