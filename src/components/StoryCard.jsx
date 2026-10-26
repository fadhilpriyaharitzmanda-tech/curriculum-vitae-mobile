import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, ExternalLink, Download, MessageSquare, Send } from 'lucide-react';

export default function StoryCard({
  story,
  currentIndex,
  totalStories,
  onPrev,
  onNext,
  onOpenDrawer,
  onOpenCvModal,
  personalData
}) {
  return (
    <div className="story-body">
      {/* Editorial Top Grid matching Photo 1 exactly */}
      <div className="editorial-hero-grid">
        {/* Giant Number / Watermark in Background (20 on top, 26 below) */}
        <div className="giant-year-container" aria-hidden="true">
          <span className="giant-number">{story.yearFirst}</span>
          <span className="giant-number">{story.yearSecond}</span>
        </div>

        {/* Sub-quote & Archive Pill on Upper Right */}
        <div className="subquote-container">
          <p className="subquote-text">{story.subQuote}</p>

          <button
            type="button"
            className="archive-badge"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDrawer();
            }}
            title="Click to view archive & profile details"
          >
            {story.archiveTag || personalData.archiveBadge}
          </button>

          <span className="timestamp-text">{story.dateTag}</span>
        </div>

        {/* Main Headline on Left: "Jadi nikmati saja rasa sesalnya" */}
        <div className="headline-box">
          <h1 className="main-headline">
            {story.headline.map((line, idx) => (
              <span key={idx} className="headline-line">
                {line}
              </span>
            ))}
          </h1>

          {/* Quotation Mark Icon and Sleek White Horizontal Divider */}
          <div className="quote-divider-wrap">
            <span className="quote-symbol" aria-hidden="true">❝</span>
            <span className="quote-line-bar" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Middle Interactive Content for Portfolio / CV slides */}
      {story.type === 'profile' && (
        <div className="slide-interactive-area" onClick={(e) => e.stopPropagation()}>
          <div className="glass-panel">
            <p style={{ fontSize: '0.8rem', lineHeight: '1.45', color: '#e2e8f0', marginBottom: '12px' }}>
              {story.bioDetails.summary}
            </p>
            <div className="profile-specs-grid">
              {story.bioDetails.highlights.map((item, i) => (
                <div key={i} className="profile-spec-item">
                  <div className="spec-label">{item.label}</div>
                  <div className="spec-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {story.type === 'skills' && (
        <div className="slide-interactive-area" onClick={(e) => e.stopPropagation()}>
          <div className="glass-panel">
            {story.skillsList.map((cat, idx) => (
              <div key={idx} className="skills-category-block">
                <div className="skill-cat-title">{cat.category}</div>
                <div className="skill-chips-row">
                  {cat.items.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {story.type === 'projects' && (
        <div className="slide-interactive-area" onClick={(e) => e.stopPropagation()}>
          <div className="glass-panel" style={{ padding: '12px' }}>
            {story.projectsList.slice(0, 2).map((proj, idx) => (
              <div key={idx} className="project-card-mini">
                <div className="project-title-row">
                  <h3 className="project-title">{proj.title}</h3>
                  <span style={{ fontSize: '0.62rem', color: '#93c5fd' }}>{proj.category}</span>
                </div>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tags">
                  {proj.tags.map((t, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {story.type === 'contact' && (
        <div className="slide-interactive-area" onClick={(e) => e.stopPropagation()}>
          <div className="glass-panel">
            <div className="contact-actions-grid">
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-action-btn primary"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
              <button
                type="button"
                className="contact-action-btn"
                onClick={onOpenCvModal}
              >
                <Download size={16} />
                <span>Lihat CV</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation & Bottom Caption (Matches Photo 1 Exactly) */}
      <footer className="story-footer">
        {/* Previous and Next Navigation Arrows */}
        <div className="story-nav-controls">
          <button
            type="button"
            className="story-nav-btn"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous story slide"
          >
            <span className="nav-btn-label">previous</span>
            <div className="nav-circle-icon">
              <ArrowLeft size={14} />
            </div>
          </button>

          <button
            type="button"
            className="story-nav-btn"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next story slide"
          >
            <span className="nav-btn-label">next</span>
            <div className="nav-circle-icon">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>

        {/* Bottom Quote & Floating Sparkle Squircle Action Button */}
        <div className="caption-and-action-row">
          <div className="bottom-caption-box">
            {story.quoteParagraph?.map((line, idx) => (
              <p key={idx} className="bottom-caption-line">
                {line}
              </p>
            ))}
          </div>

          {/* Squircle Action Button at Bottom Right (Matches Photo 1) */}
          <button
            type="button"
            className="action-squircle-btn"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDrawer();
            }}
            aria-label="Open portfolio drawer and actions"
            title="Open portfolio & CV quick sheet"
          >
            <Sparkles size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
}
