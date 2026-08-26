import { useCountUp } from '../hooks/useCountUp'

export function PhoneMockup() {
  const steps = useCountUp(8412)
  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-statusbar">
          <span>9:41</span>
          <span className="phone-statusbar-icons">••• ▲ 87%</span>
        </div>
        <div className="phone-screen-header">
          <span className="phone-back">‹</span>
          <span>Today's route</span>
          <span />
        </div>
        <svg className="phone-route" viewBox="0 0 280 200" aria-hidden="true">
          <defs>
            <linearGradient id="routeLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d6ff3f" />
              <stop offset="100%" stopColor="#ff6b4a" />
            </linearGradient>
          </defs>
          <path
            d="M 20 160 C 60 120, 40 80, 90 70 S 160 100, 190 60 S 250 40, 260 20"
            fill="none"
            stroke="url(#routeLine)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="20" cy="160" r="6" fill="#f5f3ec" />
          <circle cx="260" cy="20" r="6" fill="#d6ff3f" />
        </svg>
        <div className="phone-stat-chip">
          <div className="phone-stat-num">{steps.toLocaleString()}</div>
          <div className="phone-stat-label">steps today</div>
        </div>
        <div className="phone-reward-chip">
          <span className="phone-reward-dot" />
          Reward unlocked at 10,000
        </div>
      </div>
    </div>
  )
}
