import * as React from "react";
import Helmet from "react-helmet";

import "modern-normalize";
import "./index.css";

const Header = () => (
  <header style={{ flex: "0 0 auto" }}>
    <h1>Nagareyamanoku</h1>
    <p>流山市に住むyamanokuが見るページ</p>
  </header>
);

const Footer = () => (
  <footer style={{ flex: "0 0 auto", textAlign: "center" }}>
    <p>&copy; Copyright 2019, Okuto Oyama</p>
  </footer>
);

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Helmet
          title="Nagareyamanoku"
          meta={[
            { name: "description", content: "流山市に住むyamanokuが見るページ" }
          ]}
          link={[
            {
              rel: "stylesheet",
              href:
                "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&amp;display=optional"
            }
          ]}
        />
        <Header />
        <main style={{ flex: "1 1 0" }}>{this.props.children()}</main>
        <Footer />
      </div>
    );
  }
}

export default DefaultLayout;
