import * as React from 'react'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <h2>便利情報</h2>
        <h3>流山市避難所</h3>
        <ul>
          <li>
            <a
              href="https://drive.google.com/open?id=16cTn1YHJ3EIk8iTyzRw_mmSav1u_yZPz&usp=sharing/"
              target="_blank"
              rel="noopener"
            >
              #台風19号
            </a>
          </li>
        </ul>
        <h3>小児科まとめ（WIP）</h3>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
