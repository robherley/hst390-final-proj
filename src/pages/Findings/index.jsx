import React from 'react';
import './styles.scss';

const Findings = React.forwardRef((props, ref) => (
  <section ref={ref} className="findings" {...props}>
    <h1>Findings</h1>
    <p>
      Vegetarians and vegans generally aren&#39;t into meat - to them, the
      ethical implications of eating meat don’t disappear with cultured meats
      because the cells that the culture is based on do come from cows (FBS).
    </p>
    <p>
      That said, meat eaters are optimistic and excited for the prospects of
      cultured meat so long as the consistency, price, and nutrition is similar.
    </p>
    <p>
      Many meat eaters realize the they and the planet can benefit from these
      synthesized substitutes and are open to adopting the technology.
    </p>
  </section>
));

export default Findings;
