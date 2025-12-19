import { expect, test } from 'vitest';
import { getCleanSummary, getPremiereAndEndDates, getYear } from '../../utils/utils';

// #region getYear Tests

test("Get number '2015' from string date '2015-05-12'", () => {
    expect(getYear("2015-05-12")).toBe(2015);
});

// #endregion getYear Tests

// #region getCleanSummary Tests

test("Get string 'Hello, world!' from summary string with HTML tags '<b>Hello, world!</b>'", () => {
    expect(getCleanSummary("<b>Hello, world!</b>")).toBe("Hello, world!");
});

test("Get string 'Hello, world!' from summary string with nested HTML tags '<b>Hello, <u>world!</u></b>'", () => {
    expect(getCleanSummary("<b>Hello, <u>world!</u></b>")).toBe("Hello, world!");
});

// #endregion getCleanSummary Tests

// #region getPremiereAndEndDates Tests

test("Get string '2015 - Currently on air' from dates '2015-03-10' and '1969-03-10'", () => {
    expect(getPremiereAndEndDates("2015-03-10", "1969-03-10")).toBe("2015 - Currently on air");
});

test("Get string '2015' from dates '2015-03-10' and '2015-05-10'", () => {
    expect(getPremiereAndEndDates("2015-03-10", "2015-05-10")).toBe("2015");
});

test("Get string '2020 - Currently on air' from dates '2020-03-10' and 'null'", () => {
    // @ts-expect-error - Even though the function does not allow the 'null' value, we should still test it as JS
    expect(getPremiereAndEndDates("2020-03-10", null)).toBe("2020 - Currently on air");
});

test("Get string '2020 - Currently on air' from dates '2020-03-10' and 'undefined'", () => {
    // @ts-expect-error - Even though the function does not allow the 'undefined' value, we should still test it as JS
    expect(getPremiereAndEndDates("2020-03-10", undefined)).toBe("2020 - Currently on air");
});

test("Get string '' from dates '' and '2020-03-10'", () => {
    expect(getPremiereAndEndDates("", "2020-03-10")).toBe("");
});

// #endregion getPremiereAndEndDates Tests
