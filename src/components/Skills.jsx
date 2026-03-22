import { useTranslation } from 'react-i18next'
import { skillGroups } from '../data/jobs.js'
import './Skills.css'

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <h2 className="section-heading">{t('sections.skills')}</h2>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.key} className="skill-group">
              <h3 className="skill-group-title">{t(`skills.${group.key}`)}</h3>
              <table className="skill-table">
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.name}>
                      <td className="skill-name">{item.name}</td>
                      <td className="skill-level skill-level--dots">
                        <span className={`level-dot level--${item.level.replace(/ /g, '-')}`} aria-hidden="true">
                          {item.level === 'very experienced' && '●●●'}
                          {item.level === 'experienced' && '●●○'}
                          {item.level === 'some experience' && '●○○'}
                        </span>
                        <span className="skill-level-text">{t(`skills.levels.${item.level}`)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
