/* King Hill Villa: film story module with chapters + play lightbox */
function VideoStory() {
  const isMobile = useIsMobile(860);
  // TODO(owner-verify): placeholder film; replace with real drone footage or hide until it exists.
  const chapters = [
    { t: 'Full Tour',    img: 'assets/photo_cliffs.jpg',     time: 'Preview' },
    { t: 'The Villa',    img: 'assets/photo_villa_pool.jpg', time: 'Preview' },
    { t: 'The Pool',     img: 'assets/photo_villa_pool.jpg', time: 'Preview' },
    { t: 'Dragon Cay',   img: 'assets/photo_cliffs.jpg',     time: 'Preview' },
    { t: 'Sunrise',      img: 'assets/photo_dining.jpg',     time: 'Preview' },
    { t: 'Sunset',       img: 'assets/photo_sunset.jpg',     time: 'Preview' },
    { t: 'Getting Here', img: 'assets/photo_beach.jpg',      time: 'Preview' },
  ];
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const ch = chapters[active];

  return (
    <Section id="film" bg="var(--kh-sand-300)">
      <SectionHeading eyebrow="The Film · Coming Soon" title="A drone tour of King Hill."
        lede="A cinematic drone flight over the villa, the infinity pool, Dragon Cay, and the Mudjin Harbor coastline. Footage is in production; the chapters below are a preview of what is coming." />

      {/* Film frame */}
      <Reveal delay={120} style={{ marginTop: 44 }}>
        <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--border-frame)', boxShadow: 'var(--shadow-lg)', aspectRatio: '16 / 9', background: 'var(--kh-ocean-900)', cursor: 'pointer' }}
          onClick={() => setOpen(true)}>
          <img loading="lazy" decoding="async" src={ch.img} alt={`King Hill film, ${ch.t}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(7,39,63,0.18), rgba(7,39,63,0.5))' }} />
          {/* Play */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ width: isMobile ? 70 : 92, height: isMobile ? 70 : 92, borderRadius: '50%', background: 'rgba(214,164,90,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(7,39,63,0.5)' }}>
              <LineIcon name="play" size={isMobile ? 30 : 38} color="var(--kh-ocean-900)" stroke={0.5} />
            </span>
          </div>
          {/* Caption + time */}
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(16px,3vw,26px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px,2vw,20px)', fontWeight: 600, letterSpacing: '0.03em', color: 'var(--kh-ivory-white)', textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>{ch.t}</span>
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--kh-ivory-white)', background: 'rgba(7,39,63,0.55)', backdropFilter: 'blur(4px)', border: '1px solid rgba(248,244,236,0.3)', borderRadius: 'var(--radius-pill)', padding: '5px 12px' }}>{ch.time}</span>
          </div>
        </div>
      </Reveal>

      {/* Chapters */}
      <Reveal delay={160}>
        <div className="kh-rail" style={{ display: 'flex', gap: 10, marginTop: 22, overflowX: 'auto', paddingBottom: 4 }}>
          {chapters.map((c, i) => (
            <button key={c.t} onClick={() => setActive(i)} style={{
              flexShrink: 0, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase', padding: '10px 18px', borderRadius: 'var(--radius-pill)',
              border: '1.5px solid ' + (i === active ? 'var(--kh-ocean-blue)' : 'var(--border-hairline)'),
              background: i === active ? 'var(--kh-ocean-blue)' : 'var(--color-surface)',
              color: i === active ? 'var(--kh-ivory-white)' : 'var(--kh-ocean-blue)',
              transition: 'all var(--dur-fast) var(--ease-out)',
            }}>{c.t}</button>
          ))}
        </div>
      </Reveal>

      {/* Lightbox */}
      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 120, background: 'rgba(7,39,63,0.88)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(16px,4vw,48px)',
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: 'min(1040px, 100%)', aspectRatio: '16 / 9', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--border-frame)', boxShadow: 'var(--shadow-lg)' }}>
            <img loading="lazy" decoding="async" src={ch.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 24 }}>
              <span style={{ width: 76, height: 76, borderRadius: '50%', border: '1.5px solid rgba(248,244,236,0.4)', background: 'rgba(7,39,63,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LineIcon name="play" size={30} color="var(--kh-ivory-white)" />
              </span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px,3vw,26px)', fontWeight: 600, color: 'var(--kh-ivory-white)', marginTop: 22, letterSpacing: '0.03em' }}>{ch.t}, {ch.time}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(248,244,236,0.72)', marginTop: 10, maxWidth: 380 }}>The owner's 4K drone footage drops straight into this player. This is a styled placeholder for the final cut.</div>
            </div>
            <button aria-label="Close" onClick={() => setOpen(false)} style={{ position: 'absolute', top: 14, right: 14, width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(248,244,236,0.35)', background: 'rgba(7,39,63,0.5)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LineIcon name="close" size={20} color="var(--kh-ivory-white)" />
            </button>
          </div>
        </div>
      )}
    </Section>
  );
}

Object.assign(window, { VideoStory });
