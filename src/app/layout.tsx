import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ weight: '400', style: 'normal', subsets: ['latin-ext'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
