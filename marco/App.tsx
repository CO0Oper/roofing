import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  Check,
  CheckCircle,
  Clock,
  HouseLine,
  List,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
  X,
} from '@phosphor-icons/react'

const phoneDisplay = '(510) 656-6400'
const phoneHref = 'tel:+15106566400'
const address = '43230 Osgood Rd, Fremont, CA 94539'
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Marco+Roofing+43230+Osgood+Rd+Fremont+CA+94539'
const diamondSource = 'https://www.diamondcertified.org/report/marco-roofing/'
const bbbSource = 'https://www.bbb.org/us/ca/fremont/profile/roofing-contractors/marco-roofing-1116-11087'

const services = [
  { icon: Wrench, title: 'Roof repair', text: 'Targeted work for leaks, damaged roofing, flashing, and other roof-system trouble.' },
  { icon: HouseLine, title: 'Re-roofing', text: 'Roof replacement planned around the existing structure, material, and property needs.' },
  { icon: ShieldCheck, title: 'Roof inspections', text: 'A practical assessment of roof condition and the work that may be needed next.' },
  { icon: HouseLine, title: 'New construction', text: 'Roofing systems for new residential and light commercial construction.' },
  { icon: Wrench, title: 'Gutters & downspouts', text: 'Water-shedding details coordinated with the roof for a complete exterior system.' },
]

const materials = ['Composition shingles', 'Wood shakes & shingles', 'Concrete & clay tile', 'Standing-seam metal']

const reviewNotes = [
  { name: 'Luis B.', date: 'August 2026', text: 'The crew did a great job, addressed concerns quickly, and made the customer feel like a priority.' },
  { name: 'Keith K.', date: 'June 2026', text: 'Repairs finished on schedule, with the crew leaving the property clean at the end of each day.' },
  { name: 'Carl M.', date: 'April 2026', text: 'A homeowner chose Marco after watching the team’s efficient, quality work throughout the neighborhood.' },
  { name: 'Jordan G.', date: 'April 2026', text: 'A local electrical company described repeated positive experiences and said it confidently refers customers to Marco.' },
  { name: 'Don C.', date: 'January 2026', text: 'A significant storm leak was assessed quickly, temporarily stopped, and then repaired the following week.' },
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Marco Roofing concept home">
      <span className="logo-plate" aria-hidden="true"><span>MR</span></span>
      <span className="logo-type"><strong>Marco Roofing</strong><small>Fremont, California</small></span>
    </a>
  )
}

