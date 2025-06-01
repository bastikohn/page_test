import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: '2rem', marginBottom: '0.8rem', color: '#555' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: '#666' }}>{children}</h3>,
    p: ({ children }) => <p style={{ lineHeight: '1.6', marginBottom: '1rem', color: '#444' }}>{children}</p>,
    code: ({ children }) => <code style={{ background: '#f4f4f4', padding: '0.2rem 0.4rem', borderRadius: '3px', fontSize: '0.9rem' }}>{children}</code>,
    ...components,
  }
}
