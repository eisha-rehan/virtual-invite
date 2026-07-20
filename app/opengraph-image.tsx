import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Shaheer & Hafsa | Engagement Invitation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
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
          background: 'linear-gradient(135deg, #DCEFF7 0%, #EEF6FB 40%, #F8E7EE 100%)',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Background blobs */}
        <div
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(220, 239, 247, 0.5)',
            top: -150,
            left: -150,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(248, 231, 238, 0.5)',
            bottom: -120,
            right: -120,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 13,
              letterSpacing: '0.35em',
              color: '#8BA7B8',
              textTransform: 'uppercase',
              fontFamily: 'system-ui, sans-serif',
              marginBottom: 28,
            }}
          >
            Engagement Ceremony
          </div>

          <div
            style={{
              fontSize: 86,
              color: '#1E2D3A',
              fontStyle: 'italic',
              lineHeight: 1.0,
              letterSpacing: '0.02em',
              marginBottom: 8,
            }}
          >
            Shaheer
          </div>

          <div style={{ fontSize: 42, color: '#C4A4B2', margin: '4px 0' }}>♡</div>

          <div
            style={{
              fontSize: 86,
              color: '#1E2D3A',
              fontStyle: 'italic',
              lineHeight: 1.0,
              letterSpacing: '0.02em',
              marginTop: 8,
            }}
          >
            Hafsa
          </div>

          <div
            style={{
              width: 60,
              height: 1,
              background: '#8BA7B8',
              margin: '32px auto',
            }}
          />

          <div
            style={{
              fontSize: 20,
              color: '#5A7285',
              letterSpacing: '0.2em',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            26 September 2026
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
