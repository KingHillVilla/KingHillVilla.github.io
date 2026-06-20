/* King Hill Villa: Kai, the RAG-ready turtle concierge */

const KAI_GREETING = "Hi, I'm Kai 🐢, your concierge for King Hill Villa. Ask me anything about the villa or getting around Middle Caicos.";

const KAI_SUGGESTIONS = [
  'How do I get to Middle Caicos?',
  'Is this on Provo?',
  'What should I pack?',
  'Where should we eat?',
  'How do we get groceries?',
  'Best beaches nearby?',
  "What's included at the villa?",
  'How do check-in & checkout work?',
  'What can we do with kids?',
  'What if it rains?',
  'What are the house rules?',
  'Where are the pool, hot tub & beach?',
];

/* Honest, RAG-ready responses: generally-true guidance, with exact specifics
   deferred to the connected guest guide. Each names the source it will draw on. */
function kaiReply(q) {
  const s = q.toLowerCase();
  const src = (name) => name;
  const has = (...w) => w.some((x) => s.includes(x));

  if (has('provo', 'providenciales'))
    return { src: src('Location & Getting Here'), text: "No, King Hill is on Middle Caicos, not Provo. It's the quiet, natural side of Turks & Caicos: dramatic cliffs, empty beaches, far fewer people. You fly into Provo, then it's a short ferry and drive to reach us." };
  if (has('get to', 'getting here', 'how do i get', 'airport', 'ferry', 'transport', 'drive'))
    return { src: src('Transportation'), text: "You'll fly into Providenciales (PLS), take the ferry across to North Caicos, then drive over the causeway to Middle Caicos. Once I'm connected to the guest guide I'll give you live ferry times, the rental-car options, and door-to-door directions." };
  if (has('pack', 'bring', 'wear'))
    return { src: src('What to Pack'), text: "Think light and natural: reef-safe sunscreen, water shoes for the rocks, a hat, snorkel gear if you have it, and a few groceries from Provo. The full packing checklist lives in your guest guide." };
  if (has('eat', 'restaurant', 'dining', 'food', 'dinner'))
    return { src: src('Restaurants'), text: "Mudjin Bar & Grill is the cliff-top favourite just minutes away. There are a handful of lovely local spots on Middle & North Caicos, many are best booked ahead. The guide has the current list with hours." };
  if (has('grocery', 'groceries', 'supermarket', 'provision'))
    return { src: src('Groceries & Provisioning'), text: "Shops on Middle Caicos are small, so many guests stock up on Provo before the ferry. I'll share the best markets and a starter shopping list from the guide once connected." };
  if (has('beach', 'beaches', 'swim', 'snorkel'))
    return { src: src('Beaches & Snorkeling'), text: "Mudjin Harbor's cove is right below the cliffs; Bambarra Beach has long, shallow turquoise flats; and there's good snorkeling close to shore. Your guide marks the easiest access points." };
  if (has('included', 'amenities', 'what comes', 'wifi', 'wi-fi', 'have'))
    return { src: src('Villa & Amenities'), text: "The entire villa: 3 bedrooms, 3.5 baths, sleeps 7, infinity lap pool, ocean-view hot tub, three terraces, full kitchen, A/C, and high-speed Wi-Fi. Self check-in with a smart lock." };
  if (has('check-in', 'check in', 'checkout', 'check out', 'arrival', 'smart lock', 'key'))
    return { src: src('House Manual'), text: "Self check-in with a smart lock, you'll get your code and step-by-step arrival instructions in the guide before you travel. Checkout is simple; I'll have the exact times for your stay." };
  if (has('kid', 'kids', 'child', 'family'))
    return { src: src('Family & Kids'), text: "It's a great family base, pool, terraces, gentle beaches, caves to explore, and turtles to spot. Ask me for a kid-friendly day plan and I'll build one from the guide." };
  if (has('rain', 'rainy', 'weather'))
    return { src: src('Local Tips'), text: "Rainy spells are usually short. Good rainy-day picks: the Conch Bar Caves, a long lunch at a local spot, board games at the villa, or a drive to North Caicos. The guide has more." };
  if (has('rule', 'rules', 'policy', 'policies', 'pet', 'smoking'))
    return { src: src('Policies & House Rules'), text: "House rules and policies are kept in your guide and listing, things like quiet hours, the pool, and care for the property. I'll surface the exact details once connected." };
  if (has('pool', 'hot tub', 'spa', 'beach access', 'where is'))
    return { src: src('Villa Layout'), text: "The infinity pool and sunset-facing hot tub are on the main pool deck off the living area; shared beach access is a short drive away. The guide includes a labelled map of the property." };
  if (has('before booking', 'should we know', 'know before'))
    return { src: src('Before You Book'), text: "Middle Caicos is remote and rewards a little planning, transport, groceries, and ferry timing. In return you get real privacy, dramatic scenery, and empty beaches. Happy to walk you through any of it." };
  if (has('whale', 'bird', 'wildlife', 'turtle'))
    return { src: src('Nature & Wildlife'), text: "Humpback whales pass offshore Jan–Apr, frigatebirds and herons are around year-round, and turtles cruise the reefs. The guide notes the best times and spots." };
  return { src: src('King Hill Guest Guide'), text: "Good question! I'll be able to answer that precisely once I'm connected to the King Hill guest guide, Airbnb listing, and house manual. In the meantime, ask me about getting here, the villa, beaches, dining, or planning your stay." };
}

