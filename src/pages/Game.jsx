import { useSiteContent } from "../hooks/useSiteContent.js";
import BocciaGame from "../features/boccia-game/game/BocciaGame.jsx";

export default function Game() {
  const { content, lang } = useSiteContent();
  const { gamePage } = content;
  const gameLanguage = lang === "en" ? "en-HK" : "zh-Hant-HK";
  const localizedPath = (path) => lang === "en" ? `/en${path}` : path;

  return (
    <>
      <section className="game-page-intro">
        <p className="section-kicker">{gamePage.kicker}</p>
        <h1>{gamePage.title}</h1>
        <p>{gamePage.intro}</p>
        <p>{gamePage.guide}</p>
        <p>{gamePage.accessibility}</p>
        <a className="btn secondary" href="#boccia-game">
          {gamePage.openAction}
        </a>
      </section>

      <section className="game-frame-section" aria-label={gamePage.frameLabel}>
        <div className="game-frame-shell">
          <section id="boccia-game" className="integrated-boccia-game">
            <BocciaGame
              key={gameLanguage}
              initialLanguage={gameLanguage}
              integratedMode
              showHeader={false}
              rulesUrl={localizedPath("/rules")}
              contactUrl={localizedPath("/contact")}
            />
          </section>
        </div>
      </section>
    </>
  );
}
