const monthLookup = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11,
};

export function parseTourDate(year, dateText) {
  const [dayPart, monthPart] = dateText.trim().split(/\s+/);
  const day = Number.parseInt(dayPart, 10);
  const monthKey = monthPart?.slice(0, 3).toUpperCase();
  const monthIndex = monthLookup[monthKey];

  if (!Number.isFinite(day) || monthIndex == null) {
    return null;
  }

  return new Date(Number(year), monthIndex, day);
}

export function isPastTourEvent(tourEvent, referenceDate = new Date()) {
  const eventDate = parseTourDate(tourEvent.year, tourEvent.date);

  if (!eventDate) {
    return false;
  }

  const normalizedReferenceDate = new Date(referenceDate);
  normalizedReferenceDate.setHours(0, 0, 0, 0);

  return eventDate < normalizedReferenceDate;
}

export function splitToursByDate(tourEvents, referenceDate = new Date()) {
  return tourEvents.reduce(
    (groups, tourEvent) => {
      if (isPastTourEvent(tourEvent, referenceDate)) {
        groups.recent.push(tourEvent);
      } else {
        groups.upcoming.push(tourEvent);
      }

      return groups;
    },
    { upcoming: [], recent: [] }
  );
}
