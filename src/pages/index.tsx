import * as React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`

const Emergency = () => (
  <section>
    <h3>流山市避難所</h3>
    <h4>災害時</h4>
    <a
      href="https://drive.google.com/open?id=16cTn1YHJ3EIk8iTyzRw_mmSav1u_yZPz&usp=sharing/"
      target="_blank"
      rel="noopener"
    >
      #台風19号
    </a>
    <h4>ペット可能</h4>
    <a
      href="https://www.city.nagareyama.chiba.jp/_res/projects/default_project/_page_/001/003/605/oyamasaishin.pdf"
      target="_blank"
      rel="noopener"
    >
      小山小学校
    </a>
  </section>
)

const Pediatrics = () => (
  <section>
    <h3>小児科まとめ</h3>
    <h4>夜間、休日・祝日</h4>
    <a
      href="http://www.nagareyama-med.com/practice/practice01.html"
      target="_blank"
      rel="noopener"
    >
      流山市 平日夜間・休日診療所 / 流山市医師会
    </a>
  </section>
)

export default class IndexPage extends React.Component<IndexPageProps> {
  public render() {
    const siteName = this.props.data.site.siteMetadata.title
    const siteDesc = this.props.data.site.siteMetadata.description
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    return (
      <Layout>
        <Helmet>
          <title>{siteName}</title>
          <meta name="description" content={siteDesc} />
          <meta property="og:title" content={siteName} />
          <meta property="og:description" content={siteDesc} />
          <meta property="og:url" content={siteUrl} />
          <meta property="twitter:card" content="summary" />
        </Helmet>
        <h2>情報まとめ</h2>
        <Emergency />
        <Pediatrics />
      </Layout>
    )
  }
}
