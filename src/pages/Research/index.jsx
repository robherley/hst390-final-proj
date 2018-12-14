import React from 'react';
import './styles.scss';

const Research = React.forwardRef((props, ref) => (
  <section ref={ref} className="research" {...props}>
    <h1>Research</h1>
    <p>After conducting an anonymous survey with 142 participants...</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
      similique molestiae ullam ad dolorem rerum perspiciatis quod, deleniti
      itaque illo dicta vel dolore assumenda eveniet odio aut ipsum sunt.
      Pariatur.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
      similique molestiae ullam ad dolorem rerum perspiciatis quod, deleniti
      itaque illo dicta vel dolore assumenda eveniet odio aut ipsum sunt.
      Pariatur.
    </p>
  </section>
));

export default Research;
