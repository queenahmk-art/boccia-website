import { getImageDimensions } from "../data/siteData.js";

export default function ServiceCard({ service, imageMode = false }) {
  const imageDimensions = getImageDimensions(service.image);

  return (
    <article className={`service-card ${imageMode && service.image ? "has-image" : ""}`}>
      {imageMode && service.image ? (
        <img
          src={service.image}
          alt={service.title}
          width={imageDimensions.width}
          height={imageDimensions.height}
          loading="lazy"
          decoding="async"
        />
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
