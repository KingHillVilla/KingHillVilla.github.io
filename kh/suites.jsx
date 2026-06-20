/* King Hill Villa: Suites + Outdoor living */

function SuiteCard({ s, delay }) {
  const { Badge } = window.DesignSystem_cf87b7;
  const [h, setH] = useState(false);
  const rows = [
    { icon: 'bed', v: s.bed },
    { icon: 'bath', v: s.bath },
    { icon: 'compass', v: s.view },
  ];
  return (
    <Reveal delay={delay} style={{ height: '100%' }}>
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
        background: 'var(--color-surface)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)',
        overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column',
        boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-sm)', transform: h ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      }}>
        <div style={{ position: 'relative' }}>
          <img loading="lazy" decoding="async" src={s.img} alt={s.alt} style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', top: 14, left: 14 }}><Badge tone="gold">{s.tag}</Badge></div>
        </div>
        <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '0.02em', color: 'var(--kh-ocean-blue)' }}>{s.name}</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '8px 0 18px' }}>{s.body}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 16, borderTop: '1px solid var(--border-hairline)', marginTop: 'auto' }}>
            {rows.map((r) => (
              <div key={r.v} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <LineIcon name={r.icon} size={18} color="var(--kh-driftwood-600)" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-body)' }}>{r.v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 16 }}>
            {s.amenities.map((a) => (
              <span key={a} style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--kh-ink-700)', background: 'var(--kh-sand-200)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-pill)', padding: '4px 10px' }}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Suites() {
  const isMobile = useIsMobile(860);
  // TODO(owner-verify): bed/bath types per suite unconfirmed; listing says only "3 bedroom suites".
  const suites = [
    { name: 'Primary Bedroom', tag: 'King', img: 'assets/photo_villa_pool.jpg', alt: 'Master suite with terrace access and ocean views',
      body: 'The largest room, opening to a private terrace and steps from the infinity hot tub. Wakes to sunrise; settles into sunset.',
      bed: 'King bed', bath: 'Ensuite bathroom', view: 'Ocean & pool deck', amenities: ['Terrace access', 'A/C', 'Hot tub nearby'] },
    { name: 'Sunrise Bedroom', tag: 'Queen', img: 'assets/photo_dining.jpg', alt: 'Sunrise suite with morning light and east-facing views',
      body: 'East and north-facing, filled with soft morning light. The room for early risers and first coffee on the terrace.',
      bed: 'Queen bed', bath: 'Full bathroom', view: 'East / north coastline', amenities: ['Morning light', 'A/C', 'Garden outlook'] },
    { name: 'Sunset Bedroom', tag: 'Queen', img: 'assets/photo_sunset.jpg', alt: 'Sunset suite facing Dragon Cay and the western sky',
      body: 'West-facing toward Dragon Cay, framing the evening sky. The room you choose for the golden hour.',
      bed: 'Queen bed', bath: 'Full bathroom', view: 'Dragon Cay / west', amenities: ['Sunset views', 'A/C', 'Quiet wing'] },
  ];
  return (
    <Section id="bedrooms" bg="var(--kh-ivory-white)">
      <SectionHeading eyebrow="The Bedrooms" title="One villa, three bedrooms."
        lede="You book the entire villa, so all three bedrooms are yours. Each is oriented to the light: sunrise to the east, Dragon Cay and sunset to the west, the ocean throughout." />
      <Reveal><p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', margin: '14px auto 0', maxWidth: 560 }}>Room photos and exact bed types shown are indicative, confirmed with the owner at booking.</p></Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24, marginTop: 44 }}>
        {suites.map((s, i) => <SuiteCard key={s.name} s={s} delay={i * 90} />)}
      </div>
    </Section>
  );
}

function OutdoorLiving() {
  const isMobile = useIsMobile(860);
  const features = ['Infinity pool', 'Pool deck & loungers', 'Sunset-facing hot tub', 'Outdoor dining', 'Outdoor shower', 'BBQ grill', 'Three terraces', 'Beach chairs', 'Cooler & day-trip kit'];
  return (
    <section id="outdoor" style={{ background: 'var(--kh-sand-300)', padding: `clamp(72px,9vw,128px) ${KH.pad}`, overflow: 'hidden' }}>
      <div style={{ maxWidth: KH.maxW, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.05fr 0.95fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
            <img loading="lazy" decoding="async" src="assets/photo_villa_pool.jpg" alt="Infinity pool deck with loungers overlooking the ocean" style={{ width: '100%', height: isMobile ? 260 : 360, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} />
            {!isMobile && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <img loading="lazy" decoding="async" src="assets/photo_dining.jpg" alt="Covered terrace dining with ocean view" style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }} />
                <img loading="lazy" decoding="async" src="assets/photo_sunset.jpg" alt="Sunset over the water from the terrace" style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
            )}
          </div>
        </Reveal>
        <div>
          <SectionHeading align="left" eyebrow="Outdoor Living" title="Between the pool, the terraces, and the sea." />
          <Reveal delay={120}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,1.5vw,18px)', lineHeight: 1.75, color: 'var(--text-body)', margin: '22px 0 0' }}>
              Spend your days outside. Float in the infinity pool, drift in the hot tub as the sun drops, grill dinner on the terrace, and let the kids run between the loungers and the shade.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 18px', marginTop: 30 }}>
            {features.map((f, i) => (
              <Reveal key={f} delay={i * 50}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ flexShrink: 0, width: 7, height: 7, borderRadius: '50%', background: 'var(--kh-sandstone-gold)' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-body)' }}>{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Suites, OutdoorLiving });
