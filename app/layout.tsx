import type { Metadata } from 'next'
import '@fontsource/ibm-plex-sans-condensed/500.css'
import '@fontsource/ibm-plex-sans-condensed/600.css'
import '@fontsource/ibm-plex-sans-condensed/700.css'
import '@fontsource/source-sans-3/400.css'
import '@fontsource/source-sans-3/600.css'
import '@fontsource/source-sans-3/700.css'
import '../src/styles.css'

export const metadata: Metadata = {
  title: 'TopGuard Roofing | San Jose Roofing Contractor',
  description: 'TopGuard Roofing serves homeowners in San Jose with roof repair, replacement, inspection, gutters, skylights, and more.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
