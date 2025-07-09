import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';

// Slider'da kullanılacak örnek fotoğraflar (public klasörüne eklenmeli)
const sliderImages = [
  '/pic9.jpeg',
  '/pic5.jpeg',
  '/pic7.jpeg'
];

// Slider başlık ve açıklamaları
const sliderTexts = [
  {
    title: <><span style={{fontWeight: 700}}>7/24 </span><span className="highlight-green">YOL YARDIMI</span></>,
    desc: <>Günün her saatinde bizlere<br/> ulaşmanız mümkün kılıyoruz.</>
  },
  {
    title: <><span style={{fontWeight: 700}}>Hızlı </span><span className="highlight-green">ÇEKİCİ HİZMETİ</span></>,
    desc: <>Aracınız nerede olursa olsun, en kısa sürede yanınızdayız.</>
  },
  {
    title: <><span style={{fontWeight: 700}}>Profesyonel </span><span className="highlight-green">OTO KURTARMA</span></>,
    desc: <>Deneyimli ekibimizle güvenli ve sigortalı taşıma.</>
  }
];

// Üst iletişim barı için ek
function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span><span role="img" aria-label="mail">✉️</span> furkanersoyfurkan@gmail.com</span>
        <span style={{marginLeft: '18px'}}><span role="img" aria-label="phone">📞</span> 0531 221 32 50</span>
        <a href="#" aria-label="facebook" className="topbar-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="instagram" className="topbar-icon"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="topbar-right"></div>
    </div>
  );
}

