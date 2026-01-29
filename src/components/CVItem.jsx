const CVItem = ({ period, organization, location, title, description, bulletPoints }) => {
  return (
    <article className="cv-item">
      <div className="cv-item__content">
        <div className="cv-item__period-col">
          <span className="cv-item__period">{period}</span>
        </div>

        <div className="cv-item__main-col">
          <div className="cv-item__header">
            <h3 className="cv-item__organization">{organization}</h3>
            {location && <span className="cv-item__location">{location}</span>}
          </div>

          {title && <p className="cv-item__title">{title}</p>}

          {description && <p className="cv-item__description">{description}</p>}

          {bulletPoints && bulletPoints.length > 0 && (
            <ul className="cv-item__list">
              {bulletPoints.map((point, index) => (
                <li key={index} className="cv-item__list-item">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

export default CVItem;
