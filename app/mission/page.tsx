"use client";

export default function MissionPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: '#0e0e0e', color: '#f0ebe0' }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col border-b border-white/5" style={{ background: 'rgba(14,14,14,0.97)', backdropFilter: 'blur(8px)' }}>
        <div className="flex items-center justify-between px-8 py-4">
          <a href="/" style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '1.05rem', letterSpacing: '0.12em', color: '#c8bfad', fontWeight: 600 }}>
            AWARE BUT UNAFRAID
          </a>
          <a href="/#join" style={{
            background: '#9e2230',
            color: '#c8bfad',
            padding: '0.5rem 1.25rem',
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: 600,
            letterSpacing: '0.12em',
            fontSize: '0.75rem',
          }}>
            JOIN THE MOVEMENT
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 pb-2.5">
          <div style={{ width: '24px', height: '1px', background: '#9e2230', opacity: 0.7 }}></div>
          <span style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.35em',
            color: '#9e2230',
            fontWeight: 500,
          }}>A MOVEMENT &nbsp;·&nbsp; A MISSION &nbsp;·&nbsp; A MOMENT</span>
          <div style={{ width: '24px', height: '1px', background: '#9e2230', opacity: 0.7 }}></div>
        </div>
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="relative pt-48 pb-24 px-8 md:px-16 lg:px-24 overflow-hidden" style={{ background: '#0d0d0d' }}>

        {/* Subtle red accent — left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: 'linear-gradient(to bottom, transparent 0%, #9e2230 20%, #9e2230 80%, transparent 100%)', opacity: 0.6 }}></div>

        {/* Background texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(240,235,224,0.025) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}></div>

        {/* Red wash from bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
          background: 'linear-gradient(to top, rgba(158,34,48,0.05), transparent)',
          pointerEvents: 'none',
        }}></div>

        <div className="relative max-w-5xl">
          {/* Section marker */}
          <div className="flex items-center gap-3 mb-10">
            <div style={{ width: '2px', height: '1.1rem', background: '#9e2230' }}></div>
            <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.68rem', letterSpacing: '0.35em', color: '#9e2230', fontWeight: 500 }}>THE MISSION</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            lineHeight: 0.92,
            letterSpacing: '0.02em',
            color: '#f0ebe0',
            marginBottom: '2rem',
          }}>
            TRUTH HAS<br />
            NEVER NEEDED<br />
            <span style={{ color: '#9e2230' }}>PERMISSION.</span>
          </h1>

          <div className="flex items-center gap-4 mb-10">
            <div style={{ height: '1px', width: '48px', background: '#9e2230', opacity: 0.7 }}></div>
            <div style={{ width: '5px', height: '5px', background: '#9e2230', transform: 'rotate(45deg)', opacity: 0.8 }}></div>
            <div style={{ height: '1px', width: '48px', background: '#9e2230', opacity: 0.7 }}></div>
          </div>

          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(240,235,224,0.6)',
            lineHeight: 1.8,
            maxWidth: '620px',
          }}>
            We are living through a defining moment in American history. What we do with it — how we see it, how we speak about it, how we stand through it — will determine the kind of country our children inherit.
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: '#0e0e0e', borderTop: '1px solid rgba(240,235,224,0.06)' }}>
        <div className="max-w-5xl">

          <div className="flex items-center gap-3 mb-12">
            <div style={{ width: '2px', height: '1.1rem', background: '#9e2230' }}></div>
            <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.68rem', letterSpacing: '0.35em', color: '#9e2230', fontWeight: 500 }}>THE PROBLEM</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.0,
                letterSpacing: '0.02em',
                color: '#f0ebe0',
                marginBottom: '1.5rem',
              }}>
                FEAR IS THE<br />
                <span style={{ color: '#9e2230' }}>OLDEST WEAPON.</span>
              </h2>
              <div style={{ height: '2px', width: '48px', background: '#9e2230', marginBottom: '2rem', opacity: 0.7 }}></div>
              <p style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '1.1rem',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'rgba(240,235,224,0.5)',
                lineHeight: 1.85,
              }}>
                And it has never been more deliberately deployed than it is right now.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                "The media profits from your panic. The algorithm feeds on your outrage. The political class keeps its power by keeping you divided.",
                "Most people can feel something is wrong. They see the manipulation, the double standards, the slow erosion of things that used to be common sense. But they&apos;ve been made to feel like they&apos;re alone — or worse, like speaking up will cost them something.",
                "That silence is not neutrality. It is surrender.",
              ].map((text, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-source-serif), Georgia, serif',
                  fontSize: '0.975rem',
                  fontWeight: 400,
                  color: 'rgba(240,235,224,0.45)',
                  lineHeight: 1.9,
                }} dangerouslySetInnerHTML={{ __html: text }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ANSWER ── */}
      <section className="py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(240,235,224,0.06)' }}>

        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 0% 50%, rgba(158,34,48,0.06), transparent 60%)',
          pointerEvents: 'none',
        }}></div>

        <div className="relative max-w-5xl">
          <div className="flex items-center gap-3 mb-12">
            <div style={{ width: '2px', height: '1.1rem', background: '#9e2230' }}></div>
            <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.68rem', letterSpacing: '0.35em', color: '#9e2230', fontWeight: 500 }}>THE ANSWER</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            lineHeight: 1.0,
            letterSpacing: '0.02em',
            color: '#f0ebe0',
            marginBottom: '3rem',
          }}>
            AWARE BUT UNAFRAID<br />
            <span style={{ color: '#9e2230' }}>IS THE ANTIDOTE.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ borderTop: '1px solid rgba(240,235,224,0.07)' }}>
            {[
              {
                num: "I",
                title: "See Clearly",
                body: "Face the truth of what's happening — politically, culturally, spiritually — without flinching or filtering. The first step to solving a problem is refusing to look away from it.",
              },
              {
                num: "II",
                title: "Speak Honestly",
                body: "Say what needs to be said. Not to provoke. Not to perform. But because honest conversation is the foundation of every free society, and right now it is under threat.",
              },
              {
                num: "III",
                title: "Stand Firm",
                body: "Knowledge without courage is useless. This is a call to act on what you know — through faith, through community, through the quiet, stubborn grit this country was built on.",
              },
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
                  color: 'rgba(158,34,48,0.5)',
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
                  lineHeight: 1.85,
                }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE VISION ── */}
      <section className="py-24 px-8 md:px-16 lg:px-24" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(240,235,224,0.06)' }}>
        <div className="max-w-5xl">

          <div className="flex items-center gap-3 mb-12">
            <div style={{ width: '2px', height: '1.1rem', background: '#9e2230' }}></div>
            <span style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.68rem', letterSpacing: '0.35em', color: '#9e2230', fontWeight: 500 }}>THE VISION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.0,
                letterSpacing: '0.02em',
                color: '#f0ebe0',
              }}>
                THIS IS NOT<br />
                A POLITICAL<br />
                <span style={{ color: '#9e2230' }}>PARTY.</span>
              </h2>
              <div style={{ height: '2px', width: '48px', background: '#9e2230', marginTop: '1.5rem', marginBottom: '2rem', opacity: 0.7 }}></div>
              <p style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '1.1rem',
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'rgba(240,235,224,0.5)',
                lineHeight: 1.85,
              }}>
                It&apos;s something older, and more important than that.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.975rem',
                fontWeight: 400,
                color: 'rgba(240,235,224,0.5)',
                lineHeight: 1.9,
              }}>
                Aware But Unafraid is a movement grounded in the belief that this country&apos;s future belongs to the people who love it enough to be honest about it. Not partisan operatives. Not media personalities. Ordinary Americans — workers, parents, veterans, believers — who are tired of being told what to think and afraid to say what they know.
              </p>
              <p style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.975rem',
                fontWeight: 400,
                color: 'rgba(240,235,224,0.45)',
                lineHeight: 1.9,
              }}>
                We exist to give that voice a platform. Through the podcast, through the community, through every conversation that someone has after listening — we are building a culture of clarity. Not anger. Not despair. Clarity, courage, and the kind of faith that makes men and women stand when it would be easier to sit down.
              </p>
              <p style={{
                fontFamily: 'var(--font-source-serif), Georgia, serif',
                fontSize: '0.975rem',
                fontWeight: 400,
                color: 'rgba(240,235,224,0.4)',
                lineHeight: 1.9,
              }}>
                America has been here before. It has faced moments when the easy path was silence and the right path was speech. Every generation gets its test. This is ours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREED ── */}
      <section className="relative py-28 px-8 md:px-16 lg:px-24 overflow-hidden" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(158,34,48,0.2)' }}>

        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(158,34,48,0.07), transparent 70%)',
          pointerEvents: 'none',
        }}></div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div style={{ height: '1px', width: '48px', background: '#9e2230', opacity: 0.5 }}></div>
            <div style={{ width: '5px', height: '5px', background: '#9e2230', transform: 'rotate(45deg)', opacity: 0.7 }}></div>
            <div style={{ height: '1px', width: '48px', background: '#9e2230', opacity: 0.5 }}></div>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-oswald), sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 1.0,
            letterSpacing: '0.02em',
            color: '#f0ebe0',
            marginBottom: '2.5rem',
          }}>
            WE ARE<br />
            <span style={{ color: '#9e2230' }}>AWARE.</span><br />
            AND WE ARE<br />
            <span style={{ color: '#9e2230' }}>UNAFRAID.</span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-source-serif), Georgia, serif',
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(240,235,224,0.5)',
            lineHeight: 1.85,
            marginBottom: '3rem',
          }}>
            Join a community of Americans who refuse to choose between loving their country and telling the truth about it.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#join"
              style={{
                background: '#9e2230',
                color: '#f0ebe0',
                padding: '0.9rem 2.2rem',
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.18em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.border = '1px solid #9e2230';
                (e.currentTarget as HTMLElement).style.color = '#9e2230';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#9e2230';
                (e.currentTarget as HTMLElement).style.border = '1px solid transparent';
                (e.currentTarget as HTMLElement).style.color = '#f0ebe0';
              }}
            >
              JOIN THE MOVEMENT
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/#podcast"
              style={{
                border: '1px solid rgba(240,235,224,0.25)',
                color: 'rgba(240,235,224,0.7)',
                padding: '0.9rem 2.2rem',
                fontFamily: 'var(--font-oswald), sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                letterSpacing: '0.18em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#9e2230';
                (e.currentTarget as HTMLElement).style.borderColor = '#9e2230';
                (e.currentTarget as HTMLElement).style.color = '#f0ebe0';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(240,235,224,0.25)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(240,235,224,0.7)';
              }}
            >
              THE PODCAST
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <div style={{ height: '1px', width: '48px', background: '#9e2230', opacity: 0.5 }}></div>
            <div style={{ width: '5px', height: '5px', background: '#9e2230', transform: 'rotate(45deg)', opacity: 0.7 }}></div>
            <div style={{ height: '1px', width: '48px', background: '#9e2230', opacity: 0.5 }}></div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#080808', borderTop: '1px solid rgba(240,235,224,0.06)', padding: '2.5rem 2rem' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.12em', color: 'rgba(240,235,224,0.6)' }}>
            AWARE BUT UNAFRAID
          </div>
          <div style={{ fontFamily: 'var(--font-oswald), sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(240,235,224,0.2)' }}>
            © 2026 AWARE BUT UNAFRAID · ALL RIGHTS RESERVED
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[['HOME', '/'], ['PODCAST', '/#podcast'], ['JOIN', '/#join']].map(([label, href]) => (
              <a key={label} href={href} style={{
                fontFamily: 'var(--font-oswald), sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'rgba(240,235,224,0.25)',
              }}>{label}</a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
