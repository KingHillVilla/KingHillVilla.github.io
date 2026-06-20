/* King Hill Villa: Middle Caicos experience + custom illustrated island map */

function IslandMap() {
  const isMobile = useIsMobile(860);
  const pins = [
    { x: 690, y: 250, label: 'King Hill Villa', star: true },
    { x: 640, y: 212, label: 'Mudjin Harbor' },
    { x: 712, y: 192, label: 'Dragon Cay' },
    { x: 790, y: 250, label: 'Conch Bar Caves' },
    { x: 838, y: 318, label: 'Bambarra Beach' },
  ];
  return (
    <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-md)', background: 'var(--kh-aqua-100)' }}>
      <svg viewBox="0 0 1000 520" style={{ width: '100%', display: 'block' }} role="img" aria-label="Illustrated map: Providenciales connects by ferry to North Caicos, then by causeway to Middle Caicos where King Hill Villa sits above Mudjin Harbor.">
        <defs>
          <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7cc6de" /><stop offset="1" stopColor="#1E9CC3" />
          </linearGradient>
          <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="rgba(255,255,255,0.35)" />
          </pattern>
        </defs>
        <rect width="1000" height="520" fill="url(#sea)" />
        <rect width="1000" height="520" fill="url(#dots)" />

        {/* reef hints */}
        <path d="M30 360 Q200 330 360 372 T700 380" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" />

        {/* Providenciales (dimmed, the busy side) */}
        <g opacity="0.62">
          <path d="M60 250 Q70 196 150 188 Q236 182 268 222 Q286 252 250 292 Q210 330 130 322 Q66 312 60 250 Z" fill="#cdbfa0" stroke="#B88A5B" strokeWidth="2" />
          <text x="164" y="250" textAnchor="middle" fontFamily="var(--font-display)" fontSize="17" fontWeight="700" letterSpacing="1" fill="#5a6b78">PROVIDENCIALES</text>
          <text x="164" y="272" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12.5" fill="#5a6b78">Airport · resorts · the crowds</text>
          <circle cx="246" cy="300" r="4" fill="#5a6b78" />
          <text x="256" y="316" fontFamily="var(--font-body)" fontSize="11" fill="#5a6b78">Ferry dock</text>
        </g>

        {/* Ferry route */}
        <path d="M250 300 Q380 360 470 318" fill="none" stroke="#0B3A63" strokeWidth="2.5" strokeDasharray="2 10" strokeLinecap="round" />
        <text x="360" y="352" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11.5" fontStyle="italic" fill="#0B3A63">≈ 30 min ferry</text>

        {/* North Caicos */}
        <path d="M430 268 Q452 236 520 240 Q566 244 576 280 Q580 312 540 326 Q480 340 446 314 Q420 296 430 268 Z" fill="#9bb98b" stroke="#456B3A" strokeWidth="2" />
        <text x="500" y="290" textAnchor="middle" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" letterSpacing="0.5" fill="#3a5a31">NORTH CAICOS</text>
        <text x="500" y="308" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10.5" fill="#3a5a31">Sandy Point dock</text>

        {/* Causeway */}
        <line x1="576" y1="284" x2="612" y2="276" stroke="#B88A5B" strokeWidth="6" strokeLinecap="round" />
        <text x="592" y="262" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10.5" fontStyle="italic" fill="#0B3A63">causeway</text>

        {/* Middle Caicos (highlighted) */}
        <path d="M600 250 Q636 196 730 184 Q838 174 892 226 Q930 264 902 330 Q862 392 740 392 Q636 392 606 330 Q586 290 600 250 Z" fill="#c7dcb6" stroke="#456B3A" strokeWidth="2.5" />
        <text x="772" y="362" textAnchor="middle" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" letterSpacing="0.5" fill="#3a5a31">MIDDLE CAICOS</text>

        {/* Pins */}
        {pins.map((p) => (
          <g key={p.label}>
            {p.star ? (
              <>
                <path d={`M${p.x} ${p.y-15} l4.4 9 9.8 1.4 -7.1 6.9 1.7 9.7 -8.8-4.6 -8.8 4.6 1.7-9.7 -7.1-6.9 9.8-1.4 Z`} fill="#D6A45A" stroke="#0B3A63" strokeWidth="1.4" strokeLinejoin="round" />
                <text x={p.x} y={p.y + 30} textAnchor="middle" fontFamily="var(--font-display)" fontSize="13.5" fontWeight="700" fill="#0B3A63">{p.label}</text>
              </>
            ) : (
              <>
                <circle cx={p.x} cy={p.y} r="5.5" fill="#0B3A63" stroke="#fff" strokeWidth="1.6" />
                <text x={p.x} y={p.y - 11} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11.5" fontWeight="600" fill="#0B3A63">{p.label}</text>
              </>
            )}
          </g>
        ))}

        {/* Compass */}
        <g transform="translate(930, 70)">
          <circle r="26" fill="rgba(248,244,236,0.9)" stroke="#B88A5B" strokeWidth="1.5" />
          <path d="M0 -18 L5 0 L0 18 L-5 0 Z" fill="#0B3A63" />
          <path d="M0 -18 L5 0 L0 0 Z" fill="#1E9CC3" />
          <text y="-30" textAnchor="middle" fontFamily="var(--font-display)" fontSize="11" fontWeight="700" fill="#0B3A63">N</text>
        </g>
      </svg>
      <div style={{ position: 'absolute', left: 0, bottom: 0, padding: '10px 14px', background: 'rgba(248,244,236,0.92)', borderTopRightRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)', maxWidth: isMobile ? '70%' : 'none' }}>
        Illustrated for orientation, not to scale.
      </div>
    </div>
  );
}

