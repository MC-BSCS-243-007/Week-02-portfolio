const marqueeItems = [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Node.js',
  'REST APIs',
  'Git',
]

export function Marquee() {
  return (
    <div aria-hidden="true" className="marquee">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={`${copy}-${item}`}>
                {item}
                <span className="marquee-star">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
