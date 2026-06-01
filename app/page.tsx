export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{background: 'linear-gradient(to bottom, rgba(10,14,26,0.97), transparent)'}}>
        <div className="text-white font-black tracking-[0.2em] text-sm uppercase" style={{fontFamily: 'var(--font-bebas), serif', letterSpacing: '0.15em', fontSize: '1.1rem'}}>
          Aware But Unafraid
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-zinc-400">
          <a href="#mission" className="hover:text-white transition-colors">Mission</a>
          <a href="#podcast" className="hover:text-white transition-colors">Podcast</a>
          <a href="#join" className="hover:text-white transition-colors">Merch</a>
          <a href="#join" className="bg-red-700 hover:bg-red-600 text-white px-5 py-2 transition-colors tracking-widest text-xs font-bold uppercase">
            Join the Movement
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          {/* Deep navy base */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(160deg, #04060f 0%, #0d1b3e 45%, #1c0508 100%)'}}></div>
          {/* Subtle star field */}
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '44px 44px'}}></div>
          {/* Red glow bottom left */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-20" style={{background: 'radial-gradient(ellipse at bottom left, #b91c1c, transparent 70%)'}}></div>
          {/* Blue glow top right */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15" style={{background: 'radial-gradient(ellipse at top right, #1e3a8a, transparent 70%)'}}></div>
          {/* Vignette */}
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.65) 100%)'}}></div>
          {/* Bottom red stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-red-700 opacity-60"></div>
        </div>

        {/* Eagle watermark */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
          <svg viewBox="0 0 500 500" className="w-[700px] h-[700px] opacity-[0.045]" fill="white" xmlns="http://www.w3.org/2000/svg">
            {/* Detailed stylized eagle */}
            <path d="M250 40
              C230 40 210 50 195 68
              C165 55 130 62 110 82
              C90 102 85 130 92 155
              C70 150 48 158 38 175
              C28 192 32 215 46 228
              C30 234 18 248 22 265
              C26 282 44 292 62 288
              C56 304 62 322 76 330
              C90 338 108 332 116 318
              C122 334 136 344 152 342
              C168 340 178 326 176 310
              C186 320 200 326 216 320
              C232 314 238 298 234 282
              L250 380 L266 282
              C262 298 268 314 284 320
              C300 326 314 320 324 310
              C322 326 332 340 348 342
              C364 344 378 334 384 318
              C392 332 410 338 424 330
              C438 322 444 304 438 288
              C456 292 474 282 478 265
              C482 248 470 234 454 228
              C468 215 472 192 462 175
              C452 158 430 150 408 155
              C415 130 410 102 390 82
              C370 62 335 55 305 68
              C290 50 270 40 250 40Z"/>
            {/* Head */}
            <ellipse cx="250" cy="60" rx="28" ry="32"/>
            {/* Beak */}
            <path d="M268 72 L292 68 L278 82 Z"/>
            {/* Eye */}
            <circle cx="262" cy="55" r="5"/>
            <circle cx="263" cy="54" r="2" fill="#0a0e1a"/>
            {/* Talons */}
            <path d="M230 380 L218 420 L228 415 L225 435 L235 425 L232 445 L242 432 L250 450 L258 432 L268 445 L265 425 L275 435 L272 415 L282 420 L270 380Z"/>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">

          {/* Eyebrow line */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-red-700 opacity-80"></div>
            <span className="text-red-400 tracking-[0.5em] text-[0.65rem] uppercase font-semibold">
              A Movement. A Mission. A Moment.
            </span>
            <div className="h-px w-16 bg-red-700 opacity-80"></div>
          </div>

          {/* Main headline — Bebas Neue display font */}
          <h1 className="uppercase leading-[0.9] mb-8 select-none" style={{
            fontFamily: 'var(--font-bebas), serif',
            fontSize: 'clamp(5rem, 18vw, 14rem)',
            letterSpacing: '0.04em',
            textShadow: '0 0 80px rgba(185,28,28,0.3)',
          }}>
            <span className="block text-white">Aware</span>
            <span className="block" style={{color: '#dc2626', textShadow: '0 0 60px rgba(220,38,38,0.5)'}}>But</span>
            <span className="block text-white">Unafraid</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-[80px] bg-zinc-700"></div>
            <div className="w-1.5 h-1.5 bg-red-700 rotate-45"></div>
            <div className="h-px flex-1 max-w-[80px] bg-zinc-700"></div>
          </div>

          {/* Subheadline */}
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14 font-light tracking-wide">
            This is not a brand. This is a calling.<br className="hidden md:block"/>
            For Americans who see clearly, speak honestly,<br className="hidden md:block"/>
            and refuse to be silenced by fear.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a href="#mission" className="group flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white px-10 py-4 font-bold tracking-[0.2em] text-sm uppercase transition-all duration-200 shadow-lg shadow-red-900/30">
              Discover the Mission
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#podcast" className="flex items-center gap-3 border border-zinc-600 hover:border-zinc-300 text-zinc-300 hover:text-white px-10 py-4 font-bold tracking-[0.2em] text-sm uppercase transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Listen Now
            </a>
          </div>

          {/* Scroll cue */}
          <div className="flex flex-col items-center gap-2 text-zinc-700 animate-pulse">
            <div className="w-px h-10 bg-gradient-to-b from-zinc-700 to-transparent mx-auto"></div>
            <span className="text-[0.6rem] tracking-[0.4em] uppercase">Scroll</span>
          </div>
        </div>
      </section>

      {/* ── MISSION PREVIEW ── */}
      <section id="mission" className="relative py-32 px-6" style={{background: 'linear-gradient(to bottom, #0a0e1a 0%, #0c1122 100%)'}}>
        <div className="max-w-5xl mx-auto">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-red-700"></div>
            <span className="text-red-500 tracking-[0.4em] text-[0.65rem] uppercase font-semibold">The Mission</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="uppercase leading-tight mb-6 text-white" style={{
                fontFamily: 'var(--font-bebas), serif',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                letterSpacing: '0.04em',
              }}>
                Truth Has Never<br/>
                <span style={{color: '#dc2626'}}>Needed Permission</span>
              </h2>
              <a href="/mission" className="inline-flex items-center gap-3 border-b border-red-800 pb-1 text-red-500 hover:text-red-400 hover:border-red-400 font-semibold tracking-widest text-xs uppercase transition-colors">
                Read the Full Mission
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
            <div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                We live in an age of information overload, manufactured fear, and deliberate confusion.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                Aware But Unafraid exists for those who choose to see through it — who love this country
                enough to be honest about it, and who refuse to let fear be the last word. This is not
                a political party. This is not a media outlet. This is a movement of people who believe
                that an informed, courageous citizenry is America&apos;s greatest asset.
              </p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/50">
            {[
              {
                number: "01",
                title: "See Clearly",
                body: "Face the truth of what&apos;s happening — politically, culturally, spiritually — without flinching or filtering."
              },
              {
                number: "02",
                title: "Speak Honestly",
                body: "Say what needs to be said. The movement grows when people stop whispering and start talking out loud."
              },
              {
                number: "03",
                title: "Stand Firm",
                body: "Knowledge without courage is useless. This movement is for those ready to act on what they know."
              },
            ].map((pillar) => (
              <div key={pillar.number} className="bg-[#0c1122] p-10 group hover:bg-[#0f1630] transition-colors duration-300 border-t-2 border-transparent hover:border-red-700">
                <div className="text-zinc-800 font-black text-6xl mb-6 group-hover:text-red-900 transition-colors duration-300" style={{fontFamily: 'var(--font-bebas), serif'}}>
                  {pillar.number}
                </div>
                <h3 className="text-white font-bold text-base uppercase tracking-[0.15em] mb-3">{pillar.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm">{pillar.body.replace(/&apos;/g, "'")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PODCAST ── */}
      <section id="podcast" className="py-32 px-6" style={{background: '#070a12'}}>
        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-red-700"></div>
            <span className="text-red-500 tracking-[0.4em] text-[0.65rem] uppercase font-semibold">The Podcast</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="uppercase leading-tight mb-6 text-white" style={{
                fontFamily: 'var(--font-bebas), serif',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                letterSpacing: '0.04em',
              }}>
                The Conversations<br/>
                <span style={{color: '#dc2626'}}>America Needs</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                Raw, unfiltered, honest. Every episode cuts through the noise to get at
                what&apos;s real — because you deserve more than talking points.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#1DB954] hover:bg-[#1ed760] text-black px-6 py-3.5 font-bold text-sm uppercase tracking-wider transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Listen on Spotify
                </a>
                <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-[#872ec4] hover:bg-[#9b3dd4] text-white px-6 py-3.5 font-bold text-sm uppercase tracking-wider transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.2 1H5.8C3.15 1 1 3.15 1 5.8v12.4C1 20.85 3.15 23 5.8 23h12.4c2.65 0 4.8-2.15 4.8-4.8V5.8C23 3.15 20.85 1 18.2 1zM12 4.6c2.43 0 4.4 1.97 4.4 4.4 0 1.7-.96 3.18-2.38 3.94l.7 3.36c.08.38-.22.7-.6.7H9.88c-.38 0-.68-.32-.6-.7l.7-3.36C8.56 12.18 7.6 10.7 7.6 9c0-2.43 1.97-4.4 4.4-4.4z"/>
                  </svg>
                  Apple Podcasts
                </a>
              </div>
            </div>

            {/* Podcast artwork placeholder */}
            <div className="relative border border-zinc-800 p-8">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-700"></div>
              <div className="absolute top-3 right-3 text-[0.6rem] text-zinc-700 tracking-widest uppercase">Latest Episode</div>
              <div className="w-full aspect-square bg-gradient-to-br from-[#0d1b3e] via-[#0a0e1a] to-[#1c0508] flex items-center justify-center mb-6 relative overflow-hidden">
                {/* Mini star field in artwork */}
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                <div className="text-center relative z-10">
                  <div className="font-black text-7xl mb-1 text-white" style={{fontFamily: 'var(--font-bebas), serif', letterSpacing: '0.1em'}}>ABU</div>
                  <div className="w-12 h-0.5 bg-red-700 mx-auto mb-3"></div>
                  <div className="text-zinc-500 text-[0.6rem] tracking-[0.3em] uppercase">Aware But Unafraid</div>
                </div>
              </div>
              <div className="text-white font-bold text-lg mb-1">New Episodes Coming Soon</div>
              <div className="text-zinc-500 text-sm">Subscribe now so you don&apos;t miss the launch.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOIN THE MOVEMENT ── */}
      <section id="join" className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(160deg, #0f0205 0%, #0a0e1a 60%, #04060f 100%)'}}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px'}}></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-red-900 opacity-60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-red-900 opacity-40"></div>
        {/* Red glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] opacity-10" style={{background: 'radial-gradient(ellipse, #b91c1c, transparent 70%)'}}></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-red-700"></div>
            <span className="text-red-500 tracking-[0.4em] text-[0.65rem] uppercase font-semibold">Join the Movement</span>
            <div className="h-px w-12 bg-red-700"></div>
          </div>

          <h2 className="uppercase leading-tight mb-6 text-white" style={{
            fontFamily: 'var(--font-bebas), serif',
            fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            letterSpacing: '0.04em',
            textShadow: '0 0 60px rgba(185,28,28,0.25)',
          }}>
            This is Your<br/>
            <span style={{color: '#dc2626'}}>Country Too.</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Get updates, early access to episodes, and be the first to know
            when merch drops. No spam. No noise. Just the movement.
          </p>

          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto shadow-2xl shadow-red-950/30" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-zinc-900/80 border border-zinc-700 border-r-0 text-white px-5 py-4 text-sm outline-none focus:border-red-700 transition-colors placeholder-zinc-600"
            />
            <button type="submit" className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 font-bold tracking-[0.2em] text-sm uppercase transition-colors whitespace-nowrap border border-red-700">
              I&apos;m In
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-900 py-10 px-6" style={{background: '#04060f'}}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white font-black tracking-[0.15em] text-base uppercase" style={{fontFamily: 'var(--font-bebas), serif', fontSize: '1.2rem'}}>
            Aware But Unafraid
          </div>
          <div className="text-zinc-700 text-xs tracking-widest uppercase">
            © 2025 Aware But Unafraid · All Rights Reserved
          </div>
          <div className="flex items-center gap-6 text-zinc-600 text-xs tracking-widest uppercase">
            <a href="#mission" className="hover:text-zinc-300 transition-colors">Mission</a>
            <a href="#podcast" className="hover:text-zinc-300 transition-colors">Podcast</a>
            <a href="#join" className="hover:text-zinc-300 transition-colors">Join</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
