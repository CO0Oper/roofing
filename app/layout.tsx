import type { Metadata } from 'next'
import '../src/styles.css'

export const metadata: Metadata = {
  title: 'Ultimate Roof Repair | San Jose Roofing Contractor',
  description: 'A website concept for Ultimate Roof Repair, a roofing contractor in San Jose, California. Call (669) 600-0975.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
