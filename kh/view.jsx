/* King Hill Villa: The View (emotional centerpiece) + Villa amenities overview */

function TheView() {
  const isMobile = useIsMobile(860);
  const cards = [
    { icon: 'pin',   t: 'Dragon Cay',        s: 'The landmark sea stack, framed dead-centre.' },
    { icon: 'sun',   t: 'Sunrise & Sunset',  s: 'Both, from the same hilltop, every day.' },
    { icon: 'whale', t: 'Whales & Birds',    s: 'Humpbacks in season; frigatebirds year-round.' },
    { icon: 'compass', t: 'Endless Ocean',   s: 'Open Atlantic and reef to the horizon.' },
  ];
  return (
    <section id="view" style={{ background: 'var(--kh-ocean-900)', padding: `clamp(80px,10vw,140px) ${KH.pad}`, position: 'relative', overflow: 'hidden' }}>
      <img loading="lazy" decoding="async" src="assets/texture_sand.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.05, mixBlendMode: 'overlay' }} />
      <div style={{ maxWidth: KH.maxW, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center', position: 'relative' }}>
        {/* Arch-framed feature media */}
        <Reveal style={{ order: isMobile ? 2 : 1 }}>
          <div style={{ position: 'relative', padding: 10, border: '2px solid var(--border-frame)', borderRadius: 'var(--radius-arch)', background: 'rgba(184,138,91,0.08)' }}>
            <img loading="lazy" decoding="async" src="assets/photo_cliffs.jpg" alt="Panoramic view from the villa over Mudjin Harbor and the limestone coastline"
              style={{ width: '100%', height: isMobile ? 320 : 480, objectFit: 'cover', borderRadius: 'var(--radius-arch)', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 22, left: 22, right: 22, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--kh-caribbean-aqua)', boxShadow: '0 0 10px var(--kh-caribbean-aqua)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(248,244,236,0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>The view from the pool deck, golden hour</span>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div style={{ order: isMobile ? 1 : 2 }}>
          <SectionHeading align="left" dark eyebrow="The Reason You Come" title="Built around the view." />
          <Reveal delay={120}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,1.5vw,18px)', lineHeight: 1.75, color: 'rgba(248,244,236,0.82)', margin: '22px 0 0' }}>
              King Hill sits on one of the highest points above Mudjin Harbor. From the infinity pool and all three terraces, the coastline opens in a single uninterrupted sweep, Dragon Cay below, the reef breaking offshore, and the light changing hour by hour.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,1.5vw,18px)', lineHeight: 1.75, color: 'rgba(248,244,236,0.82)', margin: '16px 0 0' }}>
              Watch the sunrise with coffee, the birds wheel over the cliffs, whales pass in season, and the sky turn gold over the water at the end of the day.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 34 }}>
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start', padding: '16px 16px', background: 'rgba(248,244,236,0.05)', border: '1px solid rgba(214,164,90,0.22)', borderRadius: 'var(--radius-md)', height: '100%' }}>
                  <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: '50%', background: 'rgba(30,156,195,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LineIcon name={c.icon} size={21} color="var(--kh-aqua-300)" />
                  </span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, letterSpacing: '0.03em', color: 'var(--kh-ivory-white)' }}>{c.t}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, lineHeight: 1.5, color: 'rgba(248,244,236,0.66)', marginTop: 3 }}>{c.s}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VillaOverview() {
  const { Badge } = window.DesignSystem_cf87b7;
  // TODO(owner-verify): A/C, Wi-Fi, kitchen, beach access not yet confirmed by owner.
  const amenities = [
    { icon: 'bed',     t: '3 Bedrooms',        s: 'King + two queens' },
    { icon: 'bath',    t: '3.5 Bathrooms',       s: 'Ensuite & guest baths' },
    { icon: 'guests',  t: 'Sleeps 7',          s: 'Entire private villa' },
    { icon: 'pool',    t: 'Infinity Pool',     s: 'Panoramic ocean views' },
    { icon: 'hottub',  t: 'Ocean-View Hot Tub', s: 'Sunset-facing spa' },
    { icon: 'terrace', t: 'Three Terraces',    s: 'Sun, shade & dining' },
    { icon: 'kitchen', t: 'Full Kitchen',      s: 'Well-equipped, open-plan' },
    { icon: 'wifi',    t: 'High-Speed Wi-Fi',  s: 'Remote-work ready' },
    { icon: 'ac',      t: 'Air Conditioning',  s: 'Throughout the villa' },
    { icon: 'beach',   t: 'Beach Access',      s: '5-min walk to the beach' },
  ];
  return (
    <Section id="villa" bg="var(--kh-ivory-white)">
      <SectionHeading eyebrow="The Villa" title="Everything you need for Caribbean living."
        lede="An entire private villa with Italian marble floors, open and light-filled, built for slow mornings and long evenings. three bedrooms, three baths, and room for seven." />
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', margin: '24px 0 8px' }}>
        <Reveal><Badge tone="gold">5.0 Guest Favorite</Badge></Reveal>
        <Reveal delay={60}><Badge tone="aqua" subtle>Entire Villa</Badge></Reveal>
        <Reveal delay={120}><Badge tone="ocean" subtle>Self Check-In</Badge></Reveal>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14, marginTop: 40 }}>
        {amenities.map((a, i) => (
          <Reveal key={a.t} delay={(i % 5) * 60}>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: 10, padding: '22px 20px', background: 'var(--color-surface)',
              border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', height: '100%',
              transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-sm)', background: 'var(--kh-sand-200)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LineIcon name={a.icon} size={24} />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, letterSpacing: '0.02em', color: 'var(--kh-ocean-blue)' }}>{a.t}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>{a.s}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { TheView, VillaOverview });
