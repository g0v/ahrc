import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import './About.css';

const Wrapper = styled.div`
  text-align: left;
`;

export default class About extends React.Component {
  state = {
    lang: undefined,
    data: "",
  };

  async reload() {
    const { lang } = this.props;
    const { data } = await axios(`./readme/${lang}.md`);
    this.setState({ data });
  }

  componentDidMount(prevProps) {
    this.reload();
  }

  componentDidUpdate(prevProps) {
    const { lang } = this.props;
    if (lang !== prevProps.lang) this.reload();
  }

  render() {
    const { data } = this.state;
    return (
      <Wrapper>
        <ReactMarkdown source={data} />
      </Wrapper>
    );
  }
}
