import { useTranslation } from 'react-i18next'
import './Header.css'

const LANGS = [
  { code: 'sv', label: 'SV' },
  { code: 'en', label: 'EN' },
  { code: 'no', label: 'NO' },
]

export default function Header() {
  const { t, i18n } = useTranslation()

  return (
    <header className="header">
      <div className="header-inner">
        <span className="header-name">Niklas Förstberg</span>
        <nav className="header-nav" aria-label="Page sections">
          <a href="#experience">{t('nav.experience')}</a>
          <a href="#skills">{t('nav.skills')}</a>
          <a href="#education">{t('nav.education')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>
        <div className="lang-switcher" role="group" aria-label="Language">
          {LANGS.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => i18n.changeLanguage(code)}
              className={i18n.resolvedLanguage === code ? 'active' : ''}
              aria-current={i18n.resolvedLanguage === code ? 'true' : undefined}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
