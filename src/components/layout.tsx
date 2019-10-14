import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as dayjs from 'dayjs'

const year = dayjs().year()

interface LayoutProps {
  [x: string]: any
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Layout: React.FC = ({ children }) => {
  const data: LayoutProps = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <header style={{ flex: '0 0 auto' }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <main style={{ flex: '1 1 0' }}>{children}</main>
      <footer style={{ flex: '0 0 auto', textAlign: 'center' }}>
        <p>&copy; Copyright {year}, Okuto Oyama</p>
      </footer>
    </div>
  )
}

export default Layout
