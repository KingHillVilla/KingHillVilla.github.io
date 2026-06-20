/* King Hill Villa: cinematic video hero */
function VideoHero({ askKai }) {
  const { Button, Input, Select } = window.DesignSystem_cf87b7;
  const isMobile = useIsMobile(860);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) imgRef.current.style.animationPlayState = playing ? 'running' : 'paused';
  }, [playing]);

  const trust = ['5.0 Guest Favorite', 'Sleeps 7', '3 Bedrooms', 'Infinity Pool', 'High-Speed Wi-Fi'];
  const ctrlBtn = {
    width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(248,244,236,0.45)',
    background: 'rgba(7,39,63,0.4)', backdropFilter: 'blur(6px)', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  };

  return (
    <section id="top" style={{
      position: 'relative', minHeight: isMobile ? '92vh' : '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      textAlign: 'center', overflow: 'hidden', color: 'var(--kh-ivory-white)',
    }}>
      {/* Drone footage placeholder, slow cinematic drift over the cliffs */}
      <img ref={imgRef} className="kh-kenburns" src="assets/photo_cliffs.jpg" srcSet="assets/photo_cliffs_mobile.jpg 900w, assets/photo_cliffs.jpg 1400w" sizes="100vw" fetchpriority="high" decoding="async"
        alt="Slow aerial drone footage rising over turquoise water and the limestone cliffs of Mudjin Harbor"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(178deg, rgba(7,39,63,0.5) 0%, rgba(7,39,63,0.22) 38%, rgba(7,39,63,0.42) 72%, rgba(7,39,63,0.78) 100%)' }} />

      {/* Center content */}
      <div style={{ position: 'relative', width: '100%', boxSizing: 'border-box', padding: `120px ${KH.pad} ${isMobile ? '120px' : '180px'}`, maxWidth: 920 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 26 }}>
            <span style={{ width: 'clamp(24px,8vw,60px)', height: 1, background: 'rgba(214,164,90,0.7)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(10px,1.4vw,13px)', letterSpacing: '0.32em', color: 'var(--kh-sandstone-gold)' }}>MIDDLE CAICOS · TURKS &amp; CAICOS</span>
            <span style={{ width: 'clamp(24px,8vw,60px)', height: 1, background: 'rgba(214,164,90,0.7)' }} />
          </div>
        </Reveal>
        <Reveal delay={90}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(38px, 7vw, 82px)',
            lineHeight: 1.04, letterSpacing: '0.015em', margin: 0, textShadow: '0 2px 40px rgba(7,39,63,0.45)',
          }}>The Quiet Side<br />of Paradise</h1>
        </Reveal>
        <Reveal delay={170}>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 'clamp(15px, 2vw, 21px)', lineHeight: 1.6,
            color: 'rgba(248,244,236,0.94)', maxWidth: 580, margin: '24px auto 0',
          }}>
            A private 3-bedroom villa perched above Mudjin Harbor, with panoramic views of Dragon Cay, turquoise coastline, sunrise, sunset, and endless ocean.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 36 }}>
            <Button variant="gold" size="lg" onClick={() => document.getElementById('book').scrollIntoView()}>Check Availability</Button>
            <Button variant="onDark" size="lg" iconLeft={<LineIcon name="play" size={16} color="currentColor" />} onClick={() => document.getElementById('film').scrollIntoView()}>Watch the Film</Button>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <div className="kh-rail" style={{
            display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'flex-start' : 'center', gap: 0,
            marginTop: 40, flexWrap: isMobile ? 'nowrap' : 'wrap', overflowX: isMobile ? 'auto' : 'visible',
            width: '100%', maxWidth: 720, marginInline: 'auto', paddingBottom: isMobile ? 4 : 0,
          }}>
            {trust.map((t, i) => (
              <React.Fragment key={t}>
                {i > 0 && <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--kh-sandstone-gold)', margin: '0 16px', flexShrink: 0 }} />}
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(248,244,236,0.92)', whiteSpace: 'nowrap', flexShrink: 0 }}>{t}</span>
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Video controls (bottom-left) */}
      <div style={{ position: 'absolute', left: 'clamp(16px,4vw,40px)', bottom: isMobile ? 'clamp(16px,5vw,40px)' : 124, display: 'flex', alignItems: 'center', gap: 12, zIndex: 5 }}>
        <button aria-label={playing ? 'Pause' : 'Play'} style={ctrlBtn} onClick={() => setPlaying(p => !p)}>
          <LineIcon name={playing ? 'pause' : 'play'} size={17} color="var(--kh-ivory-white)" />
        </button>
        <button aria-label={muted ? 'Unmute' : 'Mute'} style={ctrlBtn} onClick={() => setMuted(m => !m)}>
          <LineIcon name={muted ? 'mute' : 'sound'} size={17} color="var(--kh-ivory-white)" />
        </button>
        {!isMobile && (
          <button onClick={() => document.getElementById('film').scrollIntoView()} style={{
            background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(248,244,236,0.86)', marginLeft: 4,
          }}>Watch full property film <LineIcon name="arrow" size={15} color="currentColor" /></button>
        )}
      </div>

      {/* "LIVE/placeholder" tag bottom-right */}
      <div style={{ position: 'absolute', right: 'clamp(16px,4vw,40px)', bottom: isMobile ? 'clamp(16px,5vw,40px)' : 124, zIndex: 5,
        display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(7,39,63,0.4)', backdropFilter: 'blur(6px)',
        border: '1px solid rgba(248,244,236,0.25)', borderRadius: 'var(--radius-pill)', padding: '7px 13px' }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--kh-caribbean-aqua)', boxShadow: '0 0 8px var(--kh-caribbean-aqua)' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(248,244,236,0.9)' }}>Drone reel</span>
      </div>

      {/* Floating booking bar (desktop) */}
      {!isMobile && (
        <div style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 50%)', width: 'min(940px, 92%)',
          background: 'var(--kh-ivory-white)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-hairline)', padding: '18px 22px', display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr auto', gap: 16, alignItems: 'end', zIndex: 6,
        }}>
          <Input label="Arrival" type="date" />
          <Input label="Departure" type="date" />
          <Select label="Guests" options={['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 guests', '7 guests']} defaultValue="2 guests" />
          <Button variant="primary" size="md" style={{ height: 47 }} onClick={() => document.getElementById('book').scrollIntoView()}>Check Dates</Button>
        </div>
      )}
    </section>
  );
}

Object.assign(window, { VideoHero });
