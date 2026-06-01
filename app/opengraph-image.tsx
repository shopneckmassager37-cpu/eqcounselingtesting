import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'EQ Counseling & Testing — Mental Health Services in Orlando, FL'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a3a6b 0%, #2B5FA5 55%, #3D8B9E 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '60px',
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: -80, right: -80,
          width: 320, height: 320, borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -60,
          width: 240, height: 240, borderRadius: '50%',
          background: 'rgba(61,139,158,0.15)',
          display: 'flex',
        }} />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 36 }}>
          <div style={{
            width: 88, height: 88, borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            border: '3px solid rgba(255,255,255,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 30, fontWeight: 900, color: 'white', letterSpacing: '-1px',
          }}>
            EQ
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{
              fontSize: 42, fontWeight: 800, color: 'white', letterSpacing: '-0.5px', lineHeight: 1,
            }}>
              EQ Counseling &amp; Testing
            </span>
            <span style={{ fontSize: 20, color: 'rgba(147,197,253,1)', fontWeight: 500 }}>
              Mental Health Services · Orlando, FL · Est. 2012
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: 26, color: 'rgba(219,234,254,0.9)',
          textAlign: 'center', maxWidth: 740,
          margin: 0, lineHeight: 1.4, fontWeight: 400,
        }}>
          Compassionate counseling &amp; comprehensive assessments
          for individuals, couples &amp; families — Orlando, FL.
        </p>

        {/* Service pills */}
        <div style={{ display: 'flex', gap: 16, marginTop: 44 }}>
          {['Counseling', 'Assessments', 'Mediation', 'Veterans Care'].map((s) => (
            <div
              key={s}
              style={{
                padding: '10px 24px', borderRadius: 100,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'rgba(191,219,254,1)', fontSize: 18, fontWeight: 600,
                display: 'flex',
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <p style={{
          position: 'absolute', bottom: 32,
          fontSize: 16, color: 'rgba(147,197,253,0.7)', margin: 0,
          display: 'flex',
        }}>
          eqcounselingtesting.com · 407-461-9721
        </p>
      </div>
    ),
    size,
  )
}
