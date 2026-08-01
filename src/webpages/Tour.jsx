import TourCard from "../components/TourCard";
import { siteContent } from "../content/siteContent";
import { splitToursByDate } from "../lib/tourUtils";
import "./Tour.css";

function Tour({ tours }) {
  const tourData = tours && tours.length > 0 ? tours : siteContent.tour.events;
  const groupedTours = splitToursByDate(tourData);
  const { labels, emptyUpcomingText } = siteContent.tour;

  return (
    <section className="tour-page">
      <div className="tour-section">
        <div className="tour-section__header">
          <p className="tour-page__label">{labels.upcoming}</p>
        </div>

        {groupedTours.upcoming.length > 0 ? (
          <div className="tour-grid">
            {groupedTours.upcoming.map(({ year, date, event, location }) => (
              <div key={`${year}-${date}-${event}-${location}`.replace(/\s+/g, "-").toLowerCase()}>
                <TourCard
                  year={year}
                  date={date.toUpperCase()}
                  event={event}
                  location={location}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="tour-empty-state">{emptyUpcomingText}</p>
        )}
      </div>

      <div className="tour-section tour-section--recent">
        <div className="tour-section__header">
          <p className="tour-page__label">{labels.recent}</p>
        </div>

        <div className="tour-grid">
          {groupedTours.recent.map(({ year, date, event, location }) => (
            <div key={`${year}-${date}-${event}-${location}`.replace(/\s+/g, "-").toLowerCase()}>
              <TourCard
                year={year}
                date={date.toUpperCase()}
                event={event}
                location={location}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tour;