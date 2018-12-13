import React from 'react';

const Research = React.forwardRef((props, ref) => (
  <section ref={ref} {...props}>
    <h1>Research</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor ipsam
      beatae id et repellat a corrupti! Nostrum eaque molestiae ducimus, non vel
      distinctio suscipit quisquam repudiandae consequatur dolores iure.
    </p>
  </section>
));

export default Research;
