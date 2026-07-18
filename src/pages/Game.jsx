import { useSiteContent } from "../hooks/useSiteContent.js";

const GAME_URL = "https://queenahmk-art.github.io/bocciagame/";

export default function Game() {
  const { content, lang } = useSiteContent();
  const { gamePage } = content;
  const gameUrl = lang === "en" ? `${GAME_URL}?lang=en` : GAME_URL;

  return (
    <>
      <section className="game-page-intro">
        <p className="section-kicker">{gamePage.kicker}</p>
        <h1>{gamePage.title}</h1>
        <p>{gamePage.intro}</p>
        <p>{gamePage.guide}</p>
        <p>{gamePage.accessibility}</p>
        <a className="btn secondary" href={gameUrl} target="_blank" rel="noreferrer">
          {gamePage.openAction}
        </a>
      </section>

      <section className="game-frame-section" aria-label={gamePage.frameLabel}>
        <div className="game-frame-shell">
          <iframe
            src={gameUrl}
            title={gamePage.frameTitle}
            allow="fullscreen"
            loading="eager"
          />
        </div>
        <p className="game-frame-help">
          {gamePage.fallback}{" "}
          <a href={gameUrl} target="_blank" rel="noreferrer">
            {gamePage.fallbackAction}
          </a>
        </p>
      </section>
    </>
  );
}
