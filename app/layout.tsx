import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Graphia - Comunidad de Arte con IA',
  description: 'Red social para creadores de contenido visual con inteligencia artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
