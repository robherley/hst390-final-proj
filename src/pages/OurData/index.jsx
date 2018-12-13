import React from 'react';

const OurData = React.forwardRef((props, ref) => (
  <section ref={ref} {...props}>
    <h1>Our Data</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore rem,
      reprehenderit placeat quam optio illo error exercitationem. Beatae ut
      praesentium quibusdam magnam. Minus recusandae quae hic consequuntur aut.
      Officiis, atque.
    </p>
  </section>
));

export default OurData;
