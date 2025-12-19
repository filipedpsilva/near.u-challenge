/**
 * Gets the full year of a string date.
 * @param date The string date.
 * @returns The year number.
 */
export function getYear(date: string): number {
    return new Date(date).getFullYear();
};

/**
 * Gets a clean summary text, removing unnecessary HTML tags.
 * @param summary The "dirty" summary text.
 * @returns Clean summary text.
 */
export function getCleanSummary(summary: string): string {
    // This regex removes unnecessary HTML tags
    return summary.replace(/<\/?[^>]+(>|$)/g, "");
}

/**
 * Gets the show Premiere and End dates.
 * This method also checks if the Premiere and End dates exist,
 * and format the dates accordingly.
 * @param premiered The show Premiere string date.
 * @param ended The show End string date.
 * @returns The show Premiere and End dates as a complete string.
 */
export function getPremiereAndEndDates(premiered: string, ended: string): string {

    if (!premiered) {
        return "";
    }

    const premierYear = getYear(premiered);

    if (!ended) {
        return `${premierYear} - Currently on air`;
    }

    const endYear = getYear(ended);

    if (premierYear === endYear) {
        return endYear.toString();
    }

    return `${premierYear} - ${endYear}`;
};