"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { getShowsByQuery } from "../server/functions";
import { ScoredShow } from "../server/types";

export default function List({ query }: { query: string }) {
  const [shows, setShows] = useState<ScoredShow[]>([]);

  useEffect(() => {
    async function fetchData() {
      setShows(await getShowsByQuery(query));
    }

    fetchData();
  }, [query]);

  const getYear = (date: string) => {
    return new Date(date).getFullYear();
  };

  return (
    <div className="flex w-full items-center justify-center shrink-0 mt-2">
      <ul className="w-full max-h-160 overflow-y-auto">
        {shows.length ? (
          shows.map((show, key) => {
            return (
              <li
                key={key}
                className="rounded hover:bg-gray-500/70 cursor-pointer bg-gray-600/60 p-2 mb-1"
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
                    <div className="flex rounded w-50 h-50 bg-black">
                      <span className="flex w-full items-center justify-center">
                        Image Not found
                      </span>
                    </div>
                  )}
                  <h1>{show.show.name}</h1>
                  <h5>
                    {getYear(show.show.premiered)} - {getYear(show.show.ended)}
                  </h5>
                </Link>
              </li>
            );
          })
        ) : (
          <li className="flex w-full flex-col items-center justify-center rounded bg-gray-600/60 p-2 mb-1">
            No show matches your query
          </li>
        )}
      </ul>
    </div>
  );
}
