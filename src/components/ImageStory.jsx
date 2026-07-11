import { getImageDimensions } from "../data/siteData.js";

export default function ImageStory({ image, kicker, title, children, alt }) {
  const imageDimensions = getImageDimensions(image);

  return (
    <section className="section image-story">
      <div className="image-story-media">
        <img
          src={image}
          alt={alt}
          width={imageDimensions.width}
          height={imageDimensions.height}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="image-story-copy">
        <p className="section-kicker">{kicker}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