function KaiChat({ open, setOpen, seed }) {
  const isMobile = useIsMobile(640);
  const [msgs, setMsgs] = useState([{ from: 'kai', text: KAI_GREETING }]);
  const [typing, setTyping] = useState(false);
  const [val, setVal] = useState('');
  const scrollRef = useRef(null);
  const seededRef = useRef(null);

  const send = useCallback((text) => {
    const q = (text != null ? text : val).trim();
    if (!q) return;
    setVal('');
    setMsgs((m) => [...m, { from: 'me', text: q }]);
    setTyping(true);
    setTimeout(() => {
      const r = kaiReply(q);
      setTyping(false);
      setMsgs((m) => [...m, { from: 'kai', text: r.text, src: r.src }]);
    }, 700);
  }, [val]);

  // auto-send a seeded question when opened from elsewhere on the page
  useEffect(() => {
    if (open && seed && seededRef.current !== seed) {
      seededRef.current = seed;
      send(seed);
    }
    if (!open) seededRef.current = null;
  }, [open, seed]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, typing, open]);

  const launcherBottom = isMobile ? 78 : 26;

  return (
    <>
      {/* Launcher */}
      {!open && (
        <button onClick={() => setOpen(true)} aria-label="Ask Kai, the villa concierge" style={{
          position: 'fixed', right: isMobile ? 16 : 26, bottom: launcherBottom, zIndex: 100,
          display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer',
          background: 'var(--kh-ocean-900)', border: '1px solid rgba(214,164,90,0.5)', borderRadius: 'var(--radius-pill)',
          padding: '8px 18px 8px 8px', boxShadow: '0 10px 34px rgba(7,39,63,0.4)',
        }}>
          <img loading="lazy" decoding="async" src="assets/kai_turtle.png" alt="" style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 0 2px var(--kh-sandstone-gold)' }} />
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.15, whiteSpace: 'nowrap' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--kh-ivory-white)', whiteSpace: 'nowrap' }}>Ask Kai</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(248,244,236,0.7)', whiteSpace: 'nowrap' }}>Villa concierge</span>
          </span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div style={{
          position: 'fixed', zIndex: 110,
          right: isMobile ? 0 : 26, bottom: isMobile ? 0 : 26,
          left: isMobile ? 0 : 'auto', top: isMobile ? 0 : 'auto',
          width: isMobile ? '100%' : 392, height: isMobile ? '100%' : 'min(620px, 86vh)',
          background: 'var(--kh-ivory-white)', borderRadius: isMobile ? 0 : 'var(--radius-lg)',
          boxShadow: '0 24px 60px rgba(7,39,63,0.4)', border: '1px solid var(--border-hairline)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{ background: 'var(--kh-ocean-900)', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
            <img loading="lazy" decoding="async" src="assets/kai_turtle.png" alt="Kai the turtle" style={{ width: 46, height: 46, borderRadius: '50%', boxShadow: '0 0 0 2px var(--kh-sandstone-gold)' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600, letterSpacing: '0.03em', color: 'var(--kh-ivory-white)' }}>Kai</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'rgba(248,244,236,0.72)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--kh-caribbean-aqua)', boxShadow: '0 0 6px var(--kh-caribbean-aqua)' }} />
                Concierge · trained on the guest guide
              </div>
            </div>
            <button aria-label="Close chat" onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
              <LineIcon name="close" size={22} color="rgba(248,244,236,0.85)" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--kh-sand-100)' }}>
            {msgs.map((m, i) => (
              m.from === 'kai' ? (
                <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', maxWidth: '92%' }}>
                  <img loading="lazy" decoding="async" src="assets/kai_turtle.png" alt="" style={{ width: 26, height: 26, borderRadius: '50%', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ background: 'var(--color-surface)', border: '1px solid var(--border-hairline)', borderRadius: '4px 14px 14px 14px', padding: '11px 14px', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>{m.text}</div>
                    {m.src && <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, marginLeft: 2, fontFamily: 'var(--font-body)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--kh-driftwood-600)' }}><LineIcon name="info" size={12} color="var(--kh-driftwood-500)" /> Source · {m.src}</div>}
                  </div>
                </div>
              ) : (
                <div key={i} style={{ alignSelf: 'flex-end', maxWidth: '85%', background: 'var(--kh-ocean-blue)', color: 'var(--kh-ivory-white)', borderRadius: '14px 4px 14px 14px', padding: '11px 14px', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5 }}>{m.text}</div>
              )
            ))}
            {typing && (
              <div style={{ display: 'flex', gap: 9, alignItems: 'center' }}>
                <img loading="lazy" decoding="async" src="assets/kai_turtle.png" alt="" style={{ width: 26, height: 26, borderRadius: '50%' }} />
                <div style={{ background: 'var(--color-surface)', border: '1px solid var(--border-hairline)', borderRadius: 14, padding: '12px 14px', display: 'flex', gap: 4 }}>
                  {[0,1,2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--kh-driftwood-500)', animation: `kh-bob 1s ${i*0.15}s infinite` }} />)}
                </div>
              </div>
            )}

            {/* Suggestions (only before first user message) */}
            {msgs.length === 1 && !typing && (
              <div style={{ marginTop: 4 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '4px 2px 10px' }}>Popular questions</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {KAI_SUGGESTIONS.map((sug) => (
                    <button key={sug} onClick={() => send(sug)} style={{
                      cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--kh-ocean-blue)',
                      background: 'var(--color-surface)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-pill)', padding: '8px 13px',
                      transition: 'all var(--dur-fast)',
                    }} onMouseEnter={(e)=>{e.currentTarget.style.borderColor='var(--kh-aqua-300)';e.currentTarget.style.background='var(--kh-aqua-100)';}}
                    onMouseLeave={(e)=>{e.currentTarget.style.borderColor='var(--border-hairline)';e.currentTarget.style.background='var(--color-surface)';}}>{sug}</button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ padding: '12px 14px', borderTop: '1px solid var(--border-hairline)', background: 'var(--kh-ivory-white)' }}>
            <form onSubmit={(e) => { e.preventDefault(); send(); }} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input value={val} onChange={(e) => setVal(e.target.value)} placeholder="Ask Kai about your stay…" style={{
                flex: 1, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', background: 'var(--color-surface)',
                border: '1.5px solid var(--border-hairline)', borderRadius: 'var(--radius-pill)', padding: '11px 16px', outline: 'none',
              }} onFocus={(e)=>{e.target.style.borderColor='var(--kh-caribbean-aqua)';e.target.style.boxShadow='0 0 0 3px rgba(30,156,195,0.16)';}}
              onBlur={(e)=>{e.target.style.borderColor='var(--border-hairline)';e.target.style.boxShadow='none';}} />
              <button type="submit" aria-label="Send" style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'var(--kh-sandstone-gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LineIcon name="send" size={20} color="var(--kh-ocean-900)" />
              </button>
            </form>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, color: 'var(--text-muted)', textAlign: 'center', marginTop: 9 }}>
              Concept demo · Kai will answer from the King Hill guest guide once connected.
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, { KaiChat });
