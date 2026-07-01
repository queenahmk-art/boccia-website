export default function ServiceCard({ service, imageMode = false }) {
  return (
    <article className={`service-card ${imageMode && service.image ? "has-image" : ""}`}>
      {imageMode && service.image ? (
        <img src={service.image} alt={service.title} />
      ) : (
        <span className="card-number">{service.number}</span>
      )}
      <div>
        <span className="card-number">{service.number}</span>
        <h3>{service.title}</h3>
        <p>{service.copy}</p>
        <p className="en">{service.en}</p>
      </div>
    </article>
  );
}
