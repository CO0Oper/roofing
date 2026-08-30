'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, Clock, HouseLine, MapPin, Phone, SealCheck, ShieldCheck, Wrench } from '@phosphor-icons/react'

const phoneDisplay = '(669) 600-0975'
const phoneHref = 'tel:+16696000975'
const address = '6830 Vía del Oro 221 #221, San Jose, CA 95119'
const concerns = [
  { code: '01', title: 'Active leaks', text: 'Trace the entry point and inspect the roof system around it.', icon: Wrench },
  { code: '02', title: 'Damaged shingles', text: 'Check lifted, missing, cracked, or aging roof material.', icon: HouseLine },
  { code: '03', title: 'Flashing details', text: 'Review roof valleys, skylights, vents, walls, and penetrations.', icon: ShieldCheck },
  { code: '04', title: 'Roof condition', text: 'Get a practical look at what needs attention and what can wait.', icon: SealCheck },
]

function Brand() {
  return <a className="brand" href="#top" aria-label="Ultimate Roof Repair home"><span className="brand-mark" aria-hidden="true"><span>UR</span></span><span><strong>ULTIMATE</strong><small>ROOF REPAIR</small></span></a>
}

export default function App() {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }

  return (
    <div className="site" id="top">
      <header className="site-header"><div className="header-inner"><Brand /><nav aria-label="Primary navigation"><a href="#inspection">Roof concerns</a><a href="#approach">What to expect</a><a href="#contact">Contact</a></nav><a className="header-phone" href={phoneHref}><Phone weight="fill" aria-hidden="true" /> {phoneDisplay}</a></div></header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-photo" src="assets/ultimate-roof-hero.png" alt="Roofer inspecting flashing on a residential roof" />
          <div className="hero-shade" /><div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner"><p className="location-line"><MapPin weight="fill" /> San Jose, California</p><h1 id="hero-title">When the roof needs attention, start with a clear look.</h1><p className="hero-copy">Local roof repair guidance with a direct line to the contractor.</p><div className="hero-actions"><a className="button button-signal" href={phoneHref}><Phone weight="fill" /> Call now</a><a className="button button-paper" href="#contact">Request a callback <ArrowRight weight="bold" /></a></div></div>
          <aside className="field-card" aria-label="Business information"><span className="field-card-label">PUBLIC LISTING</span><div className="rating"><strong>4.8</strong><span><span className="stars" aria-label="4.8 out of 5 stars">★★★★★</span><small>19 Google reviews</small></span></div><dl><div><dt>Category</dt><dd>Roofing contractor</dd></div><div><dt>Availability</dt><dd><Clock weight="bold" /> Listed open 24 hours</dd></div></dl></aside>
        </section>
        <section className="dispatch-strip" aria-label="Contact summary"><div><span>PHONE</span><a href={phoneHref}>{phoneDisplay}</a></div><div><span>ADDRESS</span><a href="https://maps.google.com/?q=6830+Via+del+Oro+221+San+Jose+CA+95119" target="_blank" rel="noreferrer">{address}</a></div><div><span>STATUS</span><strong>Taking calls 24 hours</strong></div></section>
        <section className="inspection section" id="inspection"><div className="section-heading"><p className="section-kicker">ROOF CHECK / SAN JOSE</p><h2>Start with the part that is worrying you.</h2><p>Describe what you see. The first conversation should help define the next useful step.</p></div><div className="concern-board">{concerns.map(({ code, title, text, icon: Icon }) => <a href="#contact" className="concern" key={title}><span className="concern-code">{code}</span><Icon weight="regular" aria-hidden="true" /><span><strong>{title}</strong><small>{text}</small></span><ArrowRight weight="bold" aria-hidden="true" /></a>)}</div></section>
        <section className="approach section" id="approach"><div className="approach-photo"><img src="assets/ultimate-roof-detail.png" alt="Hands checking skylight flashing during a roof inspection" /><p>Illustrative concept photography. Replace with the company’s own project work before launch.</p></div><div className="approach-copy"><p className="section-kicker">A PRACTICAL FIRST CONTACT</p><h2>Useful details in. A clearer conversation out.</h2><p className="approach-lead">A good callback starts with the basics: where the issue is, when it appeared, and what you can safely see from the ground.</p><ol className="process"><li><span>1</span><p><strong>Tell them what changed</strong><small>Leak, stain, wind damage, loose material, or a general concern.</small></p></li><li><span>2</span><p><strong>Share the location</strong><small>Point out the room, roof plane, skylight, vent, gutter, or edge involved.</small></p></li><li><span>3</span><p><strong>Agree on the next step</strong><small>Use the call to decide whether an on-site look is appropriate.</small></p></li></ol></div></section>
        <section className="reputation section" aria-labelledby="reputation-title"><div className="rating-poster"><span>GOOGLE RATING</span><strong>4.8</strong><div className="poster-stars">★★★★★</div><p>Based on 19 reviews shown on the public listing.</p></div><div className="reputation-copy"><p className="section-kicker">LOCAL PROOF</p><h2 id="reputation-title">The existing listing is already earning attention.</h2><p>A working website gives those search visitors somewhere useful to land, understand the service, and call without friction.</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Ultimate+Roof+Repair+San+Jose" target="_blank" rel="noreferrer">View the public listing <ArrowRight weight="bold" /></a></div></section>
        <section className="contact section" id="contact"><div className="contact-intro"><p className="section-kicker">CALLBACK REQUEST</p><h2>Put the roof concern into words.</h2><p>This pitch form demonstrates the customer experience. It does not send or store your information yet.</p><a className="direct-call" href={phoneHref}><Phone weight="fill" /><span><small>CALL DIRECTLY</small><strong>{phoneDisplay}</strong></span></a></div>{sent ? <div className="success" role="status"><Check weight="bold" aria-hidden="true" /><h3>Demo request complete.</h3><p>No information was sent or stored. The live version can connect this step to the company’s preferred inbox or phone workflow.</p><button className="button button-ink" type="button" onClick={() => setSent(false)}>Start again</button></div> : <form className="request-form" onSubmit={submit}><div className="form-stamp">DEMO FORM / NOT CONNECTED</div><div className="field-row"><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Phone<input name="phone" autoComplete="tel" required inputMode="tel" placeholder="Best number to call" /></label></div><label>Property address<input name="address" autoComplete="street-address" required placeholder="Street address in the San Jose area" /></label><label>What are you seeing?<textarea name="details" rows={5} required placeholder="For example: a ceiling stain appeared after rain near the back bedroom." /></label><button className="button button-signal submit" type="submit">Preview callback request <ArrowRight weight="bold" /></button></form>}</section>
      </main>
      <footer><Brand /><p>{address}</p><a href={phoneHref}>{phoneDisplay}</a><small>Website concept built from public business information. Final facts, services, photography, and form delivery require owner approval.</small></footer>
      <div className="mobile-bar" aria-label="Quick contact"><a href={phoneHref}><Phone weight="fill" /> Call now</a><a href="#contact">Request callback <ArrowRight weight="bold" /></a></div>
    </div>
  )
}

