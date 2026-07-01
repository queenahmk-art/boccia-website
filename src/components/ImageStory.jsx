export default function ImageStory({ image, kicker, title, children, alt }) {
  return (
    <section className="section image-story">
      <div className="image-story-media">
        <img src={image} alt={alt} />
      </div>
      <div className="image-story-copy">
        <p className="section-kicker">{kicker}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
