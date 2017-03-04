// @flow
import React, { Component } from 'react';
import Header from '../common/Header';

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
