import React from 'react';
import './App.css';
import Header from "./Header";
import About from "./About";

export default class App extends React.Component {
  state = {
    lang: "CH",
  };

  onLangClick = lang => this.setState({ lang });

  render() {
    const { lang } = this.state;

    return (
      <div className="App">
        <Header onClick={this.onLangClick} />
        <About lang={lang} />
      </div>
    );
  }
}
