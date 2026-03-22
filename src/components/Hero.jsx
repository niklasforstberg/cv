import { useTranslation } from 'react-i18next'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <h1 className="hero-name">Niklas Förstberg</h1>
      <p className="hero-title">{t('hero.title')}</p>
      <p className="hero-meta">
        <span>{t('hero.born')}</span>
        <span className="dot">·</span>
        <span>{t('hero.nationality')}</span>
        <span className="dot">·</span>
        <span>{t('hero.languages')}</span>
      </p>
    </section>
  )
}
