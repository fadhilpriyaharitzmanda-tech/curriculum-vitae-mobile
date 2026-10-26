import React, { useState, useRef } from 'react';
import { aestheticAudio } from './utils/audioPlayer';
import { Play, Pause } from 'lucide-react';
import './App.css';

export default function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const aboutSectionRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleAudio = () => {
    const status = aestheticAudio.toggle();
    setIsAudioPlaying(status);
    showToast(status ? "Ambient sound: ON 🎵" : "Ambient sound: OFF");
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  return (
    <div className="mobile-shell">
      {/* ================================================================
          SECTION 1: HERO POSTER (Foto 1 Style, Bersih & Sejajar)
          ================================================================ */}
      <section className="hero-section">
        {/* Latar Belakang Foto Lelaki dengan Gradien Langit */}
        <div className="hero-background" aria-hidden="true">
          <img
            src="/profile-bg.jpg"
            alt="Portrait background"
            className="hero-image"
            loading="eager"
          />
          <div className="hero-gradient-overlay" />
        </div>

        {/* Header Navigasi Atas */}
        <header className="hero-nav">
          <button
            type="button"
            className="nav-btn-audio"
            onClick={handleToggleAudio}
            title={isAudioPlaying ? "Pause audio" : "Play ambient vibe"}
          >
            {isAudioPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
            <span>daily</span>
          </button>

          <nav className="nav-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="nav-link">
              instagram
            </a>
            <span className="nav-link muted">story</span>
            <button type="button" className="nav-link nav-btn-about" onClick={scrollToAbout}>
              tentang
            </button>
          </nav>
        </header>

        {/* Konten Tipografi Dua Kolom: Kiri (Headline) & Kanan (Subquote) Sejajar */}
        <div className="hero-main-row">
          {/* Sisi Kiri: Headline Tebal & Garis Kutipan */}
          <div className="hero-col-left">
            <h1 className="hero-headline">
              Jadi<br />
              nikmati<br />
              saja rasa<br />
              sesalnya
            </h1>
            <div className="hero-quote-bar-wrap">
              <span className="hero-quote-icon" aria-hidden="true">❝</span>
              <span className="hero-quote-line" aria-hidden="true" />
            </div>
          </div>

          {/* Sisi Kanan: Berada di Bawah Button 'tentang' & Sejajar Tinggi dengan Headline */}
          <div className="hero-col-right">
            <p className="hero-subquote">
              -kesempatan memang datang dua kali sih, tapi gak akan sehebat yang pertama.
            </p>
            <div className="hero-date">
              JUMAT, 13/02/26
            </div>
          </div>
        </div>

        {/* Ruang Tengah Bersih untuk Foto */}
        <div className="hero-spacer" onClick={scrollToAbout} />

        {/* Kaki Hero: Kutipan Bawah */}
        <footer className="hero-footer">
          <p className="hero-footer-line">
            "Mau terus disesali, mau terus diratapi, situasinya gak akan berubah. Semesta gak akan nunggu lo baik-baik aja untuk tetap berjalan."
          </p>
          <p className="hero-footer-line">
            "Jadi.. nikmati aja."
          </p>
        </footer>
      </section>

      {/* ================================================================
          SECTION 2: HALAMAN TENTANG AKU (Font Ramping, Hitam, Gaya Story IG)
          ================================================================ */}
      <section className="about-section" id="tentang-aku" ref={aboutSectionRef}>
        <div className="about-container">
          {/* Judul Pembuka Gaya Story IG */}
          <div className="about-header">
            <h2 className="about-headline">
              Bukan sekadar<br />
              tentang kode,<br />
              tapi tentang rasa<br />
              &amp; dedikasi.
            </h2>
            <div className="about-quote-bar-wrap">
              <span className="about-quote-icon" aria-hidden="true">❝</span>
              <span className="about-quote-line" aria-hidden="true" />
            </div>
          </div>

          {/* Paragraf Cerita Diri (Warna Hitam) */}
          <div className="about-body">
            <p className="about-text">
              Halo, kenalkan saya <strong>Fajar Pratama</strong>. Saya adalah seorang web developer dan perancang antarmuka yang menyukai keindahan visual minimalis dan kenyamanan pengguna saat berselancar di layar ponsel.
            </p>
            <p className="about-text">
              Bagi saya, mendesain dan menulis kode mirip seperti merangkai cerita di Instagram: harus punya jiwa, tidak boleh sesak, dan harus memberi ruang bagi setiap elemen untuk bernapas dengan tenang.
            </p>
            <p className="about-text">
              Fokus utama saya adalah membangun website portofolio, landing page, dan aplikasi web berbasis <strong>React JS</strong> dengan sentuhan estetika editorial modern. Saya percaya bahwa kesederhanaan adalah bentuk kecanggihan yang paling murni.
            </p>
          </div>

          {/* Tautan Kontak Sederhana */}
          <div className="about-links">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Fajar,%20saya%20tertarik%20dengan%20portofolio%20Anda"
              target="_blank"
              rel="noreferrer"
              className="about-link"
            >
              WhatsApp ↗
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="about-link"
            >
              Instagram ↗
            </a>
            <a
              href="mailto:fajar.pratama@example.com"
              className="about-link"
            >
              Email ↗
            </a>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-box" role="status">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
