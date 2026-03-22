import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { jobs } from '../data/jobs.js'
import './Experience.css'

function JobRow({ job }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const roleKey = `jobs.${job.id}.role`
  const descKey = `jobs.${job.id}.description`
  const role = t(roleKey)
  const description = t(descKey)

  return (
    <div className={`job${open ? ' job--open' : ''}${job.personal ? ' job--personal' : ''}`}>
      <button
        className="job-row"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="job-toggle">{open ? t('experience.collapse') : t('experience.expand')}</span>
        <span className="job-period">{job.period}</span>
        <span className="job-client">{job.client}</span>
        <span className="job-role">{role}</span>
      </button>

      {open && (
        <div className="job-detail">
          {job.stack.length > 0 && (
            <p className="job-stack">
              <span className="job-stack-label">{t('experience.stack')}</span>{' '}
              {job.stack.join(' · ')}
            </p>
          )}
          <p className="job-description">{description}</p>
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <h2 className="section-heading">{t('sections.experience')}</h2>
        <div className="job-list">
          {jobs.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}