function MiddleCaicos({ askKai }) {
  const isMobile = useIsMobile(860);
  const plan = [
    { icon: 'plane', t: 'Plan your transport', s: 'Fly into Provo, then ferry + rental car, or charter to North Caicos.' },
    { icon: 'cart',  t: 'Stock up on groceries', s: 'Shops are small here. We send a list and the best places to provision.' },
    { icon: 'map',   t: 'Mind the ferry & causeway', s: 'A causeway links North & Middle. Ferry times are worth planning around.' },
  ];
  const features = [
    { icon: 'beach', img: 'assets/photo_cliffs.jpg', t: 'Mudjin Harbor', s: 'The dramatic cliffs and cove at your doorstep.' },
    { icon: 'compass', img: 'assets/photo_beach.jpg', t: 'Dragon Cay', s: 'The iconic sea stack, swim out at low tide.' },
    { icon: 'fork', img: 'assets/photo_dining.jpg', t: 'Mudjin Bar & Grill', s: 'Cliff-top dining a few minutes away.' },
  ];
  const more = [
    { icon: 'cave', t: 'Conch Bar Caves', s: 'The Caribbean’s largest above-ground cave system.' },
    { icon: 'beach', t: 'Bambarra Beach', s: 'Long, shallow, empty turquoise flats.' },
    { icon: 'compass', t: 'Crossing Place Trail', s: 'Historic coastal walk along the bluffs.' },
    { icon: 'whale', t: 'Snorkeling', s: 'Reefs, rays and turtles close to shore.' },
    { icon: 'bird', t: 'Bird Watching', s: 'Flamingos, frigatebirds and herons.' },
    { icon: 'whale', t: 'Whale Watching', s: 'Humpbacks pass offshore in season (Jan–Apr).' },
  ];
  return (
    <Section id="experiences" bg="var(--kh-ivory-white)">
      <SectionHeading eyebrow="Middle Caicos" title="Not Provo, and that's the point."
        lede="Middle Caicos is the quiet, natural side of Turks & Caicos: empty beaches, dramatic cliffs, and almost no crowds. It rewards a little planning with a lot of privacy." />

      {/* Honest planning row */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 16, marginTop: 40 }}>
        {plan.map((p, i) => (
          <Reveal key={p.t} delay={i * 80}>
            <div style={{ display: 'flex', gap: 14, padding: '20px 20px', background: 'var(--kh-sand-200)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', height: '100%' }}>
              <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', background: 'var(--kh-white)', border: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LineIcon name={p.icon} size={21} color="var(--kh-driftwood-600)" />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15.5, fontWeight: 600, color: 'var(--kh-ocean-blue)', letterSpacing: '0.02em' }}>{p.t}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.55, color: 'var(--text-muted)', marginTop: 4 }}>{p.s}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Map */}
      <Reveal delay={100} style={{ marginTop: 28 }}><IslandMap /></Reveal>

      {/* Feature experiences */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 22, marginTop: 36 }}>
        {features.map((f, i) => (
          <Reveal key={f.t} delay={i * 80}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-hairline)', background: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
              <div style={{ position: 'relative', height: 190 }}>
                <img loading="lazy" decoding="async" src={f.img} alt={f.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(7,39,63,0.55))' }} />
                <div style={{ position: 'absolute', left: 16, bottom: 14, display: 'flex', alignItems: 'center', gap: 9 }}>
                  <LineIcon name={f.icon} size={18} color="var(--kh-ivory-white)" />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, color: 'var(--kh-ivory-white)', letterSpacing: '0.02em', textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>{f.t}</span>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0, padding: '16px 18px 18px' }}>{f.s}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* More to do */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 14, marginTop: 20 }}>
        {more.map((m, i) => (
          <Reveal key={m.t} delay={(i % 3) * 70}>
            <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start', padding: '16px 18px', background: 'var(--color-surface)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-md)', height: '100%' }}>
              <span style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: 'var(--kh-aqua-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LineIcon name={m.icon} size={20} color="var(--kh-aqua-600)" />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--kh-ocean-blue)' }}>{m.t}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, lineHeight: 1.5, color: 'var(--text-muted)', marginTop: 3 }}>{m.s}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
          <button onClick={() => askKai('How do I get to Middle Caicos from Provo?')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', background: 'transparent',
            border: '1.5px solid var(--kh-ocean-blue)', borderRadius: 'var(--radius-sm)', padding: '13px 24px',
            fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--kh-ocean-blue)',
          }}>
            <img loading="lazy" decoding="async" src="assets/kai_turtle.png" alt="" style={{ width: 22, height: 22, borderRadius: '50%' }} />
            Ask Kai how to get here
          </button>
        </div>
      </Reveal>
    </Section>
  );
}

Object.assign(window, { MiddleCaicos });