function Home() {
  // Slider için state ve otomatik geçiş
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  // Slider okları
  const prevSlide = () => setCurrent((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % sliderImages.length);

  return (
    <>
      <div className="home-hero">
        {/* Slider arka planı */}
        <div className="slider-bg" style={{backgroundImage: `url(${sliderImages[current]})`}}>
          <div className="slider-overlay">
            <div className="slider-content" key={current}>
              <h2 className="slider-title">
                {sliderTexts[current].title}
              </h2>
              <div className="slider-desc">
                {sliderTexts[current].desc}
              </div>
            </div>
            {/* Slider okları */}
            <button className="slider-arrow left" onClick={prevSlide} aria-label="Önceki">&#60;</button>
            <button className="slider-arrow right" onClick={nextSlide} aria-label="Sonraki">&#62;</button>
            {/* Slider noktaları */}
            <div className="slider-dots">
              {sliderImages.map((_, idx) => (
                <span key={idx} className={idx === current ? 'dot active' : 'dot'} onClick={() => setCurrent(idx)}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Hizmet Kartları */}
      <ServicesGrid />
      {/* Tanıtım ve Referans */}
      <AboutShowcase />
    </>
  );
}

/** Hakkımızda */
function About() {
  return (
    <div className="aboutpage-section">
      <div className="about-breadcrumb">
        <a href="/" className="about-breadcrumb-link">Anasayfa</a> <span className="about-breadcrumb-sep">/</span> <span className="about-breadcrumb-current">Hakkımızda</span>
      </div>
      <h1 className="aboutpage-title">HAKKIMIZDA</h1>
      <div className="about-alert">
        <a href="tel:05312213250" style={{
          color: 'inherit',
          textDecoration: 'none',
          display: 'block',
          width: '100%',
          height: '100%'
        }}>
          ACİL ÇEKİCİ ARA
        </a>
      </div>
      <div className="aboutpage-showcase">
        <div className="aboutpage-img">
          <img src="/pic5.jpeg" alt="ERSOY oto kurtarma Araç" />
        </div>
        <div className="aboutpage-info">
          <h2 className="aboutpage-heading">Düzce Ersoy Oto Kurtarıcı, Çekici ve Yol Yardım</h2>
          <ul className="aboutpage-list">
            <li><span className="aboutpage-tick">✔</span> Her türlü oto kurtarma, oto çekici ve yol yardım hizmeti ne uygun fiyatlarla verilmektedir.</li>
            <li><span className="aboutpage-tick">✔</span> Hizmette kalite anlayışından ödün vermeyen firmamız profesyonel ekibi ile sizlere hizmet vermekten gurur duyar.</li>
            <li><span className="aboutpage-tick">✔</span> Gece gündüz demeden haftanın 7 günü ve günün 24 saati bir telefon kadar uzağınızdayız.</li>
            <li><span className="aboutpage-tick">✔</span> Güvenebileceğiniz bir yol yardım hizmeti sunmaktayız.</li>
          </ul>
          <div className="aboutpage-desc">
            Düzce şehir merkezinde, ilçelerimizde ve çevre illerde oto kurtarma, yol yardım, çekici hizmetleri, traktör taşıma, motosiklet taşıma, ticari araç, kazalı araç, iş makinaları, taşıma tamir / bakım ve servise götürmek için bize 0531 221 32 50 numaralı telefonumuzdan bize ulaşabilirsiniz.
          </div>
          <div className="aboutpage-slogan">SİZ VARSINIZ DİYE BİZ VARIZ!<br/><span style={{fontWeight:400, fontSize:'1rem'}}>– ERSOY oto kurtarma</span></div>
        </div>
      </div>
    </div>
  );
}

/** Hizmetlerimiz */
function Services() {
  const services = [
    {
      icon: (
        // Oto çekici kamyon SVG
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="36" width="36" height="8" rx="2" fill="#232323"/>
          <rect x="10" y="28" width="12" height="8" rx="2" fill="#FFC107"/>
          <rect x="28" y="20" width="12" height="16" rx="2" fill="#232323"/>
          <circle cx="40" cy="44" r="4" fill="#FFC107"/>
          <circle cx="16" cy="44" r="4" fill="#232323"/>
          <rect x="38" y="32" width="8" height="4" rx="2" fill="#FFC107"/>
        </svg>
      ),
      title: 'OTO ÇEKİCİ HİZMETİ',
      desc: 'Oto çekici hizmeti veren firmamız araçlarınızı kendi aracı gibi görür ve özenle taşıma gayretiyle sizlere yardımcı olur.'
    },
    {
      icon: (
        // Acil yol yardımı için uyarı ve araç SVG
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="36" width="32" height="8" rx="2" fill="#232323"/>
          <rect x="20" y="24" width="12" height="8" rx="2" fill="#232323"/>
          <polygon points="28,16 32,24 24,24" fill="#FFC107"/>
          <circle cx="36" cy="44" r="4" fill="#232323"/>
          <circle cx="24" cy="44" r="4" fill="#FFC107"/>
        </svg>
      ),
      title: 'ACİL YOL YARDIMI',
      desc: 'Aracınız nerede kaldıysa bizi arayın kurtaralım. Bizi günün her saatinde arayabilirsiniz.'
    },
    {
      icon: (
        // Motosiklet taşıyan çekici SVG
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="36" width="32" height="8" rx="2" fill="#232323"/>
          <rect x="28" y="28" width="12" height="8" rx="2" fill="#232323"/>
          <rect x="12" y="28" width="12" height="8" rx="2" fill="#FFC107"/>
          <circle cx="36" cy="44" r="4" fill="#232323"/>
          <circle cx="16" cy="44" r="4" fill="#FFC107"/>
          <path d="M18 32 Q20 28 24 32 Q28 36 32 32" stroke="#232323" strokeWidth="2" fill="none"/>
          <circle cx="22" cy="32" r="2" fill="#232323"/>
        </svg>
      ),
      title: 'MOTORSİKLET TAŞIMA',
      desc: 'Motosiklet taşımalarınız için ERSOY oto kurtarma olarak 7/24 hizmet vermekteyiz.'
    }
  ];
  return (
    <div className="servicespage-section">
      <div className="services-breadcrumb">
        <a href="/" className="services-breadcrumb-link">Anasayfa</a> <span className="services-breadcrumb-sep">/</span> <span className="services-breadcrumb-current">Hizmetlerimiz</span>
      </div>
      <h1 className="servicespage-title">HİZMETLERİMİZ</h1>
      <div className="servicespage-grid">
        {services.map((srv, i) => (
          <div key={i} className="servicespage-card">
            <div className="servicespage-icon">{srv.icon}</div>
            <div className="servicespage-title2">{srv.title}</div>
            <div className="servicespage-desc">{srv.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contactpage-section">
      <div className="contact-breadcrumb">
        <a href="/" className="contact-breadcrumb-link">Anasayfa</a> <span className="contact-breadcrumb-sep">/</span> <span className="contact-breadcrumb-current">İletişim</span>
      </div>
      <h1 className="contactpage-title">İLETİŞİM</h1>
      <div className="contactpage-cards">
        <div className="contactpage-card">
          <div className="contactpage-icon">
            <svg width="40" height="40" fill="none" stroke="#4A4F5A" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
          </div>
          <div className="contactpage-card-title">ADRES</div>
          <div className="contactpage-card-desc">2613. Sk. 47<br/>81040 Düzce Merkez Düzce<br/>Türkiye</div>
        </div>
        <div className="contactpage-card">
          <div className="contactpage-icon">
            <svg width="40" height="40" fill="none" stroke="#4A4F5A" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
          </div>
          <div className="contactpage-card-title">E-POSTA</div>
          <div className="contactpage-card-desc">furkanersoyfurkan@gmail.com</div>
        </div>
        <div className="contactpage-card">
          <div className="contactpage-icon">
            <svg width="40" height="40" fill="none" stroke="#4A4F5A" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div className="contactpage-card-title">TELEFON</div>
          <div className="contactpage-card-desc">0531 221 32 50</div>
        </div>
      </div>
      <div className="contactpage-bottom">
        <div className="contactpage-map">
          <iframe
            title="Harita"
            src="https://www.google.com/maps?q=2613.+Sk.+47,+81040+D%C3%BCzce+Merkez+D%C3%BCzce,+T%C3%BCrkiye&output=embed"
            width="100%"
            height="260"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="contactpage-form">
          <div className="contactpage-form-row">
            <input type="text" placeholder="Adınız" required />
            <input type="email" placeholder="E-Posta Adresiniz" required />
          </div>
          <input type="text" placeholder="Konu" required />
          <textarea placeholder="Mesajınız" rows={4} required></textarea>
          <button type="submit" className="contactpage-btn">GÖNDER</button>
        </form>
      </div>
    </div>
  );
}

// Footer bileşeni
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-col">
        <div className="footer-title">Hızlı Linkler</div>
        <ul className="footer-links">
          <li><a href="/">ANASAYFA</a></li>
          <li><a href="/hakkimizda">HAKKIMIZDA</a></li>
          <li><a href="/hizmetlerimiz">HİZMETLERİMİZ</a></li>
          <li><a href="/galeri">GALERİ</a></li>
          <li><a href="/iletisim">İLETİŞİM</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <div className="footer-title">Bize Ulaşın</div>
        <div className="footer-contact">
          2613. Sk. 47<br/>
          81040 Düzce Merkez Düzce<br/>
          Türkiye<br/><br/>
          <strong>Telefon:</strong> 0531 221 32 50<br/>
          <strong>E-Posta:</strong> furkanersoyfurkan@gmail.com
        </div>
      </div>
      <div className="footer-col">
        <div className="footer-title">ERSOY oto kurtarma</div>
        <div className="footer-contact">
          Düzce şehir merkezinde, ilçelerimizde ve çevre illerde oto kurtarma, yol yardım, çekici hizmetleri, traktör taşıma, motosiklet taşıma, ticari araç, kazalı araç, iş makinaları, taşıma tamir / bakım ve servise götürmek için bize 0531 221 32 50 numaralı telefonumuzdan bize ulaşabilirsiniz.
        </div>
        <div className="footer-social">
          <a href="#" aria-label="facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

// Hizmet Kartları Bileşeni
function ServicesGrid() {
  const services = [
    {
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M16 11V7a4 4 0 0 0-8 0v4"/></svg>,
      title: 'YAKIT İKMALİ',
      desc: 'ERSOY oto kurtarma yakıtınız bittiğinde de yanınızda!',
      highlight: false
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M16 11V7a4 4 0 0 0-8 0v4"/><path d="M6 19h12"/></svg>,
      title: 'ARIZALI ARAÇ ÇEKİMİ',
      desc: 'Aracınız nerede kaldıysa bizi arayın kurtaralım. Bizi günün her saatinde arayabilirsiniz.',
      highlight: false
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/></svg>,
      title: 'YOL YARDIMI',
      desc: 'Her türlü probleminizde yanınızdayız.',
      highlight: false
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><line x1="6" y1="11" x2="6" y2="13"/><line x1="18" y1="11" x2="18" y2="13"/></svg>,
      title: 'AKÜ TAKVİYESİ',
      desc: 'Akünüz bittiğinde bizlere ulaşabilirsiniz.',
      highlight: false
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"/></svg>,
      title: 'KAZALI ARAÇ ÇEKİMİ',
      desc: 'Kazalı araçlarınızı en hızlı ve en güvenli şekilde çekiyoruz.',
      highlight: false
    },
    {
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>,
      title: 'LASTİKÇİYE ARAÇ ÇEKİMİ',
      desc: 'Lastiğiniz mi patladı? Dert etmeyin, hemen bizi arayın.',
      highlight: false
    }
  ];
  return (
    <div className="services-grid-section">
      <div className="services-grid">
        {services.map((srv, i) => (
          <div key={i} className={srv.highlight ? 'service-card highlight' : 'service-card'}>
            <div className="service-icon">{srv.icon}</div>
            <div className="service-title">{srv.title}</div>
            <div className="service-desc">{srv.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tanıtım ve Referans Bileşeni
function AboutShowcase() {
  return (
    <div className="about-showcase-section">
      <div className="about-showcase">
        <div className="about-img">
          <img src="/pic5.jpeg" alt="ERSOY oto kurtarma Araçlar" />
        </div>
        <div className="about-info">
          <h2 className="about-title">Düzce Ersoy Oto Kurtarıcı, Çekici ve Yol Yardım</h2>
          <ul className="about-list">
            <li><span className="about-tick">✔</span> Her türlü oto kurtarma, oto çekici ve yol yardım hizmeti ne uygun fiyatlarla verilmektedir.</li>
            <li><span className="about-tick">✔</span> Hizmette kalite anlayışından ödün vermeyen firmamız profesyonel ekibi ile sizlere hizmet vermekten gurur duyar.</li>
            <li><span className="about-tick">✔</span> Gece gündüz demeden haftanın 7 günü ve günün 24 saati bir telefon kadar uzağınızdayız.</li>
            <li><span className="about-tick">✔</span> Güvenebileceğiniz bir yol yardım hizmeti sunmaktayız.</li>
          </ul>
          <div className="about-desc">
            Düzce şehir merkezinde, ilçelerimizde ve çevre illerde oto kurtarma, yol yardım, çekici hizmetleri, traktör taşıma, motosiklet taşıma, ticari araç, kazalı araç, iş makinaları, taşıma tamir / bakım ve servise götürmek için bize 0531 221 32 50 numaralı telefonumuzdan bize ulaşabilirsiniz.
          </div>
          <div className="about-slogan">SİZ VARSINIZ DİYE BİZ VARIZ!<br/><span style={{fontWeight:400, fontSize:'1rem'}}>– ERSOY oto kurtarma</span></div>
          {/* Anahtar kelimeler SEO için */}
          <div style={{fontSize: '0.30rem', color: '#bfc2c7', marginTop: '20px', fontStyle: 'italic'}}>
            Düzce düzcede Oto Çekici Firmaları, Düzce En Yakın Oto Çekici Firmaları, Düzce düzcede En Yakın Oto Kurtarma Firmaları, Düzce düzcede Oto Kurtarma Düzce düzcede Oto Çekici, Düzce Düzcede En Yakın 7 24 Oto Çekici Yol Yardım Firmaları, Düzce Düzcede En Yakın 7 24 Oto Kurtarma Yol Yardım Firmaları, Düzce Düzcede Oto Yol Yardım Kurtarıcı Firmaları, Düzce Düzcede En Yakın Otoban Oto Çekici Yol Yardım Firmaları, Düzce Düzcede Oto Kurtarıcı Yol Yardım Firmaları, Düzce Düzcede Oto Kurtarma Yol Yardım Firmaları, Düzce Düzcede Otoban Çekici Yol Yardım Firmaları, En Yakın Otoban Çekici Yol Yardım Firmaları, Düzce Düzcede En Yakın Otoban Kurtarma Yol Yardım Firmaları, Düzce Düzcede Otoyol Yol Yardım Kurtarma Firmaları, Düzce Düzcede Otoban Çekici Yol Yardım Firmaları, DÜZCE OTO KURTARMA DÜZCE ÇEKİCİ DÜZCE KURTARICI, düzce oto kurtarma, düzce oto kurtarıcı, düzce oto çekici, düzce oto kurtarma firmaları, düzce oto çekici firmaları, düzce oto yol yardım çekici firmaları, düzce oto kurtarıcı firmaları,Düzce düzcede En Yakın Oto Çekici, Düzce düzcede En Yakın Oto Kurtarma, Düzce düzcede Oto Yol Yardım Kurtarıcı Firması, Düzce düzcede En Yakın Otoban Oto Çekici, Düzce düzcede Oto Kurtarıcılar Düzce düzcede Oto Kurtarma Firmaları, Düzce Akçakoca Yolu En Yakın Oto Kurtarma Yol Yardım Firmaları, Düzce Kaynaşlı En Yakın Oto Kurtarma Firmaları, Düzce En Yakın Oto Kurtarma, Düzce Kaynaşlı Oto Kurtarma Yol Yardım Firmaları, Düzce Bolu Dağı Oto Kurtarma Yol Yardım Firmaları, Düzce Gümüşova Oto Kurtarma Yol Yardım Firmaları, Düzce Kaynaşlı Oto Kurtarma Yol Yardım Firmaları, Düzce Yığılca Oto Kurtarma Yol Yardım Firmaları, Düzce Cumayeri Oto Kurtarma Yol Yardım Firmaları, Düzce Çilimli Oto Kurtarma Yol Yardım Firmaları, Düzce Otoban Tesisler Oto Kurtarma Yol Yardım Firmaları, Düzce Kabalak Rampası Oto Kurtarma Yol Yardım Firmaları, Düzce Oto Kurtarıcıları, düzce en yakın oto kurtarma yol yardım firmaları, düzce en yakında oto kurtarma firmaları, düzce oto kurtarma yol yardım firmaları, düzce en yakın oto çekici yol yardım firmaları, düzce en yakın oto kurtarıcı yol yardım firmaları, düzce en yakın çekici yol yardım firmaları, düzce en yakın otoban oto yol kurtarma firmaları, düzce otobana en yakın oto kurtarma firmaları, düzce otobana en yakın oto çekici firmaları, düzce otobana en yakın kurtarıcı firmaları, düzce merkezde en yakın oto kurtarma firmaları
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const images = [
    '/pic1.jpeg',
    '/pic2.jpeg',
    '/pic3.jpeg',
    '/pic4.jpeg',
    '/pic6.jpeg',
    '/pic8.jpeg',
    '/pic10.jpeg',
    '/pic11.jpeg',
    '/pic12.jpeg',
    '/pic13.jpeg',
    '/pic14.jpeg',
    '/pic15.jpeg',
    '/pic16.jpeg',
    '/pic17.jpeg',
    '/pic18.jpeg',
    '/pic19.jpeg',
    '/pic20.jpeg',
    '/pic21.jpeg',
    '/pic22.jpeg',
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };
  return (
    <div className="gallery-section">
      <div className="gallery-breadcrumb">
        <a href="/" className="gallery-breadcrumb-link">Anasayfa</a> <span className="gallery-breadcrumb-sep">/</span> <span className="gallery-breadcrumb-current">Galeri</span>
      </div>
      <h1 className="gallery-title">GALERİ</h1>
      <h2 className="gallery-subtitle">Fotoğraflarımızı görüntüleyin.</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-imgbox">
            <img src={img} alt={`galeri${i+1}`} className="gallery-img" onClick={() => openModal(img)} />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="gallery-modal" onClick={closeModal}>
          <img src={modalImg} alt="tam ekran" className="gallery-modal-img" />
        </div>
      )}
    </div>
  );
}

// Her sayfanın altına sabit çağrı kutusu
function CallToAction() {
  return (
    <div className="calltoaction-bar">
      <span className="calltoaction-text">Yolda mı kaldınız? <b>Hemen arayın:</b></span>
      <a className="calltoaction-phone" href="tel:05312213250">0531 221 32 50</a>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="App">
      <TopBar />
      <nav className="navbar">
        <div className="nav-logo">
          <img
            src="/logo22.png"
            alt="ERSOY oto kurtarma logo"
            style={{
              height: '44px',
              maxWidth: '120px',
              objectFit: 'contain',
              marginRight: '0px'
            }}
          />
          <span className="logo-text">ERSOY oto kurtarma</span>
        </div>
        {/* Hamburger ikon - sadece mobilde görünür */}
        <button className="hamburger-menu" aria-label="Menüyü Aç" onClick={() => setMenuOpen(true)}>
          <span></span><span></span><span></span>
        </button>
        {/* Masaüstü menü */}
        <div className="nav-links">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>ANASAYFA</NavLink>
          <NavLink to="/hakkimizda" className={({isActive}) => isActive ? 'active' : ''}>HAKKIMIZDA</NavLink>
          <NavLink to="/hizmetlerimiz" className={({isActive}) => isActive ? 'active' : ''}>HİZMETLERİMİZ</NavLink>
          <NavLink to="/galeri" className={({isActive}) => isActive ? 'active' : ''}>GALERİ</NavLink>
          <NavLink to="/iletisim" className={({isActive}) => isActive ? 'active' : ''}>İLETİŞİM</NavLink>
        </div>
        {/* Mobil slide menü */}
        <div className={menuOpen ? 'mobile-slide-menu open' : 'mobile-slide-menu'}>
          <button className="close-slide-menu" aria-label="Menüyü Kapat" onClick={() => setMenuOpen(false)}>&times;</button>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>ANASAYFA</NavLink>
          <NavLink to="/hakkimizda" onClick={() => setMenuOpen(false)}>HAKKIMIZDA</NavLink>
          <NavLink to="/hizmetlerimiz" onClick={() => setMenuOpen(false)}>HİZMETLERİMİZ</NavLink>
          <NavLink to="/galeri" onClick={() => setMenuOpen(false)}>GALERİ</NavLink>
          <NavLink to="/iletisim" onClick={() => setMenuOpen(false)}>İLETİŞİM</NavLink>
        </div>
        {menuOpen && <div className="slide-menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetlerimiz" element={<Services />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
