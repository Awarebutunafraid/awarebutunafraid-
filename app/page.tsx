"use client";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{background: '#0e0e0e', color: '#f0ebe0'}}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/5" style={{background: 'rgba(14,14,14,0.96)', backdropFilter: 'blur(8px)'}}>
        <a href="/" style={{fontFamily: 'var(--font-oswald), sans-serif', fontSize: '1.05rem', letterSpacing: '0.12em', color: '#f0ebe0', fontWeight: 600}}>
          AWARE BUT UNAFRAID
        </a>
        <div className="hidden md:flex items-center gap-8" style={{fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 500}}>
          <a href="#mission" className="transition-colors" style={{color: '#8a9ab0'}}>MISSION</a>
          <a href="#podcast" className="transition-colors" style={{color: '#8a9ab0'}}>PODCAST</a>
          <a href="#join" className="transition-colors" style={{color: '#8a9ab0'}}>MERCH</a>
          <a href="#join" style={{
            background: '#b22234',
            color: '#f0ebe0',
            padding: '0.5rem 1.25rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            fontSize: '0.75rem',
          }}>
            JOIN THE MOVEMENT
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

        {/* BG layers */}
        <div className="absolute inset-0">
          {/* Base: near black with faint navy tint */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(170deg, #0a0f18 0%, #0e0e0e 55%, #160808 100%)'}}></div>

          {/* Worn flag stripe — left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{background: 'linear-gradient(to bottom, transparent 0%, #b22234 20%, #b22234 80%, transparent 100%)', opacity: 0.6}}></div>

          {/* Faint horizontal rule like a newspaper column */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(to right, transparent, rgba(178,34,52,0.4), transparent)'}}></div>

          {/* Low star pattern — very subtle */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(240,235,224,0.06) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            backgroundPosition: '26px 26px',
          }}></div>

          {/* Red ground glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px]" style={{background: 'radial-gradient(ellipse at bottom, rgba(178,34,52,0.12), transparent 70%)'}}></div>

          {/* Navy glow top right */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px]" style={{background: 'radial-gradient(ellipse at top right, rgba(13,27,42,0.8), transparent 70%)'}}></div>

          {/* Vignette */}
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(0,0,0,0.55) 100%)'}}></div>
        </div>

        {/* Eagle — large watermark, left-weighted */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-20 pointer-events-none select-none" style={{zIndex: 1}}>
          <svg viewBox="0 0 500 500" className="w-[420px] h-[420px] md:w-[580px] md:h-[580px]" style={{opacity: 0.055}} fill="#f0ebe0" xmlns="http://www.w3.org/2000/svg">
            <path d="M250 40 C230 40 210 50 195 68 C165 55 130 62 110 82 C90 102 85 130 92 155 C70 150 48 158 38 175 C28 192 32 215 46 228 C30 234 18 248 22 265 C26 282 44 292 62 288 C56 304 62 322 76 330 C90 338 108 332 116 318 C122 334 136 344 152 342 C168 340 178 326 176 310 C186 320 200 326 216 320 C232 314 238 298 234 282 L250 380 L266 282 C262 298 268 314 284 320 C300 326 314 320 324 310 C322 326 332 340 348 342 C364 344 378 334 384 318 C392 332 410 338 424 330 C438 322 444 304 438 288 C456 292 474 282 478 265 C482 248 470 234 454 228 C468 215 472 192 462 175 C452 158 430 150 408 155 C415 130 410 102 390 82 C370 62 335 55 305 68 C290 50 270 40 250 40Z"/>
            <ellipse cx="250" cy="62" rx="30" ry="34"/>
            <path d="M270 74 L298 68 L280 85 Z"/>
            <circle cx="264" cy="55" r="6"/>
            <circle cx="265" cy="54" r="2.5" fill="#0e0e0e"/>
            <path d="M228 382 L215 425 L227 418 L223 440 L235 428 L231 448 L242 434 L250 452 L258 434 L269 448 L265 428 L277 440 L273 418 L285 425 L272 382Z"/>
          </svg>
        </div>

        {/* Hero copy — left aligned */}
        <div className="relative px-8 md:px-16 lg:px-24 max-w-4xl pt-28 pb-20" style={{zIndex: 2}}>

          {/* Dateline / eyebrow — like a newspaper */}
          <div className="flex items-center gap-3 mb-8">
            <div style={{width: '2px', height: '1.1rem', background: '#b22234'}}></div>
            <span style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: '0.68rem',
              letterSpacing: '0.35em',
              color: '#b22234',
              fontWeight: 500,
            }}>A MOVEMENT &nbsp;·&nbsp; A MISSION &nbsp;·&nbsp; A MOMENT</span>
          </div>

          {/* Main title */}
          <h1 style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: '0.02em',
            fontSize: 'clamp(4.5rem, 15vw, 12rem)',
            color: '#f0ebe0',
          }}>
            <span className="block">AWARE</span>
            <span className="block" style={{color: '#b22234', WebkitTextStroke: '1px rgba(178,34,52,0.3)'}}>BUT</span>
            <span className="block">UNAFRAID</span>
          </h1>

          {/* Rule */}
          <div className="flex items-center gap-4 mt-8 mb-8">
            <div style={{height: '1px', width: '48px', background: '#b22234', opacity: 0.7}}></div>
            <div style={{width: '5px', height: '5px', background: '#b22234', transform: 'rotate(45deg)', opacity: 0.8}}></div>
            <div style={{height: '1px', flex: 1, maxWidth: '120px', background: 'rgba(240,235,224,0.12)'}}></div>
          </div>

          {/* Subhead — Source Serif, feels like editorial */}
          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            fontWeight: 300,
            color: 'rgba(240,235,224,0.7)',
            lineHeight: 1.75,
            maxWidth: '540px',
            fontStyle: 'italic',
          }}>
            For Americans who see what&apos;s happening, say what needs to be said,
            and stand firm through faith, unity, and the grit this country was built on.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#mission" style={{
              background: '#b22234',
              color: '#f0ebe0',
              padding: '0.9rem 2rem',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '0.18em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}>
              THE MISSION
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#podcast" style={{
              border: '1px solid rgba(240,235,224,0.2)',
              color: 'rgba(240,235,224,0.7)',
              padding: '0.9rem 2rem',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: 500,
              fontSize: '0.8rem',
              letterSpacing: '0.18em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              LISTEN NOW
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex items-center gap-3" style={{opacity: 0.3}}>
            <div style={{width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(240,235,224,0.6), transparent)'}}></div>
            <span style={{fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', color: '#f0ebe0'}}>SCROLL</span>
          </div>
        </div>
      </section>

      {/* ── MISSION PREVIEW ── */}
      <section id="mission" className="relative py-28 px-8 md:px-16 lg:px-24" style={{background: '#0d0d0d', borderTop: '1px solid rgba(240,235,224,0.06)'}}>

        {/* Section marker */}
        <div className="flex items-center gap-3 mb-14">
          <div style={{width: '2px', height: '1.1rem', background: '#b22234'}}></div>
          <span style={{fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.68rem', letterSpacing: '0.35em', color: '#b22234', fontWeight: 500}}>THE MISSION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl">
          <div>
            <h2 style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.0,
              letterSpacing: '0.02em',
              color: '#f0ebe0',
            }}>
              TRUTH HAS NEVER<br/>
              <span style={{color: '#b22234'}}>NEEDED PERMISSION</span>
            </h2>
            <div style={{height: '2px', width: '48px', background: '#b22234', marginTop: '1.5rem', marginBottom: '1.5rem', opacity: 0.7}}></div>
            <a href="/mission" style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: '#b22234',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 500,
              borderBottom: '1px solid rgba(178,34,52,0.4)',
              paddingBottom: '2px',
            }}>
              READ THE FULL MISSION
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <div>
            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: '1.15rem',
              fontWeight: 300,
              color: 'rgba(240,235,224,0.65)',
              lineHeight: 1.85,
              marginBottom: '1.25rem',
              fontStyle: 'italic',
            }}>
              We live in an age of information overload, manufactured fear, and deliberate confusion.
            </p>
            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: '0.975rem',
              fontWeight: 400,
              color: 'rgba(240,235,224,0.45)',
              lineHeight: 1.9,
            }}>
              Aware But Unafraid exists for those who choose to see through it — who love this country
              enough to be honest about it, and who refuse to let fear be the last word. Not a political
              party. Not a media outlet. A movement of people who believe that faith, honesty, and
              American grit are this nation&apos;s greatest assets.
            </p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 max-w-6xl" style={{borderTop: '1px solid rgba(240,235,224,0.07)'}}>
          {[
            { num: "I", title: "See Clearly", body: "Face the truth of what's happening — politically, culturally, spiritually — without flinching or filtering." },
            { num: "II", title: "Speak Honestly", body: "Say what needs to be said. The movement grows when people stop whispering and start talking out loud." },
            { num: "III", title: "Stand Firm", body: "Knowledge without courage is useless. This is for those ready to act on what they know, in faith and in grit." },
          ].map((p, i) => (
            <div key={p.num} className="py-10 pr-10" style={{
              borderRight: i < 2 ? '1px solid rgba(240,235,224,0.07)' : 'none',
              paddingLeft: i > 0 ? '2.5rem' : '0',
            }}>
              <div style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'rgba(178,34,52,0.5)',
                marginBottom: '1rem',
              }}>{p.num}</div>
              <h3 style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.15em',
                color: '#f0ebe0',
                marginBottom: '0.75rem',
              }}>{p.title.toUpperCase()}</h3>
              <p style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.9rem',
                color: 'rgba(240,235,224,0.4)',
                lineHeight: 1.8,
              }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PODCAST ── */}
      <section id="podcast" className="py-28 px-8 md:px-16 lg:px-24" style={{background: '#0a0a0a', borderTop: '1px solid rgba(240,235,224,0.06)'}}>

        <div className="flex items-center gap-3 mb-14">
          <div style={{width: '2px', height: '1.1rem', background: '#b22234'}}></div>
          <span style={{fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.68rem', letterSpacing: '0.35em', color: '#b22234', fontWeight: 500}}>THE PODCAST</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl">
          <div>
            <h2 style={{
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.0,
              letterSpacing: '0.02em',
              color: '#f0ebe0',
            }}>
              THE CONVERSATIONS<br/>
              <span style={{color: '#b22234'}}>AMERICA NEEDS</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-source-serif), Georgia, serif',
              fontSize: '1rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(240,235,224,0.55)',
              lineHeight: 1.85,
              marginTop: '1.5rem',
              marginBottom: '2rem',
            }}>
              Raw, unfiltered, and honest. Every episode cuts through the noise
              to get at what&apos;s real — because you deserve more than talking points.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" style={{
                background: '#1DB954',
                color: '#000',
                padding: '0.75rem 1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
              }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                SPOTIFY
              </a>
              <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" style={{
                background: '#872ec4',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
              }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.2 1H5.8C3.15 1 1 3.15 1 5.8v12.4C1 20.85 3.15 23 5.8 23h12.4c2.65 0 4.8-2.15 4.8-4.8V5.8C23 3.15 20.85 1 18.2 1zM12 4.6c2.43 0 4.4 1.97 4.4 4.4 0 1.7-.96 3.18-2.38 3.94l.7 3.36c.08.38-.22.7-.6.7H9.88c-.38 0-.68-.32-.6-.7l.7-3.36C8.56 12.18 7.6 10.7 7.6 9c0-2.43 1.97-4.4 4.4-4.4z"/>
                </svg>
                APPLE PODCASTS
              </a>
            </div>
          </div>

          {/* Podcast card */}
          <div style={{border: '1px solid rgba(240,235,224,0.08)', position: 'relative', padding: '2rem'}}>
            <div style={{position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', background: '#b22234', opacity: 0.7}}></div>
            <div style={{
              width: '100%',
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #0d1b2a 0%, #0e0e0e 50%, #160808 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Stars in artwork */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(240,235,224,0.08) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}></div>
              <div style={{textAlign: 'center', position: 'relative', zIndex: 1}}>
                <div style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontWeight: 700,
                  fontSize: '5rem',
                  letterSpacing: '0.08em',
                  color: '#f0ebe0',
                  lineHeight: 1,
                }}>ABU</div>
                <div style={{width: '40px', height: '2px', background: '#b22234', margin: '0.75rem auto'}}></div>
                <div style={{
                  fontFamily: 'var(--font-oswald), sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.25em',
                  color: 'rgba(240,235,224,0.3)',
                }}>AWARE BUT UNAFRAID</div>
              </div>
            </div>
            <div style={{fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.05em', color: '#f0ebe0', marginBottom: '0.4rem'}}>
              NEW EPISODES COMING SOON
            </div>
            <div style={{fontFamily: 'var(--font-source-serif), Georgia, serif', fontSize: '0.85rem', color: 'rgba(240,235,224,0.35)', fontStyle: 'italic'}}>
              Subscribe now so you don&apos;t miss the launch.
            </div>
          </div>
        </div>
      </section>

      {/* ── JOIN ── */}
      <section id="join" className="relative py-28 px-8 md:px-16 lg:px-24 overflow-hidden" style={{background: '#0e0e0e', borderTop: '1px solid rgba(178,34,52,0.2)'}}>

        {/* Subtle red wash */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 100%, rgba(178,34,52,0.07), transparent 70%)',
          pointerEvents: 'none',
        }}></div>

        <div className="relative max-w-3xl">
          <div className="flex items-center gap-3 mb-10">
            <div style={{width: '2px', height: '1.1rem', background: '#b22234'}}></div>
            <span style={{fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.68rem', letterSpacing: '0.35em', color: '#b22234', fontWeight: 500}}>JOIN THE MOVEMENT</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '0.02em',
            color: '#f0ebe0',
            marginBottom: '1.5rem',
          }}>
            THIS IS YOUR<br/>
            <span style={{color: '#b22234'}}>COUNTRY TOO.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: '1.05rem',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(240,235,224,0.5)',
            lineHeight: 1.8,
            maxWidth: '480px',
            marginBottom: '2.5rem',
          }}>
            Get updates, early episode access, and first notice on merch.
            No noise. Just the movement.
          </p>

          <form style={{display: 'flex', maxWidth: '420px'}} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                background: 'rgba(240,235,224,0.05)',
                border: '1px solid rgba(240,235,224,0.15)',
                borderRight: 'none',
                color: '#f0ebe0',
                padding: '0.9rem 1.25rem',
                fontSize: '0.85rem',
                outline: 'none',
                fontFamily: 'var(--font-source-serif), Georgia, serif',
              }}
            />
            <button type="submit" style={{
              background: '#b22234',
              color: '#f0ebe0',
              padding: '0.9rem 1.5rem',
              fontFamily: 'var(--font-oswald), sans-serif',
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              I&apos;M IN
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{background: '#080808', borderTop: '1px solid rgba(240,235,224,0.06)', padding: '2.5rem 2rem'}}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div style={{fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.12em', color: 'rgba(240,235,224,0.6)'}}>
            AWARE BUT UNAFRAID
          </div>
          <div style={{fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(240,235,224,0.2)'}}>
            © 2026 AWARE BUT UNAFRAID · ALL RIGHTS RESERVED
          </div>
          <div style={{display: 'flex', gap: '2rem'}}>
            {['MISSION', 'PODCAST', 'JOIN'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'rgba(240,235,224,0.25)',
              }}>{link}</a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
