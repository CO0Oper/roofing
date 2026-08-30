'use client'

import { FormEvent, useState } from 'react'
import { ArrowDown, ArrowRight, Check, Drop, HouseLine, MapPin, Phone, ShieldCheck, Star, Wrench } from '@phosphor-icons/react'

/*
PURPOSE: Turn storm anxiety into one clear action: call or request an inspection.
PATH: Weather threat → service fit → verified customer proof → straightforward contact.
FIRST VIEWPORT: A live rainfall trace cuts across an original post-storm roof inspection, with the phone action always visible.
INTERACTION: The rainfall trace draws once as the hero resolves; service rows reveal their own diagnostic line on hover.
FORM: Rainfall field station, candidate 4, seed 8ada6303.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
*/

const phoneDisplay = '(707) 622-0900'
const phoneHref = 'tel:+17076220900'
const mapsUrl = 'https://maps.app.goo.gl/HwtKVScTcuVSBNF68'
const address = '512 Sonoma Ave, Santa Rosa, CA 95401'
const assetUrl = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`
const services = [
  { icon: Drop, title: 'Water damage', detail: 'Find the path water took, understand the affected area, and plan the right repair.' },
  { icon: Wrench, title: 'Roof repair', detail: 'Address damaged shingles, flashing, vents, gutters, and other vulnerable roof details.' },
  { icon: HouseLine, title: 'Roof replacement', detail: 'Get a clear scope for a full roof system when repair is no longer the practical answer.' },
]
const reviews = [
  { name: 'Jade Rangel', date: '1 month ago', quote: 'The whole project went smoothly… the cleanup was very thorough with no nails or debris left behind.' },
  { name: 'Eduardo Benjamin', date: '1 month ago', quote: 'They treated the roof like it was their own home and paid close attention to the details.' },
  { name: 'Rachael Raymond', date: '2 months ago', quote: 'They made a stressful roofing situation much easier, and we are very happy with the result.' },
]

function Mark() {
  return <a className="mark" href="#top" aria-label="Dryforce home"><span className="mark-symbol" aria-hidden="true"><i /><b /></span><span><strong>DRYFORCE</strong><small>WATER DAMAGE + ROOFING</small></span></a>
}

function RainTrace() {
  return <svg className="rain-trace" viewBox="0 0 1000 180" preserveAspectRatio="none" aria-hidden="true"><path className="trace-ghost" d="M0 120H125l18-36 18 60 28-88 25 64h112l18-24 17 24h98l21-74 26 112 28-78 24 40h102l22-34 19 34h74l24-92 27 112 29-51 24 31H1000"/><path className="trace-live" pathLength="1" d="M0 120H125l18-36 18 60 28-88 25 64h112l18-24 17 24h98l21-74 26 112 28-78 24 40h102l22-34 19 34h74l24-92 27 112 29-51 24 31H1000"/></svg>
}

function Stars() {
  return <span className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} weight="fill" aria-hidden="true" />)}</span>
}

export default function App() {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }
  return <div className="site" id="top" data-direction-seed="8ada6303">
    <header><div className="nav-wrap"><Mark /><nav aria-label="Primary navigation"><a href="#services">Services</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></nav><a className="nav-call" href={phoneHref}><Phone weight="fill" /> {phoneDisplay}</a></div></header>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={assetUrl('dryforce-hero.png')} alt="Roofing professional inspecting a rain-wet residential roof" /><span className="hero-disclosure">Illustrative concept image</span>
        <div className="hero-wash" /><RainTrace />
        <div className="gauge" aria-hidden="true"><span>2.0</span><span>1.5</span><span>1.0</span><span>0.5</span><i /></div>
        <div className="hero-content"><div className="hero-copy"><h1 id="hero-title">Keep<br />weather<br /><em>out.</em></h1><p className="hero-lead">Roofing and water-damage help for the moments when your home can’t wait for guesswork.</p><p className="place"><MapPin weight="fill" /> Santa Rosa, California</p><div className="hero-actions"><a className="button button-amber" href={phoneHref}><Phone weight="fill" /> Call {phoneDisplay}</a><a className="button button-clear" href="#contact">Request an inspection <ArrowDown /></a></div></div></div>
        <aside className="listing-proof" aria-label="Google listing summary"><span className="score">4.7</span><div><Stars /><strong>22 Google reviews</strong><a href={mapsUrl} target="_blank" rel="noreferrer">View public listing <ArrowRight /></a></div></aside>
      </section>
      <section className="weather-strip" aria-label="Business contact details"><p><span>ROOF + WATER</span> One crew for the exterior problem and the interior warning signs.</p><a href={mapsUrl} target="_blank" rel="noreferrer"><MapPin weight="fill" /> {address}</a></section>
      <section className="services section" id="services"><div className="section-copy"><h2>Start where the water started.</h2><p>A stain inside can begin somewhere else entirely. Dryforce brings roofing and water-damage concerns into the same first conversation.</p></div><div className="service-list">{services.map(({ icon: Icon, title, detail }) => <a href="#contact" className="service-row" key={title}><Icon weight="regular" aria-hidden="true"/><span><strong>{title}</strong><small>{detail}</small></span><ArrowRight weight="bold" aria-hidden="true" /></a>)}</div></section>
      <section className="diagnostic section"><div className="detail-image"><img src={assetUrl('dryforce-detail.png')} alt="Gloved hands inspecting roof flashing after rain" /><span>Illustrative concept image</span></div><div className="diagnostic-copy"><h2>Look closely. Explain clearly.</h2><p>Homeowners in the public reviews repeatedly mention organized work, clear communication, careful property protection, and thorough cleanup.</p><ul><li><ShieldCheck weight="fill"/><span><strong>Trace the concern</strong>Start with what you can see and where it appeared.</span></li><li><Drop weight="fill"/><span><strong>Inspect the system</strong>Review the roof details that can let weather in.</span></li><li><Check weight="bold"/><span><strong>Define the next step</strong>Repair, replacement, or a more focused investigation.</span></li></ul></div></section>
      <section className="reviews section" id="reviews"><div className="review-head"><h2>Santa Rosa homeowners say it best.</h2><div className="review-total"><strong>4.7</strong><span><Stars />22 reviews on Google</span></div></div><div className="review-list">{reviews.map((review) => <article className="review" key={review.name}><div className="review-meta"><Stars /></div><blockquote>“{review.quote}”</blockquote><footer><strong>{review.name}</strong><span>Google review · {review.date}</span></footer></article>)}</div><a className="all-reviews" href={mapsUrl} target="_blank" rel="noreferrer">Read all reviews on Google <ArrowRight weight="bold" /></a></section>
      <section className="field-note section"><div className="field-copy"><h2>A calmer conversation after the storm.</h2><p>Show what you’re seeing, share where it’s happening, and ask what should happen next. The goal is a useful first step—not a rushed promise.</p><a className="button button-ink" href="#contact">Tell us what happened <ArrowDown /></a></div><div className="team-image"><img src={assetUrl('dryforce-team.png')} alt="Roofing team reviewing an inspection report with a homeowner" /><span>Illustrative concept image</span></div></section>
      <section className="contact section" id="contact"><div className="contact-copy"><h2>Let’s get eyes on it.</h2><p>Call directly or leave a few details for a callback. This concept form is not connected and does not send or store information.</p><a className="phone-lockup" href={phoneHref}><Phone weight="fill"/><span><small>CALL DRYFORCE</small><strong>{phoneDisplay}</strong></span></a><address><MapPin weight="fill"/><a href={mapsUrl} target="_blank" rel="noreferrer">{address}</a></address></div>{sent ? <div className="success" role="status"><Check weight="bold"/><h3>Demo complete.</h3><p>No information was sent or stored. A live launch can connect this form to the business’s preferred workflow.</p><button className="button button-ink" onClick={() => setSent(false)}>Start again</button></div> : <form onSubmit={submit}><p className="form-note">DEMO · NOT CONNECTED</p><label>Name<input required autoComplete="name" placeholder="Your name" /></label><label>Phone<input required autoComplete="tel" inputMode="tel" placeholder="Best number to call" /></label><label>What happened?<textarea required rows={4} placeholder="For example: a ceiling stain appeared after the last rain." /></label><button className="button button-amber" type="submit">Preview request <ArrowRight weight="bold" /></button></form>}</section>
    </main>
    <footer className="site-footer"><Mark /><p>{address}</p><a href={phoneHref}>{phoneDisplay}</a><small>Website concept built from public listing information and review excerpts. Generated images are illustrative and are not company project photography. Final services, claims, photography, and form delivery require owner approval.</small></footer>
    <div className="mobile-actions"><a href={phoneHref}><Phone weight="fill"/> Call now</a><a href="#contact">Request inspection <ArrowRight weight="bold"/></a></div>
  </div>
}

