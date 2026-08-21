'use client'

import { FormEvent, useState } from 'react'
import {
  ArrowRight,
  CaretRight,
  Check,
  CheckCircle,
  Clock,
  GoogleLogo,
  HouseLine,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  UploadSimple,
  Wind,
  Wrench,
} from '@phosphor-icons/react'

const phoneDisplay = '(669) 323-7770'
const phoneHref = 'tel:+16693237770'
const googleListing = 'https://www.google.com/maps/search/?api=1&query=TopGuard+Roofing+San+Jose+CA'

const services = [
  { icon: HouseLine, title: 'Roof replacement', text: 'A complete new roofing system planned around the home, roof condition, and material needs.' },
  { icon: Wrench, title: 'Roof repair', text: 'Focused repairs for missing shingles, leaks, flashing issues, and wind or storm damage.' },
  { icon: ShieldCheck, title: 'Roof inspection', text: 'A clear assessment of roof condition and the work that may be needed next.' },
  { icon: Wind, title: 'Ventilation and insulation', text: 'Attic venting and roof-system details that help the whole assembly perform properly.' },
  { icon: HouseLine, title: 'Skylights and flashing', text: 'Careful work around openings and roof penetrations where details matter most.' },
  { icon: Wrench, title: 'Gutters and siding', text: 'Exterior work coordinated with the roof for a cleaner, more complete result.' },
]

const reviews = [
  {
    quote: 'The attention to detail on the roofing work, flashing, and overall cleanup was fantastic.',
    name: 'Tracy Fisher',
    detail: 'Google review',
  },
  {
    quote: 'You will likely save money, get solid roofing work, and deal with honest, friendly people.',
    name: 'Zoe Walter',
    detail: 'Google review',
  },
  {
    quote: 'The team stayed organized from start to finish and installed the new roofing system with great care.',
    name: 'Pauline P.',
    detail: 'Google review',
  },
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="TopGuard Roofing home">
      <span className="logo-mark" aria-hidden="true"><span /></span>
      <span><strong>TopGuard</strong><small>Roofing</small></span>
    </a>
  )
}

function Stars({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? 'stars stars-compact' : 'stars'} aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((star) => <Star key={star} weight="fill" aria-hidden="true" />)}
    </span>
  )
}

