/* King Hill Villa: sticky header, mobile nav, mobile sticky CTA bar */
const NAV = [
  { label: 'The Villa', href: '#villa' },
  { label: 'The View', href: '#view' },
  { label: 'Film', href: '#film' },
  { label: 'Bedrooms', href: '#bedrooms' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Getting Here', href: '#getting-here' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

function SiteHeader({ askKai }) {
  const { Button } = window.DesignSystem_cf87b7;
  const isMobile = useIsMobile(980);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 80);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const ink = solid ? 'var(--kh-ocean-blue)' : 'var(--kh-ivory-white)';
  const wrap = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 80,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: solid ? '12px clamp(18px,4vw,44px)' : '20px clamp(18px,4vw,44px)',
    background: solid ? 'rgba(248,244,236,0.94)' : 'linear-gradient(180deg, rgba(7,39,63,0.42), rgba(7,39,63,0))',
    backdropFilter: solid ? 'saturate(120%) blur(10px)' : 'blur(2px)',
    borderBottom: solid ? '1px solid var(--border-hairline)' : '1px solid transparent',
    boxShadow: solid ? '0 2px 18px rgba(11,58,99,0.07)' : 'none',
    transition: 'all var(--dur-base) var(--ease-out)',
  };

  const Logo = (
    <a href="#top" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', lineHeight: 1 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(17px,2vw,21px)', letterSpacing: '0.08em', color: ink, transition: 'color var(--dur-base)' }}>King Hill Villa</span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 9.5, letterSpacing: '0.34em', color: 'var(--kh-sandstone-gold)', marginTop: 4 }}>AT MUDJIN HARBOR</span>
    </a>
  );

  return (
    <>
    <header style={wrap}>
      {Logo}

      {!isMobile && (
        <nav style={{ display: 'flex', gap: 'clamp(14px, 1.6vw, 26px)', alignItems: 'center' }}>
          {NAV.map((l) => (
            <a key={l.label} href={l.href} style={{
              fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: ink, textDecoration: 'none', opacity: 0.9, whiteSpace: 'nowrap',
              transition: 'opacity var(--dur-fast)',
            }} onMouseEnter={(e)=>e.currentTarget.style.opacity=1} onMouseLeave={(e)=>e.currentTarget.style.opacity=0.9}>{l.label}</a>
          ))}
        </nav>
      )}

      {!isMobile ? (
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <button onClick={() => askKai()} style={{
            background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7,
            fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: ink, opacity: 0.92,
          }}>
            <img loading="lazy" decoding="async" src="assets/kai_turtle.png" alt="" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 0 1.5px var(--kh-sandstone-gold)' }} />
            Ask Kai
          </button>
          <Button variant={solid ? 'primary' : 'onDark'} size="sm" onClick={() => document.getElementById('book').scrollIntoView()}>Book Your Stay</Button>
        </div>
      ) : (
        <button aria-label="Menu" onClick={() => setOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex' }}>
          <LineIcon name="menu" size={28} color={ink} />
        </button>
      )}
    </header>

      {/* Mobile drawer (sibling of header so fixed positioning maps to the viewport) */}
      {isMobile && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 90, background: 'var(--kh-ocean-900)',
          transform: open ? 'translateY(0)' : 'translateY(-100%)', opacity: open ? 1 : 0,
          transition: 'transform var(--dur-slow) var(--ease-out), opacity var(--dur-base)',
          display: 'flex', flexDirection: 'column', padding: '24px clamp(18px,6vw,40px)', overflowY: 'auto', WebkitOverflowScrolling: 'touch',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, letterSpacing: '0.08em', color: 'var(--kh-ivory-white)' }}>King Hill Villa</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 9.5, letterSpacing: '0.34em', color: 'var(--kh-sandstone-gold)', marginTop: 4 }}>AT MUDJIN HARBOR</span>
            </div>
            <button aria-label="Close" onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
              <LineIcon name="close" size={28} color="var(--kh-ivory-white)" />
            </button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 36 }}>
            {NAV.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing: '0.03em',
                color: 'var(--kh-ivory-white)', textDecoration: 'none', padding: '10px 0',
                borderBottom: '1px solid rgba(248,244,236,0.12)',
              }}>{l.label}</a>
            ))}
          </nav>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 24 }}>
            <Button variant="gold" size="lg" fullWidth onClick={() => { setOpen(false); document.getElementById('book').scrollIntoView(); }}>Book Your Stay</Button>
            <button onClick={() => { setOpen(false); askKai(); }} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: 'transparent',
              border: '1.5px solid rgba(248,244,236,0.4)', borderRadius: 'var(--radius-sm)', padding: '14px', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--kh-ivory-white)',
            }}>
              <img loading="lazy" decoding="async" src="assets/kai_turtle.png" alt="" style={{ width: 26, height: 26, borderRadius: '50%' }} /> Ask Kai, your concierge
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* Mobile-only sticky bottom CTA */
function MobileBar({ askKai }) {
  const isMobile = useIsMobile(860);
  if (!isMobile) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 70,
      background: 'rgba(248,244,236,0.96)', backdropFilter: 'blur(10px)',
      borderTop: '1px solid var(--border-hairline)', boxShadow: '0 -4px 20px rgba(11,58,99,0.1)',
      padding: '10px 14px calc(10px + env(safe-area-inset-bottom))',
      display: 'flex', gap: 10, alignItems: 'center',
    }}>
      <div style={{ flex: 1, lineHeight: 1.2 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--kh-ocean-blue)', letterSpacing: '0.02em' }}>From the hilltop</div>
        <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>5.0 · Sleeps 7 · Entire villa</div>
      </div>
      <button onClick={() => document.getElementById('book').scrollIntoView()} style={{
        background: 'var(--kh-sandstone-gold)', color: 'var(--kh-ocean-900)', border: 'none', borderRadius: 'var(--radius-sm)',
        padding: '13px 20px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em',
        textTransform: 'uppercase', cursor: 'pointer',
      }}>Check Availability</button>
    </div>
  );
}

Object.assign(window, { SiteHeader, MobileBar });
