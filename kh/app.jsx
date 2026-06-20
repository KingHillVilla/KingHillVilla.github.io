/* King Hill Villa: root App, wires sections + the Kai concierge. */
function App() {
  const [kaiOpen, setKaiOpen] = React.useState(false);
  const [kaiSeed, setKaiSeed] = React.useState(null);
  const askKai = (q) => { setKaiSeed(q || null); setKaiOpen(true); };
  return (
    <div>
      <SiteHeader askKai={askKai} />
      <main>
        <VideoHero askKai={askKai} />
        <TheView />
        <VillaOverview />
        <VideoStory />
        <Suites />
        <OutdoorLiving />
        <MiddleCaicos askKai={askKai} />
        <GuestGuide askKai={askKai} />
        <Reviews />
        <Faq />
        <BookingInquiry askKai={askKai} />
      </main>
      <SiteFooter />
      <MobileBar askKai={askKai} />
      <KaiChat open={kaiOpen} setOpen={setKaiOpen} seed={kaiSeed} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
