import { useEffect, useRef, useState } from 'react'

const PARTNER_LOGOS = ['Fernbrook', 'Aventra', 'Coldpress', 'Northloop', 'Rivergate', 'Marlow']

const OFFERS = [
  {
    title: 'Sponsored Trails',
    desc: 'Claim a themed route inside Pace for 14 or 30 days. Your brand shows up across the home feed, push, and email as members log routes toward a shared goal — with full attribution from view to redemption.',
  },
  {
    title: 'Hubs',
    desc: 'An always-on branded space inside the app where members follow your challenges, drops, and content on their own schedule. Built for repeat visits, not a single campaign moment.',
  },
  {
    title: 'Spotlights',
    desc: 'A short, high-visibility placement at the exact moment someone opens Pace. Built for time-boxed pushes — a launch, a flash offer, a last call before a deadline.',
  },
  {
    title: 'Rewards Shelf',
    desc: 'List your offer where members redeem their points. Pair discovery with a limited-time boost to move people from browsing to claiming.',
  },
]

const CASES = [
  {
    brand: 'Fernbrook Outdoor',
    type: 'Sponsored Trail · 30 days',
    metrics: [
      ['31M', 'Impressions'],
      ['540K', 'Site visits'],
      ['142K', 'Route joiners'],
    ],
    quote: 'The trail sold out its regional cap in nine days. Setup was fast and reporting was clean the whole way through.',
  },
  {
    brand: 'Coldpress Nutrition',
    type: 'Hub · ongoing',
    metrics: [
      ['398K', 'Hub members'],
      ['58%', 'Email open rate'],
      ['2.4B', 'Steps logged'],
    ],
    quote: 'Our Hub is now the highest-retention channel we run outside our own app. Members come back weekly on their own.',
  },
  {
    brand: 'Northloop Gear',
    type: 'Spotlight · 7 days',
    metrics: [
      ['9M', 'Impressions'],
      ['61K', 'Redemptions'],
      ['312K', 'Site visits'],
    ],
    quote: 'We booked a Spotlight around a product drop and sold through inventory two days ahead of plan.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Pace treated our launch like it mattered to them too. The trail exceeded every regional benchmark we set going in.',
    name: 'Priya Anand',
    role: 'Partnerships Lead, Fernbrook Outdoor',
  },
  {
    quote:
      'Movement and habit-building go hand in hand with what we sell. The Hub gives us a channel that keeps working long after a campaign ends.',
    name: 'Marcus Ude',
    role: 'Senior Brand Manager, Coldpress Nutrition',
  },
]

function useCountUp(target, duration = 2200) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let start = null
    function tick(ts) {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) ref.current = requestAnimationFrame(tick)
    }
    ref.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(ref.current)
  }, [target, duration])

  return value
}

function TopoBackground() {
  return (
    <svg className="topo" viewBox="0 0 1180 520" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="topoFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6ff3f" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#d6ff3f" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M -50 ${80 + i * 60} C 200 ${20 + i * 60}, 350 ${140 + i * 60}, 600 ${70 + i * 60} S 1000 ${20 + i * 60}, 1230 ${90 + i * 60}`}
          fill="none"
          stroke="url(#topoFade)"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  )
}

function PhoneCounter() {
  const steps = useCountUp(4213897)
  return (
    <div className="counter-card">
      <div className="counter-number">{steps.toLocaleString()}</div>
      <div className="counter-label">Steps converted to rewards on Pace, right now</div>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            <span className="logo-mark">P</span>
            pace <span className="logo-slash">/partners</span>
          </div>
          <a href="#contact" className="nav-cta">
            Contact us
          </a>
        </div>
      </nav>

      <header className="hero">
        <TopoBackground />
        <div className="wrap hero-inner">
          <div className="eyebrow">
            <span className="pulse-dot" />
            Now booking Q1 trail slots
          </div>
          <h1>
            Turn everyday motion into <em>real rewards</em> — partner with Pace
          </h1>
          <p className="hero-sub">
            Reach members who are already moving. Show up where a walk becomes a reason to come back to your brand.
          </p>
          <PhoneCounter />
          <div className="cta-row">
            <a href="#contact" className="btn-primary">
              Start a partnership
            </a>
            <a href="#how-it-works" className="btn-ghost">
              See how it works
            </a>
          </div>
          <div className="logo-strip">
            {PARTNER_LOGOS.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </header>

      <section className="stats">
        <div className="wrap stats-grid">
          <div className="stat">
            <div className="stat-num">24%</div>
            <div className="stat-label">Average lift in weekly steps after a member joins a sponsored trail</div>
          </div>
          <div className="stat">
            <div className="stat-num">6.4M</div>
            <div className="stat-label">Monthly active members across 94 countries</div>
          </div>
          <div className="stat">
            <div className="stat-num">4.8B</div>
            <div className="stat-label">Steps logged inside brand campaigns to date</div>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="wrap">
          <div className="section-tag">How it works</div>
          <h2 className="section-title">Four ways to show up in someone's daily walk</h2>
          <p className="section-desc">
            Pick the format that matches your goal — a short burst of awareness, or a hub members return to for months.
          </p>
          <div className="offer-grid">
            {OFFERS.map((offer, i) => (
              <div className="offer-card" key={offer.title}>
                <div className="offer-index">{String(i + 1).padStart(2, '0')}</div>
                <h3>{offer.title}</h3>
                <p>{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-tag">Case studies</div>
          <h2 className="section-title">Recent partnerships, in their own numbers</h2>
          <p className="section-desc">A sample of what brands have run with Pace over the last two quarters.</p>
          <div className="case-strip">
            {CASES.map((c) => (
              <div className="case-card" key={c.brand}>
                <div className="case-brand">{c.brand}</div>
                <div className="case-type">{c.type}</div>
                <div className="case-metrics">
                  {c.metrics.map(([num, label]) => (
                    <div key={label}>
                      <div className="case-metric-num">{num}</div>
                      <div className="case-metric-label">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="case-quote">“{c.quote}”</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-tag">Hear it from partners</div>
          <h2 className="section-title">What it's like to work with us</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testi-card" key={t.name}>
                <p className="testi-quote">“{t.quote}”</p>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <h2>Let's build your first campaign</h2>
          <p>
            Tell us your goals and timeline — reach us directly at{' '}
            <span className="contact-email">partners@pace.app</span>
          </p>
          <a href="mailto:partners@pace.app" className="btn-primary">
            Send a request
          </a>

          <div className="footer-links">
            <a href="#how-it-works">How it works</a>
            <a href="#contact">Contact</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Help center</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-bottom">© {new Date().getFullYear()} Pace Inc. All rights reserved.</div>
        </div>
      </section>
    </div>
  )
}
