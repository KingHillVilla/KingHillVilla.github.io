/* King Hill Villa: guest guide / planning + reviews/trust + FAQ */

function GuestGuide({ askKai }) {
  const isMobile = useIsMobile(860);
  const cards = [
    { icon: 'plane', t: 'How to get here', q: 'How do I get to Middle Caicos from Provo?' },
    { icon: 'box',   t: 'What to pack', q: 'What should I pack for King Hill Villa?' },
    { icon: 'cart',  t: 'Groceries', q: 'How and where do we get groceries on Middle Caicos?' },
    { icon: 'fork',  t: 'Restaurants', q: 'Where should we eat near the villa?' },
    { icon: 'beach', t: 'Beaches', q: 'What are the best beaches near the villa?' },
    { icon: 'house', t: 'House instructions', q: 'How do check-in and the house instructions work?' },
    { icon: 'compass', t: 'Local tips', q: 'What local tips should we know for Middle Caicos?' },
    { icon: 'info',  t: 'Emergency info', q: 'What are the emergency contacts and info?' },
  ];
  return (
    <Section id="getting-here" bg="var(--kh-sand-300)">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}>
        <div style={{ minWidth: 0 }}>
          <SectionHeading align="left" eyebrow="Before You Arrive" title="Everything you need before you arrive." />
          <Reveal delay={120}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,1.5vw,18px)', lineHeight: 1.75, color: 'var(--text-body)', margin: '22px 0 0' }}>
              Every guest receives a digital guide with arrival instructions, house details, local recommendations, dining, packing tips, and island logistics, so the planning is done before you land.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 26, padding: '18px 18px', background: 'var(--kh-ocean-900)', borderRadius: 'var(--radius-md)' }}>
              <img loading="lazy" decoding="async" src="assets/kai_turtle.png" alt="Kai the turtle" style={{ width: 52, height: 52, borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 0 2px var(--kh-sandstone-gold)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--kh-ivory-white)', letterSpacing: '0.02em' }}>Meet Kai, your concierge</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.55, color: 'rgba(248,244,236,0.78)', marginTop: 3 }}>Ask anything about the villa or the island, Kai draws on the full guest guide.</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 14, minWidth: 0 }}>
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={(i % 2) * 60 + Math.floor(i / 2) * 30}>
              <button onClick={() => askKai(c.q)} style={{
                width: '100%', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 13,
                padding: '18px 18px', background: 'var(--color-surface)', border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)', transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'var(--kh-aqua-300)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-hairline)'; }}>
                <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 'var(--radius-sm)', background: 'var(--kh-sand-200)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LineIcon name={c.icon} size={21} />
                </span>
                <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontSize: 14.5, fontWeight: 600, color: 'var(--kh-ocean-blue)', letterSpacing: '0.02em' }}>{c.t}</span>
                <LineIcon name="arrow" size={16} color="var(--kh-driftwood-500)" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Reviews() {
  const isMobile = useIsMobile(860);
  const LISTING = 'https://www.airbnb.com/rooms/1194929163053607348';
  return (
    <section id="reviews" style={{ background: 'var(--kh-ocean-900)', padding: `clamp(72px,9vw,128px) ${KH.pad}`, position: 'relative', overflow: 'hidden' }}>
      <img loading="lazy" decoding="async" src="assets/texture_sand.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.05, mixBlendMode: 'overlay' }} />
      <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', textAlign: isMobile ? 'left' : 'center' }}>
        <Reveal>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(54px,8vw,80px)', fontWeight: 700, color: 'var(--kh-ivory-white)', lineHeight: 1 }}>5.0</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: 3 }}>{[0,1,2,3,4].map(i => <LineIcon key={i} name="star" size={18} color="var(--kh-sandstone-gold)" stroke={0.5} />)}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(248,244,236,0.8)', marginTop: 8, letterSpacing: '0.04em' }}>Guest Favorite on Airbnb</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.7, color: 'rgba(248,244,236,0.82)', margin: '24px auto 0' }}>
            King Hill is a 5.0-rated Guest Favorite. Read what guests say about the view, the hosting, and the quiet of Middle Caicos straight from the Airbnb listing.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <a href={LISTING} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 30, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kh-ocean-900)', background: 'var(--kh-sandstone-gold)', borderRadius: 'var(--radius-sm)', padding: '14px 26px', textDecoration: 'none' }}>
            Read guest reviews on Airbnb <LineIcon name="arrow" size={16} color="currentColor" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    { q: 'Is the villa on Provo?', a: 'No, King Hill is on Middle Caicos, the quiet, natural side of Turks & Caicos. You fly into Provo, then reach us by ferry to North Caicos and a short drive across the causeway.' },
    { q: 'How do check-in and checkout work?', a: 'Self check-in with a smart lock. You’ll receive your code and full arrival instructions in the digital guide before you travel.' },
    { q: 'Is it good for families and kids?', a: 'Yes, the villa sleeps seven, with a pool, terraces, and easy beaches nearby. Kai can suggest a kid-friendly day plan.' },
    { q: 'What if it rains?', a: 'Caves, the indoor living space, local dining, and the guide’s rainy-day suggestions keep the day easy. Just ask Kai.' },
    { q: 'What should we know before booking?', a: 'Middle Caicos is remote and rewards a little planning, transport, groceries, and ferry timing. The reward is real privacy and dramatic scenery.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <Section id="faq" bg="var(--kh-ivory-white)">
      <SectionHeading eyebrow="Good to Know" title="Questions, answered." lede="The essentials before you book, and Kai is on every page for the rest." />
      <div style={{ maxWidth: 760, margin: '40px auto 0' }}>
        {faqs.map((f, i) => (
          <Reveal key={i} delay={i * 40}>
            <div style={{ borderBottom: '1px solid var(--border-hairline)' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                background: 'none', border: 'none', cursor: 'pointer', padding: '20px 4px', textAlign: 'left',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px,2vw,19px)', fontWeight: 600, color: 'var(--kh-ocean-blue)', letterSpacing: '0.02em' }}>{f.q}</span>
                <span style={{ flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)', color: 'var(--kh-sandstone-gold)', fontSize: 24, fontWeight: 300, lineHeight: 1 }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height var(--dur-slow) var(--ease-out)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-muted)', margin: 0, padding: '0 4px 22px' }}>{f.a}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { GuestGuide, Reviews, Faq });
