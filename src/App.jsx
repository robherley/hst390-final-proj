import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Nav from './components/Nav';
import * as Pages from './pages';

class App extends Component {
  pageRefs = {
    'The Project': React.createRef(),
    Research: React.createRef(),
    'Our Data': React.createRef(),
    Findings: React.createRef(),
    Similar: React.createRef()
  };

  state = {
    currentPage: 'The Project'
  };

  componentDidMount = () => {
    document.addEventListener('scroll', () => {
      Object.entries(this.pageRefs).forEach(([page, ref]) => {
        const { top, bottom } = ref.current.getBoundingClientRect();
        // calc the bounding "page" in the viewport
        const vis =
          (Math.min(bottom, window.innerHeight) - Math.max(top, 0)) /
          window.innerHeight;
        // see if the page takes up more than 50%
        if (vis > 0.5) {
          this.setState({ currentPage: page });
        }
      });
    });
  };

  componentWillUnmount = () => {
    document.removeEventListener('scroll');
  };

  render() {
    const { currentPage } = this.state;
    return (
      <>
        <Nav links={this.pageRefs} currentPage={currentPage} />
        <article className="content">
          <Pages.Description ref={this.pageRefs['The Project']} />
          <Pages.Research ref={this.pageRefs.Research} />
          <Pages.OurData ref={this.pageRefs['Our Data']} />
          <Pages.Findings ref={this.pageRefs.Findings} />
          <Pages.Similar ref={this.pageRefs.Similar} />
        </article>
      </>
    );
  }
}

export default hot(module)(App);
