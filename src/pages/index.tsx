import * as React from "react";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <div>
        <h2>便利情報</h2>
        <ul>
          <li>
            <a
              href="https://drive.google.com/open?id=16cTn1YHJ3EIk8iTyzRw_mmSav1u_yZPz&usp=sharing/"
              target="_blank"
              rel="noopener"
            >
              流山市避難所 #台風19号
            </a>
          </li>
          <li>小児科まとめ（WIP）</li>
        </ul>
      </div>
    );
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
`;
