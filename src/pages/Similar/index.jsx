import React from 'react';
import './styles.scss';

const Similar = React.forwardRef((props, ref) => (
  <section ref={ref} className="similar" {...props}>
    <h1>Similar</h1>
    <p>(page for links to similar research)</p>
  </section>
));

export default Similar;
