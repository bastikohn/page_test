import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <nav style={{ 
        background: '#2563eb', 
        padding: '1rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Link href="/" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontSize: '1.5rem', 
            fontWeight: 'bold' 
          }}>
            📦 Page Test
          </Link>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            <Link href="/contributing" style={{ color: 'white', textDecoration: 'none' }}>Contributing</Link>
          </div>
        </div>
      </nav>
      
      <main style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        lineHeight: '1.6'
      }}>
        {children}
      </main>
      
      <footer style={{ 
        background: '#f8fafc', 
        borderTop: '1px solid #e2e8f0',
        padding: '2rem',
        marginTop: '4rem',
        textAlign: 'center' as const,
        color: '#64748b'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p>© 2025 Page Test Project. Built with ❤️ and Next.js</p>
          <p>
            <Link href="https://github.com/yourusername/page_test" style={{ color: '#2563eb', textDecoration: 'none' }}>
              View on GitHub
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
