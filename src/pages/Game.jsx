import { useSiteContent } from "../hooks/useSiteContent.js";

const GAME_URL = "https://queenahmk-art.github.io/bocciagame/";

export default function Game() {
  const { content } = useSiteContent();
  const { gamePage } = content;

  return (
    <>
      <section className="game-page-intro">
        <p className="section-kicker">{gamePage.kicker}</p>
        <h1>{gamePage.title}</h1>
        <p>{gamePage.intro}</p>
        <p>{gamePage.guide}</p>
        <p>{gamePage.accessibility}</p>
        <a className="btn secondary" href={GAME_URL} target="_blank" rel="noreferrer">
          {gamePage.openAction}
        </a>
      </section>

      <section className="game-frame-section" aria-label={gamePage.frameLabel}>
        <div className="game-frame-shell">
          <iframe
            src={GAME_URL}
            title={gamePage.frameTitle}
            allow="fullscreen"
            loading="eager"
          />
        </div>
        <p className="game-frame-help">
          {gamePage.fallback}{" "}
          <a href={GAME_URL} target="_blank" rel="noreferrer">
            {gamePage.fallbackAction}
          </a>
        </p>
      </section>
    </>
  );
}
