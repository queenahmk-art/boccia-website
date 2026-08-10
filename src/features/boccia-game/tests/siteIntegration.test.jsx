import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import BocciaGame from '../game/BocciaGame.jsx'

describe('site-integrated game rendering', () => {
  it.each([
    ['zh-Hant-HK', '/rules', '/contact'],
    ['en-HK', '/en/rules', '/en/contact'],
  ])('renders %s directly without an embedded document or duplicate header', (language, rulesUrl, contactUrl) => {
    const html = renderToStaticMarkup(
      <BocciaGame
        initialLanguage={language}
        integratedMode
        showHeader={false}
        rulesUrl={rulesUrl}
        contactUrl={contactUrl}
      />,
    )

    expect(html).toContain(`lang="${language}"`)
    expect(html).toContain('class="boccia-game-app')
    expect(html).toContain(`href="${rulesUrl}"`)
    expect(html).toContain(`href="${contactUrl}"`)
    expect(html).not.toContain('<iframe')
    expect(html).not.toContain('<main')
    expect(html).not.toContain('class="game-header"')
    expect(html).not.toContain('queenahmk-art.github.io/bocciagame')
  })
})
