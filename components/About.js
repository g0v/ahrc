import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: left;
`;

export default class About extends React.Component {
  render() {
    return (
      <Wrapper>
        <ReactMarkdown {...this.props} />
      </Wrapper>
    );
  }
}
