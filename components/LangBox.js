import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.img`
  width: 60px;
  margin: 10px;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 28px;
`;

const Button = styled.a`
  display: inline-block;
  border: none;
  padding: 15px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  &:hover {
    color: #198964
  }
`;

const Right = styled.div`
  text-align: right;
`;

export default class Header extends React.Component {
  onClick = lang => this.props.onClick(lang);

  render() {
    return (
      <div className="row">
        <div className="col-8">
          <Logo src="/static/logo.png" />
          <Title>Asian Human Rights Court Simulation</Title>
        </div>
        <Right className="col-4">
          <Button href="/en">EN</Button>
          <Button href="/ch">CH</Button>
          <Button href="/kr">KR</Button>
          <Button href="/jp">JP</Button>
        </Right>
      </div>
    );
  }
}
