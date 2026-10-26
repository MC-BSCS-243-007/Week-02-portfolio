import { useId } from 'react'
import type { ProjectGlyph } from '../data/projects'

type ProjectArtProps = {
  glyph: ProjectGlyph
}

export function ProjectArt({ glyph }: ProjectArtProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const gradientId = `project-art-${uid}`

  return (
    <svg
      aria-hidden="true"
      className={`project-art art-${glyph}`}
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 640 400"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.36" />
          <stop offset="0.55" stopColor="currentColor" stopOpacity="0.07" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.26" />
        </linearGradient>
      </defs>

      {glyph === 'fashion' ? (
        <g>
          <circle
            cx="458"
            cy="168"
            fill={`url(#${gradientId})`}
            opacity="0.7"
            r="150"
          />
          <circle
            cx="458"
            cy="168"
            fill="none"
            r="150"
            stroke="currentColor"
            strokeOpacity="0.32"
          />
          <path
            d="M458 18v300M308 168h300"
            stroke="currentColor"
            strokeOpacity="0.08"
          />
          <g>
            <path
              d="M462 70c20 0 34 14 34 33l-12 44 47 140c-45 33-93 33-138 0l47-140-12-44c0-19 14-33 34-33Z"
              fill={`url(#${gradientId})`}
              stroke="currentColor"
              strokeOpacity="0.7"
            />
            <path
              d="M462 70V50m-19 19 19-19 19 19"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.55"
            />
          </g>
          <g fill="none" stroke="currentColor" strokeOpacity="0.4">
            <path d="M148 330h344" />
            <path d="M180 330v-16M220 330v-8M260 330v-20" />
            <rect
              fill="currentColor"
              fillOpacity="0.05"
              height="84"
              rx="3"
              transform="rotate(-4 223 272)"
              width="66"
              x="190"
              y="230"
            />
          </g>
          <g fill="currentColor" fillOpacity="0.7">
            <circle cx="540" cy="290" r="4" />
            <circle cx="578" cy="248" r="2.5" />
            <circle cx="505" cy="325" r="2" />
          </g>
        </g>
      ) : null}

      {glyph === 'shop' ? (
        <g>
          <circle
            cx="222"
            cy="148"
            fill={`url(#${gradientId})`}
            opacity="0.55"
            r="122"
          />
          <circle
            cx="222"
            cy="148"
            fill="none"
            r="122"
            stroke="currentColor"
            strokeOpacity="0.26"
          />
          <rect
            fill={`url(#${gradientId})`}
            height="190"
            rx="12"
            stroke="currentColor"
            strokeOpacity="0.65"
            width="146"
            x="256"
            y="126"
          />
          <path
            d="M300 138v-24a29 29 0 0 1 58 0v24"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.6"
          />
          <path
            d="M256 178h146"
            stroke="currentColor"
            strokeOpacity="0.35"
          />
          <path
            d="M286 178v-12M336 178v-12M372 178v-12"
            stroke="currentColor"
            strokeOpacity="0.2"
          />
          <g
            fill="currentColor"
            fillOpacity="0.06"
            stroke="currentColor"
            strokeOpacity="0.42"
          >
            <rect height="76" rx="10" width="112" x="424" y="178" />
            <rect height="96" rx="10" width="88" x="138" y="218" />
          </g>
          <g fill="currentColor" fillOpacity="0.44">
            <rect height="7" rx="3.5" width="58" x="442" y="196" />
            <rect height="5" rx="2.5" width="38" x="442" y="212" />
            <rect height="5" rx="2.5" width="46" x="158" y="238" />
          </g>
          <path
            d="M324 210v62M304 241h40"
            stroke="currentColor"
            strokeOpacity="0.55"
            strokeWidth="1.4"
          />
          <path
            d="M458 300h48M482 276v48"
            stroke="currentColor"
            strokeOpacity="0.22"
          />
          <circle cx="580" cy="120" fill="currentColor" fillOpacity="0.65" r="3" />
          <circle cx="110" cy="150" fill="currentColor" fillOpacity="0.5" r="2" />
        </g>
      ) : null}

      {glyph === 'satellite' ? (
        <g>
          <circle
            cx="320"
            cy="452"
            fill={`url(#${gradientId})`}
            opacity="0.62"
            r="248"
          />
          <circle
            cx="320"
            cy="452"
            fill="none"
            r="248"
            stroke="currentColor"
            strokeOpacity="0.24"
          />
          <ellipse
            cx="320"
            cy="204"
            fill="none"
            rx="236"
            ry="70"
            stroke="currentColor"
            strokeDasharray="3 8"
            strokeOpacity="0.22"
            transform="rotate(-8 320 204)"
          />
          <ellipse
            cx="320"
            cy="204"
            fill="none"
            rx="172"
            ry="44"
            stroke="currentColor"
            strokeOpacity="0.18"
            transform="rotate(12 320 204)"
          />
          <g transform="translate(320 196) rotate(-8)">
            <rect
              fill={`url(#${gradientId})`}
              height="60"
              rx="8"
              stroke="currentColor"
              strokeOpacity="0.7"
              width="80"
              x="-40"
              y="-30"
            />
            <rect
              fill="currentColor"
              fillOpacity="0.1"
              height="34"
              rx="4"
              stroke="currentColor"
              strokeOpacity="0.42"
              width="70"
              x="-138"
              y="-17"
            />
            <rect
              fill="currentColor"
              fillOpacity="0.1"
              height="34"
              rx="4"
              stroke="currentColor"
              strokeOpacity="0.42"
              width="70"
              x="68"
              y="-17"
            />
            <path
              d="M-68 0h28M40 0h28"
              stroke="currentColor"
              strokeOpacity="0.5"
            />
            <path
              d="M0-30v-36"
              stroke="currentColor"
              strokeOpacity="0.5"
            />
            <circle cx="0" cy="-76" fill="currentColor" r="7" />
            <path
              d="M0 30v22M-16 52h32"
              stroke="currentColor"
              strokeOpacity="0.42"
            />
          </g>
          <g fill="currentColor">
            <circle cx="112" cy="94" fillOpacity="0.7" r="3" />
            <circle cx="520" cy="120" fillOpacity="0.45" r="2" />
            <circle cx="548" cy="286" fillOpacity="0.6" r="2.6" />
            <circle cx="94" cy="300" fillOpacity="0.4" r="1.8" />
            <circle cx="414" cy="66" fillOpacity="0.5" r="1.6" />
          </g>
          <path
            d="M520 84v22M509 95h22"
            stroke="currentColor"
            strokeOpacity="0.35"
          />
        </g>
      ) : null}

      {glyph === 'music' ? (
        <g>
          <circle
            cx="404"
            cy="172"
            fill={`url(#${gradientId})`}
            opacity="0.75"
            r="128"
          />
          <circle
            cx="404"
            cy="172"
            fill="none"
            r="128"
            stroke="currentColor"
            strokeOpacity="0.55"
          />
          <circle
            cx="404"
            cy="172"
            fill="none"
            r="96"
            stroke="currentColor"
            strokeOpacity="0.22"
          />
          <circle
            cx="404"
            cy="172"
            fill="none"
            r="70"
            stroke="currentColor"
            strokeOpacity="0.14"
          />
          <circle
            cx="404"
            cy="172"
            fill="currentColor"
            fillOpacity="0.1"
            r="34"
            stroke="currentColor"
            strokeOpacity="0.35"
          />
          <circle cx="404" cy="172" fill="currentColor" r="5" />
          <g fill="currentColor" fillOpacity="0.55">
            <rect height="44" rx="3" width="9" x="108" y="292" />
            <rect height="76" rx="3" width="9" x="130" y="260" />
            <rect height="104" rx="3" width="9" x="152" y="232" />
            <rect height="62" rx="3" width="9" x="174" y="274" />
            <rect height="90" rx="3" width="9" x="196" y="246" />
            <rect height="52" rx="3" width="9" x="218" y="284" />
          </g>
          <path
            d="M100 336h200"
            stroke="currentColor"
            strokeOpacity="0.25"
          />
          <g
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.3"
          >
            <path d="M510 288v-50l38-12v50" />
            <ellipse cx="500" cy="290" rx="11" ry="7" transform="rotate(-14 500 290)" />
            <ellipse cx="538" cy="278" rx="11" ry="7" transform="rotate(-14 538 278)" />
          </g>
          <g fill="currentColor">
            <circle cx="552" cy="116" fillOpacity="0.7" r="2.4" />
            <circle cx="320" cy="82" fillOpacity="0.45" r="1.8" />
            <circle cx="565" cy="220" fillOpacity="0.45" r="2" />
          </g>
        </g>
      ) : null}
    </svg>
  )
}
