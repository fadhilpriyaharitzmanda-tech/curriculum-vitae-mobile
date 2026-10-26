import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export default function CvModal({ isOpen, onClose, personalData }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <div className="cv-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="cv-modal-top-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0f172a' }}>
              Curriculum Vitae — {personalData.name}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              onClick={handlePrint}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                background: '#0f172a',
                color: '#fff',
                fontSize: '0.78rem',
                fontWeight: '600'
              }}
            >
              <Printer size={14} />
              <span>Cetak / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#e2e8f0',
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Tutup CV"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="cv-modal-content">
          {/* Header */}
          <div className="cv-header-section">
            <h1 className="cv-person-name">{personalData.name}</h1>
            <p className="cv-person-role">{personalData.tagline}</p>
            <div className="cv-contacts-row">
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={13} /> {personalData.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Mail size={13} /> {personalData.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Phone size={13} /> {personalData.phone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Globe size={13} /> {personalData.archiveBadge}
              </span>
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div>
            <h2 className="cv-section-title">Ringkasan Profesional</h2>
            <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: '1.5' }}>
              {personalData.bio} Memiliki pengalaman dalam merancang antarmuka website berbasis React JS dengan pendekatan mobile-first, performa tinggi, dan ketelitian desain visual editorial. Terbiasa berkolaborasi secara agile dan mampu menerjemahkan kebutuhan bisnis menjadi solusi digital yang elegan.
            </p>
          </div>

          {/* Pengalaman Kerja */}
          <div>
            <h2 className="cv-section-title">Pengalaman Kerja</h2>

            <div className="cv-experience-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="cv-exp-role">Frontend Web Developer (Freelance / Contract)</span>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>2023 — Sekarang</span>
              </div>
              <div className="cv-exp-company">Digital Creative Agency & Independent Projects</div>
              <p className="cv-exp-desc">
                • Mengembangkan aplikasi web responsif menggunakan React JS, modern CSS, dan arsitektur komponen modular.<br />
                • Mengoptimalkan tampilan layar smartphone dan tablet dengan skor responsivitas Google Lighthouse di atas 95.<br />
                • Menerapkan animasi mikro dan interaksi sentuh (touch gestures) yang halus untuk meningkatkan retensi pengguna.
              </p>
            </div>

            <div className="cv-experience-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="cv-exp-role">Junior UI Developer & Web Designer</span>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>2021 — 2023</span>
              </div>
              <div className="cv-exp-company">Tech Studio Creative</div>
              <p className="cv-exp-desc">
                • Merancang mock up dan prototipe di Figma, kemudian mengimplementasikannya ke dalam kode HTML5/CSS3/JavaScript yang bersih.<br />
                • Menangani integrasi API RESTful dan penyesuaian tata letak lintas peramban (cross-browser compatibility).
              </p>
            </div>
          </div>

          {/* Pendidikan */}
          <div>
            <h2 className="cv-section-title">Pendidikan</h2>
            <div className="cv-experience-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span className="cv-exp-role">{personalData.education}</span>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Lulus dengan Pujian</span>
              </div>
              <div className="cv-exp-company">Universitas Terkemuka di Indonesia</div>
              <p className="cv-exp-desc">
                Fokus bidang Rekayasa Perangkat Lunak, Interaksi Manusia & Komputer (HCI), dan Pengembangan Aplikasi Web.
              </p>
            </div>
          </div>

          {/* Keahlian Utama */}
          <div>
            <h2 className="cv-section-title">Keahlian & Kompetensi Teknis</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', fontSize: '0.8rem', color: '#334155' }}>
              <div>• <strong>Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Vite</div>
              <div>• <strong>Desain:</strong> Mobile-First UI/UX, Glassmorphism, Figma</div>
              <div>• <strong>Tools:</strong> Git, GitHub, VS Code, Chrome DevTools</div>
              <div>• <strong>Bahasa:</strong> Bahasa Indonesia (Native), English (Working Proficiency)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
