import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.css'

// Contact info is assembled client-side to reduce bot harvesting.
// Split into parts that are joined at render time.
const EMAIL_PARTS = ['niklas', '@', 'forstberg', '.', 'net']
const LINKEDIN_PARTS = ['linkedin', '.com', '/in/', 'niklasforstberg']

export default function Contact() {
  const { t } = useTranslation()
  const [email, setEmail] = useState(null)
  const [linkedin, setLinkedin] = useState(null)

  useEffect(() => {
    setEmail(EMAIL_PARTS.join(''))
    setLinkedin(LINKEDIN_PARTS.join(''))
  }, [])

  return (
    <section id="contact" className="section section--last">
      <div className="section-inner">
        <h2 className="section-heading">{t('sections.contact')}</h2>
        <p className="contact-intro">{t('contact.intro')}</p>
        <table className="contact-table">
          <tbody>
            <tr>
              <td className="contact-label">email</td>
              <td className="contact-value">
                {email ? (
                  <a href={`mailto:${email}`}>{email}</a>
                ) : (
                  <span className="contact-loading">···</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="contact-label">linkedin</td>
              <td className="contact-value">
                {linkedin ? (
                  <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer">
                    {linkedin}
                  </a>
                ) : (
                  <span className="contact-loading">···</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="contact-label">location</td>
              <td className="contact-value">Sweden</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
