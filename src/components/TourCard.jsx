import './TourCard.css';

function TourCard({ event, date, year, location }) {
  return (
    <article className="tour-event-card">
      <div className="tour-event-card__date">
        <span className="tour-event-card__year">{year}</span>
        <span className="tour-event-card__day">{date}</span>
      </div>

      <div className="tour-event-card__content">
        <h3 className="tour-event-card__title">{event}</h3>
        <p className="tour-event-card__location">{location}</p>
      </div>
    </article>
  );
}

export default TourCard;
