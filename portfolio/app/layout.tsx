import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seyed Ali Rashidi — CV & ML Engineer',
  description: 'Computer Vision & ML Engineer. CubeSat Payload Design, Medical CT Segmentation, Radio Galaxy Classification.',
  keywords: ['computer vision', 'machine learning', 'CubeSat', 'satellite payload', 'deep learning', 'medical imaging'],
  openGraph: {
    title: 'Seyed Ali Rashidi — CV & ML Engineer',
    description: 'Building ML systems for space, medicine, and astronomy.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
