import React from 'react';
import { X, Download, MessageSquare, Copy, Music, Sparkles, Check, ExternalLink, User } from 'lucide-react';

export default function QuickSheetDrawer({
  isOpen,
  onClose,
  personalData,
  activeFilter,
  onChangeFilter,
  isAudioPlaying,
  onToggleAudio,
  onOpenCvModal,
  onShowToast
}) {
  if (!isOpen) return null;

  const copyPortfolioUrl = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onShowToast("Tautan portofolio berhasil disalin!");
    } else {
      onShowToast("Tautan siap dibagikan!");
    }
  };

  const filterOptions = [
    { id: 'slate', label: 'Photo 1 Mood', desc: 'Misty Blue' },
    { id: 'warm', label: 'Golden Hour', desc: 'Warm Glow' },
    { id: 'noir', label: 'Noir B&W', desc: 'Monochrome' },
    { id: 'cyber', label: 'Midnight', desc: 'Deep Violet' },
  ];

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Drag handle */}
        <div className="drawer-drag-handle" />

        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#94b1c7" />
            <h2 className="drawer-title">Curated Archive & CV</h2>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Profile Card Banner */}
        <div className="drawer-cv-cta-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              flexShrink: 0
            }}>
              <img
                src="/profile-bg.jpg"
                alt="Profile portrait"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#fff' }}>
                {personalData.name}
              </h3>
              <p style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
                {personalData.tagline}
              </p>
              <span style={{
                fontSize: '0.62rem',
                display: 'inline-block',
                marginTop: '4px',
                padding: '2px 8px',
                borderRadius: '999px',
                background: 'rgba(37, 211, 102, 0.2)',
                color: '#4ade80',
                border: '1px solid rgba(74, 222, 128, 0.3)'
              }}>
                ● {personalData.statusBadge}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="drawer-cta-btn btn-download-cv"
            onClick={() => {
              onClose();
              onOpenCvModal();
            }}
          >
            <Download size={16} />
            <span>Lihat / Cetak Curriculum Vitae</span>
          </button>
        </div>

        {/* Atmosphere & Filter Tone Switcher */}
        <div className="drawer-filter-group">
          <div className="drawer-section-label">Pilih Tone Visual & Background</div>
          <div className="filter-preset-row">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`filter-preset-btn ${activeFilter === opt.id ? 'active' : ''}`}
                onClick={() => onChangeFilter(opt.id)}
              >
                <div>{opt.label}</div>
                <div style={{ fontSize: '0.58rem', opacity: 0.7 }}>{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Ambient Lo-fi Audio Controls */}
        <div className="drawer-filter-group">
          <div className="drawer-section-label">Suasana Musik (Ambient Sound)</div>
          <button
            type="button"
            className="drawer-cta-btn"
            style={{
              background: isAudioPlaying ? 'rgba(108, 140, 163, 0.35)' : 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#fff',
              justifyContent: 'space-between'
            }}
            onClick={onToggleAudio}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Music size={16} />
              <span>{isAudioPlaying ? 'Ambient Chill Beats Aktif' : 'Nyalakan Musik Latar'}</span>
            </div>
            <span style={{ fontSize: '0.7rem', color: isAudioPlaying ? '#4ade80' : '#94a3b8' }}>
              {isAudioPlaying ? '● Playing' : '○ Paused'}
            </span>
          </button>
        </div>

        {/* Direct Quick Actions */}
        <div className="drawer-section-label">Aksi & Kontak Langsung</div>
        <div className="contact-actions-grid" style={{ marginBottom: '12px' }}>
          <a
            href={personalData.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-action-btn primary"
          >
            <MessageSquare size={16} />
            <span>Chat WhatsApp</span>
          </a>
          <button
            type="button"
            className="contact-action-btn"
            onClick={copyPortfolioUrl}
          >
            <Copy size={16} />
            <span>Salin Link</span>
          </button>
        </div>
      </div>
    </div>
  );
}
