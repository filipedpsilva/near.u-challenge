export function getYear(date: string): number {
    return new Date(date).getFullYear();
};

export function getCleanSummary(summary: string): string {
    return summary.replace(/<\/?[^>]+(>|$)/g, "");
}

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