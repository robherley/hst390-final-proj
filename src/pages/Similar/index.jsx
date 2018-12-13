import React from 'react';

const Description = React.forwardRef(({ waypoint }, ref) => (
  <section ref={ref}>
    {waypoint}
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore rem,
      reprehenderit placeat quam optio illo error exercitationem. Beatae ut
      praesentium quibusdam magnam. Minus recusandae quae hic consequuntur aut.
      Officiis, atque.
    </p>
  </section>
));

export default Description;
