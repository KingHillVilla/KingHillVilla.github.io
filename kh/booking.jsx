/* King Hill Villa: booking inquiry + footer */

function BookingInquiry({ askKai }) {
  const { Input, Select, Button } = window.DesignSystem_cf87b7;
  const isMobile = useIsMobile(860);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', arrival: '', departure: '', guests: '2 guests', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <Section id="book" bg="var(--kh-ivory-white)">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.95fr 1.05fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'stretch' }}>
        {/* Image / copy */}
        <Reveal style={{ minWidth: 0 }}>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: isMobile ? 280 : '100%', boxShadow: 'var(--shadow-md)' }}>
            <img loading="lazy" decoding="async" src="assets/photo_sunset.jpg" alt="Golden hour over the water at King Hill Villa" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(7,39,63,0.32), rgba(7,39,63,0.82))' }} />
            <div style={{ position: 'relative', padding: 'clamp(26px,4vw,42px)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12, letterSpacing: '0.28em', color: 'var(--kh-sandstone-gold)', marginBottom: 16 }}>✦ BOOK DIRECT &amp; SAVE</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,3.6vw,42px)', lineHeight: 1.12, letterSpacing: '0.02em', color: 'var(--kh-ivory-white)', margin: 0 }}>Book direct with the owner.</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,1.6vw,17px)', lineHeight: 1.65, color: 'rgba(248,244,236,0.88)', margin: '16px 0 0', maxWidth: 420 }}>
                Booking directly with Ed skips the booking-platform service fees. He confirms your dates personally, so there are no surprises.
              </p>
              <div style={{ display: 'flex', gap: 18, marginTop: 24, flexWrap: 'wrap' }}>
                {['No platform fees', 'Owner-confirmed dates', 'Entire villa'].map((t) => (
                  <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600, color: 'rgba(248,244,236,0.9)' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--kh-sandstone-gold)' }} />{t}
                  </span>
                ))}
              </div>
              <a href="tel:+14125124300" style={{ display: 'inline-flex', alignItems: 'center', alignSelf: 'flex-start', marginTop: 22, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, letterSpacing: '0.04em', color: 'var(--kh-ocean-900)', background: 'var(--kh-sandstone-gold)', borderRadius: 'var(--radius-sm)', padding: '12px 22px', textDecoration: 'none' }}>Call or text Ed · (412) 512-4300</a>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={120} style={{ minWidth: 0 }}>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'clamp(24px,3vw,38px)', height: '100%' }}>
            {sent ? (
              <div style={{ height: '100%', minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <span style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--kh-aqua-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <LineIcon name="send" size={28} color="var(--kh-aqua-600)" />
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: 'var(--kh-ocean-blue)', margin: 0, letterSpacing: '0.02em' }}>Request received</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: 360, margin: '12px 0 24px' }}>
                  Thank you, {form.name || 'friend'}. Ed will confirm availability and your direct rate. For the fastest reply, call or text him at <a href="tel:+14125124300" style={{ color: 'var(--kh-ocean-blue)', fontWeight: 600 }}>(412) 512-4300</a>.
                </p>
                <Button variant="secondary" size="md" onClick={() => setSent(false)}>Send another request</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); /* TODO(backend): POST to Formspree (needs Ed's email + CSP form-action) so this emails him. Phone is the live channel until then. */ }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: 'var(--kh-ocean-blue)', margin: '0 0 8px', letterSpacing: '0.02em' }}>Request your dates</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '0 0 18px' }}>1. Send your dates &nbsp;·&nbsp; 2. Ed confirms availability against the calendar &nbsp;·&nbsp; 3. Book direct, no platform fees.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, minWidth: 0 }}>
                  <Input label="Name" placeholder="Your name" value={form.name} onChange={set('name')} style={{ gridColumn: '1 / -1' }} required />
                  <Input label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} style={{ gridColumn: '1 / -1' }} hint="We'll send availability and a plan here." required />
                  <Input label="Arrival" type="date" value={form.arrival} onChange={set('arrival')} />
                  <Input label="Departure" type="date" value={form.departure} onChange={set('departure')} />
                  <Select label="Guests" options={['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 guests', '7 guests']} value={form.guests} onChange={set('guests')} style={{ gridColumn: '1 / -1' }} />
                  <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label htmlFor="kh-msg" style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-heading)' }}>Message</label>
                    <textarea id="kh-msg" rows={3} placeholder="Tell us about your trip, who's coming, what you're hoping for." value={form.message} onChange={set('message')} style={{
                      fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', background: 'var(--color-surface)',
                      border: '1.5px solid var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', outline: 'none', resize: 'vertical',
                    }} onFocus={(e) => { e.target.style.borderColor = 'var(--kh-caribbean-aqua)'; e.target.style.boxShadow = '0 0 0 3px rgba(30,156,195,0.18)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-hairline)'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                </div>
                <Button variant="gold" size="lg" type="submit" fullWidth style={{ marginTop: 20 }}>Request Availability</Button>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
                  <Button variant="ghost" size="md" iconLeft={<img loading="lazy" decoding="async" src="assets/kai_turtle.png" alt="" style={{ width: 20, height: 20, borderRadius: '50%' }} />} onClick={() => askKai('What should we know before booking King Hill Villa?')}>Ask Kai a question</Button>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', margin: '14px 0 0' }}>Ed confirms availability and your direct rate. Prefer to book through Airbnb? <a href="https://www.airbnb.com/rooms/1194929163053607348" target="_blank" rel="noopener" style={{ color: 'var(--text-link)' }}>View the listing</a>.</p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function SiteFooter() {
  const isMobile = useIsMobile(860);
  const AIRBNB = 'https://www.airbnb.com/rooms/1194929163053607348';
  const cols = [
    { h: 'Explore', links: [['The Villa', '#villa'], ['The View', '#view'], ['The Film', '#film'], ['Bedrooms', '#bedrooms'], ['Experiences', '#experiences']] },
    { h: 'Plan', links: [['Getting Here', '#getting-here'], ['Reviews', '#reviews'], ['FAQ', '#faq'], ['Book Your Stay', '#book'], ['View on Airbnb', AIRBNB]] },
  ];
  const Social = ({ d, href = 'placeholder.html' }) => (
    <a href={href} aria-label="Social link" style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(214,164,90,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--kh-sandstone-gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
    </a>
  );
  return (
    <footer style={{ background: 'var(--kh-ocean-900)', color: 'var(--kh-ivory-white)', padding: `clamp(56px,7vw,88px) ${KH.pad} 32px` }}>
      <div style={{ maxWidth: KH.maxW, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr 1fr', gap: 'clamp(32px,4vw,56px)', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, letterSpacing: '0.06em', color: 'var(--kh-ivory-white)' }}>King Hill Villa</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
              <span style={{ color: 'var(--kh-sandstone-gold)', fontSize: 11 }}>✦</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.26em', color: 'rgba(248,244,236,0.85)' }}>AT MUDJIN HARBOR</span>
              <span style={{ color: 'var(--kh-sandstone-gold)', fontSize: 11 }}>✦</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'rgba(248,244,236,0.68)', margin: '20px 0 0', maxWidth: 320 }}>
              A private hilltop villa above Mudjin Harbor.<br />Middle Caicos, Turks &amp; Caicos Islands.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(248,244,236,0.68)', margin: '12px 0 0' }}>Ed Fogarty · <a href="tel:+14125124300" style={{ color: 'rgba(248,244,236,0.85)', textDecoration: 'none' }}>(412) 512-4300</a></p>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <Social d={<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="var(--kh-sandstone-gold)" /></>} />
              <Social d={<path d="M15 8h-2a2 2 0 0 0-2 2v10M8 13h6" />} />
              <Social d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--kh-sandstone-gold)', marginBottom: 16 }}>{c.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.links.map(([label, href]) => (
                  <a key={label} href={href} target={href.charAt(0) === '#' ? undefined : '_blank'} rel={href.charAt(0) === '#' ? undefined : 'noopener'} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(248,244,236,0.78)', textDecoration: 'none' }}
                    onMouseEnter={(e)=>e.currentTarget.style.color='var(--kh-ivory-white)'} onMouseLeave={(e)=>e.currentTarget.style.color='rgba(248,244,236,0.78)'}>{label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'clamp(40px,5vw,64px)', paddingTop: 24, borderTop: '1px solid rgba(248,244,236,0.14)', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 14, justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px,2vw,18px)', fontStyle: 'italic', color: 'var(--kh-sandstone-gold)', letterSpacing: '0.04em' }}>Where the Caribbean slows down.</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(248,244,236,0.5)', letterSpacing: '0.04em' }}>© 2026 King Hill Villa at Mudjin Harbor</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { BookingInquiry, SiteFooter });
