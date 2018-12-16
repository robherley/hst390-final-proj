import React from 'react';
import './styles.scss';

const Research = React.forwardRef((props, ref) => (
  <section ref={ref} className="research" {...props}>
    <h1>Research</h1>
    <p>
      After conducting an anonymous survey with 142 participants and 20
      long-form interviews...
    </p>
    <p>
      (We need 5 ethnographic data points... like youtube, reddit, our interview
      with waitress at bareburger, etc...)
    </p>
    <p>Talk about topics from class</p>
  </section>
));

export default Research;
