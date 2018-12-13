import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Waypoint from 'react-waypoint';

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
    currentView: 'The Project'
  };

  changeView = view => this.setState({ currentView: view });

  genWay = name => (
    <Waypoint onEnter={() => this.changeView(name)}>
      <h1>{name}</h1>
    </Waypoint>
  );

  render() {
    const { currentView } = this.state;
    return (
      <>
        <Nav links={this.pageRefs} currentView={currentView} />
        <article className="content">
          <Pages.Description
            ref={this.pageRefs['The Project']}
            waypoint={this.genWay('The Project')}
          />
          <Pages.Research
            ref={this.pageRefs.Research}
            waypoint={this.genWay('Research')}
          />
          <Pages.OurData
            ref={this.pageRefs['Our Data']}
            waypoint={this.genWay('Our Data')}
          />
          <Pages.Findings
            ref={this.pageRefs.Findings}
            waypoint={this.genWay('Findings')}
          />
          <Pages.Similar
            ref={this.pageRefs.Similar}
            waypoint={this.genWay('Similar')}
          />
        </article>
      </>
    );
  }
}

export default hot(module)(App);
