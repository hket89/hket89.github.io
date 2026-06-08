import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeRegistry } from './theme-registry'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Hong Ket Lo',
      url: 'https://hket89.github.io',
      jobTitle: 'Senior Software Engineer',
      sameAs: [
        'https://github.com/hket89',
        'https://www.linkedin.com/in/hket89',
      ],
      knowsAbout: ['TypeScript', 'Python', 'AWS', 'LangGraph', 'RAG', 'MCP'],
    },
    {
      '@type': 'WebSite',
      name: "Hong Ket Lo's Portfolio",
      url: 'https://hket89.github.io',
    },
  ],
}

export const metadata: Metadata = {
  verification: {
    google: '_3oGt6OqJiDSornjWC-H5gFxPbD2Tvr75_L1-JcCeyo',
  },
  title: 'Hong Ket Lo — Senior Software Engineer',
  description:
    '12+ years building scalable systems, cloud-native microservices, and AI-powered pipelines. Senior Software Engineer at SEEK.',
  metadataBase: new URL('https://hket89.github.io'),
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Hong Ket Lo — Senior Software Engineer',
    description:
      '12+ years building scalable systems, cloud-native microservices, and AI-powered pipelines.',
    url: 'https://hket89.github.io',
    siteName: "Hong Ket Lo's Portfolio",
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hong Ket Lo — Senior Software Engineer',
    description:
      '12+ years building scalable systems, cloud-native microservices, and AI-powered pipelines.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