function App() {
  const [submitted, setSubmitted] = useState(false)

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div id="top">
      <header className="site-header">
        <div className="shell nav-shell">
          <Logo />
          <nav aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-call" href={phoneHref}><Phone weight="bold" aria-hidden="true" /> {phoneDisplay}</a>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <img className="hero-image" src="/assets/topguard-roofing-hero.png" alt="Roofers installing charcoal shingles on a San Jose home" />
          <div className="hero-wash" />
          <div className="shell hero-inner">
            <div className="hero-copy">
              <p className="hero-local"><MapPin weight="fill" aria-hidden="true" /> Roofing San Jose, California</p>
              <h1 id="hero-heading">Strong roofs.<br />Straight answers.</h1>
              <p className="hero-intro">Roof repair, replacement, and careful exterior work for San Jose homes.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Request a quote <ArrowRight weight="bold" aria-hidden="true" /></a>
                <a className="button button-secondary" href={phoneHref}><Phone weight="bold" aria-hidden="true" /> Call {phoneDisplay}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-bar" aria-label="Business highlights">
          <div className="shell proof-grid">
            <a className="rating-proof" href={googleListing} target="_blank" rel="noreferrer">
              <GoogleLogo weight="bold" aria-hidden="true" />
              <span><strong>5.0</strong><Stars compact /></span>
              <span>21 Google reviews</span>
              <CaretRight weight="bold" aria-hidden="true" />
            </a>
            <div className="proof-item"><ShieldCheck weight="duotone" aria-hidden="true" /><span><strong>Veteran-owned</strong><small>Listed on Google</small></span></div>
            <div className="proof-item"><Clock weight="duotone" aria-hidden="true" /><span><strong>Open 24 hours</strong><small>Call for availability</small></span></div>
            <div className="proof-item"><MapPin weight="duotone" aria-hidden="true" /><span><strong>San Jose based</strong><small>Serving local homes</small></span></div>
          </div>
        </section>

        <section className="services section shell" id="services" aria-labelledby="services-heading">
          <div className="services-lead">
            <h2 id="services-heading">One roof. Every detail considered.</h2>
            <p>From a small repair to a full replacement, the work starts with understanding what the roof actually needs.</p>
          </div>
          <div className="service-list">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-row" key={title}>
                <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
                <Icon weight="duotone" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowRight weight="bold" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="craft section" aria-labelledby="craft-heading">
          <div className="shell craft-grid">
            <div className="craft-image-wrap">
              <img src="/assets/topguard-skylight-detail.png" alt="Detailed flashing inspection around a roof skylight" loading="lazy" />
              <p>Illustrative demo photography. Final site gallery to use TopGuard project photos.</p>
            </div>
            <div className="craft-copy">
              <h2 id="craft-heading">The parts you notice.<br />The details you do not.</h2>
              <p>A roof is a complete system. Shingles, flashing, ventilation, gutters, penetrations, and cleanup all shape the finished result.</p>
              <div className="craft-points">
                <p><Check weight="bold" aria-hidden="true" /><span><strong>Clear scope</strong>Know what work is being discussed before the project starts.</span></p>
                <p><Check weight="bold" aria-hidden="true" /><span><strong>Careful execution</strong>Give transitions, penetrations, and edges the attention they deserve.</span></p>
                <p><Check weight="bold" aria-hidden="true" /><span><strong>Respect for the property</strong>Keep the work organized and leave the site clean.</span></p>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews section shell" id="reviews" aria-labelledby="reviews-heading">
          <div className="review-summary">
            <h2 id="reviews-heading">Neighbors remember the workmanship.</h2>
            <div className="review-score"><strong>5.0</strong><span><Stars /><small>Based on 21 Google reviews</small></span></div>
          </div>
          <div className="review-layout">
            {reviews.map((review, index) => (
              <figure className={`review review-${index + 1}`} key={review.name}>
                <Stars compact />
                <blockquote>“{review.quote}”</blockquote>
                <figcaption><strong>{review.name}</strong><span>{review.detail}</span></figcaption>
              </figure>
            ))}
          </div>
          <a className="text-link" href={googleListing} target="_blank" rel="noreferrer">Read all reviews on Google <ArrowRight weight="bold" aria-hidden="true" /></a>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-heading">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <h2 id="contact-heading">Tell us what is happening up top.</h2>
              <p>Share a few details about the property and the roofing work you need. For urgent help, call directly.</p>
              <a className="contact-phone" href={phoneHref}><Phone weight="duotone" aria-hidden="true" /><span><small>Call TopGuard Roofing</small><strong>{phoneDisplay}</strong></span></a>
              <p className="contact-address"><MapPin weight="fill" aria-hidden="true" />4144 Casa Grande Way<br />San Jose, CA 95118</p>
            </div>

            {submitted ? (
              <div className="form-success" role="status">
                <CheckCircle weight="duotone" aria-hidden="true" />
                <h3>The quote request flow works.</h3>
                <p>This is a pitch demo, so no information was sent or stored. The live site can deliver each request to the owner by email, text, or CRM.</p>
                <button className="button button-secondary" type="button" onClick={() => setSubmitted(false)}>Try the form again</button>
              </div>
            ) : (
              <form className="quote-form" onSubmit={submitQuote}>
                <div className="form-demo-note"><ShieldCheck weight="fill" aria-hidden="true" /><span><strong>Pitch demo</strong>No information will be sent or stored.</span></div>
                <div className="field-pair">
                  <label>Full name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
                  <label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="(408) 555-0123" /></label>
                </div>
                <label>Property address<input name="address" autoComplete="street-address" required placeholder="Street address in the San Jose area" /></label>
                <div className="field-pair">
                  <label>What do you need?
                    <select name="service" defaultValue="" required>
                      <option value="" disabled>Select a service</option>
                      <option>Roof repair</option>
                      <option>Roof replacement</option>
                      <option>Roof inspection</option>
                      <option>Gutters or siding</option>
                      <option>Skylight or flashing</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label>Preferred contact time
                    <select name="contactTime" defaultValue="Any time">
                      <option>Any time</option>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </label>
                </div>
                <label>What is happening?<textarea name="details" rows={4} required placeholder="Tell us about the leak, damage, project, or question." /></label>
                <label className="upload-field"><UploadSimple weight="bold" aria-hidden="true" /><span><strong>Add roof photos</strong><small>Optional in the live version</small></span><input type="file" multiple accept="image/*" disabled /></label>
                <button className="button button-primary submit-button" type="submit">Preview quote request <ArrowRight weight="bold" aria-hidden="true" /></button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-grid">
          <Logo />
          <p>Roofing contractor serving San Jose, California.</p>
          <a href={phoneHref}>{phoneDisplay}</a>
          <p className="footer-note">Website concept built from public business information. Final content subject to owner approval.</p>
        </div>
      </footer>

      <div className="mobile-actions" aria-label="Quick contact">
        <a href={phoneHref}><Phone weight="fill" aria-hidden="true" /> Call now</a>
        <a href="#contact">Request a quote <ArrowRight weight="bold" aria-hidden="true" /></a>
      </div>
    </div>
  )
}

export default App
