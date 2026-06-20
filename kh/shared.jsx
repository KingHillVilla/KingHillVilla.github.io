/* King Hill Villa: shared helpers, hooks, section scaffolding, line icons */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- responsive ---- */
function useIsMobile(bp = 860) {
  const [m, setM] = useState(typeof window !== 'undefined' ? window.innerWidth <= bp : false);
  useEffect(() => {
    const on = () => setM(window.innerWidth <= bp);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, [bp]);
  return m;
}

/* ---- scroll reveal ---- */
function Reveal({ children, delay = 0, as = 'div', style, className = '', ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { el.classList.add('kh-in'); io.unobserve(el); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={'kh-reveal ' + className} style={{ transitionDelay: delay + 'ms', ...style }} {...rest}>
      {children}
    </Tag>
  );
}

/* ---- layout ---- */
const KH = {
  maxW: 1180,
  pad: 'clamp(22px, 5vw, 56px)',
};

function Section({ id, bg = 'var(--kh-ivory-white)', py = 'clamp(72px, 9vw, 128px)', children, style }) {
  return (
    <section id={id} style={{ background: bg, padding: `${py} ${KH.pad}`, position: 'relative', ...style }}>
      <div style={{ maxWidth: KH.maxW, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

/* ---- section heading (Eyebrow + serif title + optional lede) ---- */
function SectionHeading({ eyebrow, title, lede, align = 'center', dark = false, ledeMax = 620, eyebrowTone }) {
  const { Eyebrow } = window.DesignSystem_cf87b7;
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? 760 : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      <Reveal>
        <Eyebrow align={align === 'center' ? 'center' : 'left'} tone={eyebrowTone || (dark ? 'onDark' : 'gold')}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.12, letterSpacing: '0.02em',
          color: dark ? 'var(--kh-ivory-white)' : 'var(--kh-ocean-blue)',
          margin: '18px 0 0',
        }}>{title}</h2>
      </Reveal>
      {lede && (
        <Reveal delay={140}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.7,
            color: dark ? 'rgba(248,244,236,0.82)' : 'var(--text-muted)',
            maxWidth: ledeMax, margin: align === 'center' ? '20px auto 0' : '20px 0 0',
          }}>{lede}</p>
        </Reveal>
      )}
    </div>
  );
}

/* Thin-stroke line icons (1.5px, ocean blue), a utility set.
   Substitution flag: brand guide shipped no vector icons; these are hand-built. */
function LineIcon({ name, size = 24, color = 'var(--kh-ocean-blue)', stroke = 1.6, style }) {
  const p = {
    bed:        <><path d="M3 8.5V18M21 13v5M3 13h18M3 16h18M6 13v-1.5A1.5 1.5 0 0 1 7.5 10h9a1.5 1.5 0 0 1 1.5 1.5V13"/></>,
    bath:       <><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z"/><path d="M6 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2"/><path d="M9 7h2"/><path d="M7 19l-1 2M18 19l1 2"/></>,
    guests:     <><circle cx="8" cy="9" r="3"/><path d="M2.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 7.2a3 3 0 0 1 0 5.6"/><path d="M16.5 13.6A5.5 5.5 0 0 1 21.5 19"/></>,
    pool:       <><path d="M3 19c1.5 0 1.5-1.2 3-1.2s1.5 1.2 3 1.2 1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2"/><path d="M3 15c1.5 0 1.5-1.2 3-1.2s1.5 1.2 3 1.2 1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2"/><path d="M8 13V6a2 2 0 0 1 4 0M12 11V6"/></>,
    hottub:     <><path d="M4 11h16v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6Z"/><path d="M8 11V7a2 2 0 0 1 4 0v1"/><path d="M9 4.5c.8.6.8 1.4 0 2M13 4.5c.8.6.8 1.4 0 2M17 4.5c.8.6.8 1.4 0 2"/></>,
    terrace:    <><path d="M3 21h18M5 21V10M19 21V10M5 10h14M5 10 12 4l7 6"/><path d="M9 21v-5h6v5"/></>,
    kitchen:    <><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 3v6M8 9h-.01M12 3v18M4 14h16"/></>,
    wifi:       <><path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0"/><circle cx="12" cy="18.5" r="1"/></>,
    ac:         <><rect x="3" y="5" width="18" height="7" rx="1.5"/><path d="M6 8.5h7M6 16v1M10 16v2M14 16v1M18 16v2M6 19h12"/></>,
    beach:      <><path d="M3 20h18"/><path d="M12 20V9"/><path d="M12 9c-3-3-7-2-8 1 3 .5 6 .5 8-1Z"/><path d="M12 9c3-3 7-2 8 1-3 .5-6 .5-8-1Z"/><circle cx="18" cy="5" r="2"/></>,
    play:       <><path d="M8 5.5v13l11-6.5-11-6.5Z"/></>,
    pause:      <><rect x="7" y="5" width="3.5" height="14" rx="1"/><rect x="14" y="5" width="3.5" height="14" rx="1"/></>,
    mute:       <><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M17 9l5 5M22 9l-5 5"/></>,
    sound:      <><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12"/></>,
    sun:        <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.5 5.5 4 4M20 20l-1.5-1.5M18.5 5.5 20 4M4 20l1.5-1.5"/></>,
    compass:    <><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></>,
    arrow:      <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    arrowLeft:  <><path d="M19 12H5M11 6l-6 6 6 6"/></>,
    close:      <><path d="M6 6l12 12M18 6 6 18"/></>,
    menu:       <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    pin:        <><path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></>,
    star:       <><path d="m12 3.5 2.6 5.3 5.9.9-4.25 4.1 1 5.85L12 17l-5.25 2.75 1-5.85L3.5 9.7l5.9-.9L12 3.5Z"/></>,
    whale:      <><path d="M3 14c0 3 3 5 6 5h3c4 0 7-2 7-6 0-3-2-5-4-5"/><path d="M3 14c-.5-2 .5-4 2-4M15 8c0-2-1-3-1-3s2 0 3 1"/><circle cx="9" cy="13" r=".8"/></>,
    bird:       <><path d="M3 7c3 0 5 2 7 2s4-3 7-3c0 4-3 7-7 7-1.5 0-2.5.8-3 2"/><path d="M14 6.2 17 4"/></>,
    cave:       <><path d="M4 20V13a8 8 0 0 1 16 0v7M9 20v-4a3 3 0 0 1 6 0v4"/></>,
    map:        <><path d="m9 4-6 2.5v13L9 17l6 2.5 6-2.5v-13L15 7 9 4.5Z"/><path d="M9 4.5V17M15 7v12.5"/></>,
    box:        <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></>,
    info:       <><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></>,
    house:      <><path d="M4 11 12 4l8 7M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></>,
    cart:       <><circle cx="9" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/><path d="M3 4h2l2.2 11h10l1.8-8H6"/></>,
    fork:       <><path d="M7 3v7a2 2 0 0 0 4 0V3M9 10v11M16 3c-1.5 0-2.5 2-2.5 5S15 13 16 13s2-1 2-5-1-5-2-5Zm0 10v8"/></>,
    plane:      <><path d="M10 5.5 4 10l3 1.5L9 17l1.5-2.5 5 3.5 1.5-9-9 5-4-2 6-2.5Z"/></>,
    send:       <><path d="M21 4 3 11l6 2.5L21 4ZM9 13.5V20l3.2-3.7M21 4l-3 16-9-6.5"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {p[name] || null}
    </svg>
  );
}

Object.assign(window, { useIsMobile, Reveal, KH, Section, SectionHeading, LineIcon });
