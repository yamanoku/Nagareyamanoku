import * as React from 'react'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
    <header style={{ flex: '0 0 auto' }}>
      <h1>Nagareyamanoku</h1>
      <p>流山市に住むyamanokuが見るページ</p>
    </header>
    <main style={{ flex: '1 1 0' }}>{props.children}</main>
    <footer style={{ flex: '0 0 auto', textAlign: 'center' }}>
      <p>&copy; Copyright 2019, Okuto Oyama</p>
    </footer>
  </div>
)

export default Layout
