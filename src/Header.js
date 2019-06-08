import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: left;
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #198964
  }
`;

export default class Header extends React.Component {
  onClick = lang => this.props.onClick(lang);

  render() {
    return (
      <Wrapper>
        <Button onClick={() => this.onClick("EN")}>EN</Button>
        <Button onClick={() => this.onClick("CH")}>CH</Button>
        <Button onClick={() => this.onClick("KR")}>KR</Button>
        <Button onClick={() => this.onClick("JP")}>JP</Button>
      </Wrapper>
    );
  }
}
