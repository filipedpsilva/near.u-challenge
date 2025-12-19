"use server"

import { Episode, Show, ScoredShow } from "./types";

export async function getShowsByQuery(query: string) {
    const shows = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    return shows.json() as Promise<ScoredShow[]>;
}

export async function getShowById(showId: string) {
    const show = await fetch(`https://api.tvmaze.com/shows/${showId}`);
    return show.json() as Promise<Show>;
}

export async function getEpisodesByShowId(showId: string) {
    const episodes = await fetch(
        `https://api.tvmaze.com/shows/${showId}/episodes?specials=1`
    );
    return episodes.json() as Promise<Episode[]>;
}

export async function getEpisodeById(episodeId: string) {
    const episode = await fetch(`https://api.tvmaze.com/episodes/${episodeId}`);
    return episode.json() as Promise<Episode>;
}