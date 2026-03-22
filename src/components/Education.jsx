import { useTranslation } from 'react-i18next'
import { education } from '../data/jobs.js'
import './Education.css'

export default function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="section">
      <div className="section-inner">
        <h2 className="section-heading">{t('sections.education')}</h2>

        <div className="edu-grid">
          <div>
            <h3 className="edu-sub">{t('education.courses')}</h3>
            <ul className="edu-list">
              {education.courses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="edu-sub">{t('education.certs')}</h3>
            <table className="cert-table">
              <tbody>
                {education.certs.map((cert) => (
                  <tr key={cert.name}>
                    <td className="cert-name">{cert.name}</td>
                    <td className="cert-year">{cert.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