function Stars() {
  return (
    <span className="stars" aria-label="4.9 out of 5 stars">
      {[0, 1, 2, 3, 4].map((item) => <Star key={item} weight="fill" aria-hidden="true" />)}
    </span>
  )
}

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div id="top">
      <div className="concept-banner">
        <span>Independent website concept</span>
        <span aria-hidden="true">·</span>
        <span>Forms are not connected to Marco Roofing</span>
      </div>

      <header className="site-header">
        <div className="shell nav-shell">
          <Logo />
          <nav className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
            <a href="#reputation" onClick={closeMenu}>Reputation</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#coverage" onClick={closeMenu}>Coverage</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <a className="header-call" href={phoneHref}><Phone weight="bold" aria-hidden="true" /> {phoneDisplay}</a>
          <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X weight="bold" aria-hidden="true" /> : <List weight="bold" aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1 id="hero-heading">A roof built for the Bay Area.</h1>
              <p className="hero-intro">Fremont, California roofing for repairs, re-roofing, inspections, and new construction—from a local company established in 1975.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={phoneHref}><Phone weight="bold" aria-hidden="true" /> Call {phoneDisplay}</a>
                <a className="button button-secondary" href="#contact">Preview a quote request <ArrowRight weight="bold" aria-hidden="true" /></a>
              </div>
              <p className="hero-hours"><Clock weight="bold" aria-hidden="true" /> Monday–Friday · 8:00 AM–5:00 PM</p>
            </div>
            <div className="hero-visual">
              <picture>
                <source media="(max-width: 760px)" srcSet={`${import.meta.env.BASE_URL}assets/marco-hero-880.webp`} />
                <img src={`${import.meta.env.BASE_URL}assets/marco-hero-1800.webp`} alt="Roofers installing charcoal shingles on a Bay Area home; original illustrative concept photography" width="1536" height="1024" fetchPriority="high" />
              </picture>
              <div className="hero-rating" aria-label="Public review rating 4.9 out of 5">
                <span>Public rating</span>
                <strong>4.9</strong>
                <Stars />
              </div>
              <p className="photo-note">Illustrative concept photography—not presented as Marco Roofing project work.</p>
            </div>
          </div>
        </section>

        <section className="proof-bar" aria-label="Public business highlights">
          <div className="shell proof-grid">
            <a className="proof-item proof-link" href={mapsUrl} target="_blank" rel="noreferrer">
              <Star weight="fill" aria-hidden="true" />
              <span><strong>4.9 public rating</strong><small>Open Google reviews</small></span>
            </a>
            <div className="proof-item"><span className="proof-year">1975</span><span><strong>Established in Fremont</strong><small>Family-owned public profile</small></span></div>
            <a className="proof-item proof-link" href={diamondSource} target="_blank" rel="noreferrer"><ShieldCheck weight="duotone" aria-hidden="true" /><span><strong>Diamond Certified</strong><small>Public company report</small></span></a>
            <a className="proof-item proof-link" href={bbbSource} target="_blank" rel="noreferrer"><HouseLine weight="duotone" aria-hidden="true" /><span><strong>CA license #402961</strong><small>Public business record</small></span></a>
          </div>
        </section>

        <section className="reputation section shell" id="reputation" aria-labelledby="reputation-heading">
          <div className="reputation-lead">
            <div>
              <h2 id="reputation-heading">The reputation is already doing the selling.</h2>
              <p>Marco Roofing’s recent public feedback repeatedly points to organized work, clear communication, careful cleanup, and repairs that hold up.</p>
            </div>
            <a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">See reviews on Google <ArrowRight weight="bold" aria-hidden="true" /></a>
          </div>
          <div className="review-board">
            <article className="review-feature">
              <div className="review-score"><strong>4.9</strong><span><Stars /><small>Current public rating</small></span></div>
              <p>Strong customer proof deserves to be visible before a homeowner has to hunt through directory listings.</p>
            </article>
            <div className="review-notes">
              {reviewNotes.map((review) => (
                <article className="review-note" key={review.name}>
                  <p><span>Public review summary</span>{review.text}</p>
                  <footer><strong>{review.name}</strong><span>{review.date}</span></footer>
                </article>
              ))}
            </div>
          </div>
          <p className="source-note">Review language is summarized from public listings for this independent concept. Final site copy should be approved by Marco Roofing.</p>
        </section>

        <section className="services section" id="services" aria-labelledby="services-heading">
          <div className="shell">
            <div className="services-lead">
              <h2 id="services-heading">One roof. Every water-shedding detail connected.</h2>
              <p>From a focused repair to a complete new roofing system, the work starts with understanding the roof that is already there.</p>
            </div>
            <div className="service-list">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-row" key={title}>
                  <Icon weight="duotone" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="materials section" aria-labelledby="materials-heading">
          <div className="shell materials-grid">
            <div className="materials-visual">
              <picture>
                <source media="(max-width: 760px)" srcSet={`${import.meta.env.BASE_URL}assets/marco-detail-800.webp`} />
                <img src={`${import.meta.env.BASE_URL}assets/marco-detail-1200.webp`} alt="A finished charcoal-shingle roof on a Fremont-area home; original illustrative concept photography" width="1536" height="1152" loading="lazy" />
              </picture>
              <p>Illustrative concept photography. A delivered site should use Marco Roofing’s own project gallery.</p>
            </div>
            <div className="materials-copy">
              <h2 id="materials-heading">Materials chosen for the roof—not for a sales script.</h2>
              <p>Marco Roofing’s public service information covers several common Bay Area roof systems. The right choice depends on the structure, condition, performance needs, and project scope.</p>
              <ul>
                {materials.map((material) => <li key={material}><Check weight="bold" aria-hidden="true" /> {material}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="coverage section shell" id="coverage" aria-labelledby="coverage-heading">
          <div className="coverage-copy">
            <h2 id="coverage-heading">Fremont roots. Bay Area reach.</h2>
            <p>Public company information lists service across Alameda, Santa Clara, San Mateo, and parts of Contra Costa County. Call to confirm availability for a specific address.</p>
            <a className="button button-secondary" href={phoneHref}><Phone weight="bold" aria-hidden="true" /> Confirm your area</a>
          </div>
          <div className="county-field" aria-label="Counties listed in public service information">
            <span>Alameda County</span>
            <span>Santa Clara County</span>
            <span>San Mateo County</span>
            <span>Interior Contra Costa</span>
          </div>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-heading">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <h2 id="contact-heading">Start with what is happening up top.</h2>
              <p>This concept demonstrates a clear quote-request flow. It is not connected to Marco Roofing, and no information entered here is sent or stored.</p>
              <a className="contact-phone" href={phoneHref}><Phone weight="duotone" aria-hidden="true" /><span><small>Call the business directly</small><strong>{phoneDisplay}</strong></span></a>
              <a className="contact-address" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin weight="fill" aria-hidden="true" /><span>{address}<small>Open in Google Maps</small></span></a>
            </div>

            {submitted ? (
              <div className="form-success" role="status" aria-live="polite">
                <CheckCircle weight="duotone" aria-hidden="true" />
                <h3>That is the complete request flow.</h3>
                <p>No information was sent or stored. A production version could deliver requests to the business by email, text, or its preferred system.</p>
                <button className="button button-secondary" type="button" onClick={() => setSubmitted(false)}>Preview it again</button>
              </div>
            ) : (
              <form className="quote-form" onSubmit={submitQuote}>
                <div className="form-demo-note"><ShieldCheck weight="fill" aria-hidden="true" /><span><strong>Website concept</strong>No information will be sent or stored.</span></div>
                <div className="field-pair">
                  <label>Full name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
                  <label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="(510) 555-0123" /></label>
                </div>
                <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
                <label>Project address or city<input name="address" autoComplete="street-address" required placeholder="Fremont or nearby Bay Area city" /></label>
                <label>What can we help with?
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option>Roof repair</option>
                    <option>Roof inspection</option>
                    <option>Re-roofing</option>
                    <option>New construction</option>
                    <option>Gutters or downspouts</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>Project details<textarea name="details" rows={4} placeholder="Tell us about the leak, roof condition, or project." /></label>
                <label className="consent-field"><input type="checkbox" required /><span>I understand this is a demo form and not a live request to Marco Roofing.</span></label>
                <button className="button button-primary submit-button" type="submit">Preview quote request <ArrowRight weight="bold" aria-hidden="true" /></button>
                <p className="direct-contact">Need to reach the business? <a href={phoneHref}>Call {phoneDisplay}</a>.</p>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <Logo />
          <p>Independent website concept built from public business information. Not commissioned or approved by Marco Roofing.</p>
          <a href={phoneHref}>{phoneDisplay}</a>
        </div>
      </footer>

      <div className="mobile-actions" aria-label="Quick contact">
        <a href={phoneHref}><Phone weight="fill" aria-hidden="true" /> Call now</a>
        <a href="#contact">Preview request <ArrowRight weight="bold" aria-hidden="true" /></a>
      </div>
    </div>
  )
}

export default App
