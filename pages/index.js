import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import About from '../components/About';
import LangBox from '../components/LangBox';
import ch from '../static/readme/ch.md';
import en from '../static/readme/en.md';
import jp from '../static/readme/jp.md';
import kr from '../static/readme/kr.md';

const contents = { ch, en, jp, kr };

export default class App extends React.Component {
  static getInitialProps = async ({ query }) => {
    const { lang } = query;
    return { content: contents[lang] };
  }

  render() {
    const { content } = this.props;

    return (
      <>
        <Head>
          <title>Asian Human Rights Court Simulation</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        <div className="container">
          <LangBox />
          <About source={content} />
          <a href="https://github.com/g0v/ahrc" target="_blank">Github</a>
        </div>
      </>
    );
  }
}
