import type { Metadata } from 'next'
import '../../src/dryforce.css'

export const metadata: Metadata = {
  title: 'Dryforce Water Damage & Roofing | Santa Rosa, CA',
  description: 'Roofing and water-damage help for Santa Rosa homeowners. Call (707) 622-0900.',
  metadataBase: new URL('https://ultimate-roof-repair-sj.leep52897.chatgpt.site'),
  openGraph: {
    title: 'Dryforce Water Damage & Roofing | Santa Rosa, CA',
    description: 'Roofing and water-damage help for Santa Rosa homeowners.',
    url: '/dryforce',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dryforce Water Damage & Roofing | Santa Rosa, CA',
    description: 'Roofing and water-damage help for Santa Rosa homeowners.',
    images: ['/og.png'],
  },
}

export default function DryforceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
