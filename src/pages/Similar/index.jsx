import React from 'react';
import './styles.scss';

const Similar = React.forwardRef((props, ref) => (
  <section ref={ref} className="similar" {...props}>
    <h1>Similar</h1>
    <p>
      <a
        className="styled-link"
        target="_blank"
        rel="noopener noreferrer"
        href="http://foe.org/wp-content/uploads/2018/06/From-Lab-to-Fork-1.pdf"
      >
        Friends of the Earth: From Lab to Fork
      </a>
    </p>
    <p>
      <a
        className="styled-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npr.org/2018/12/16/677157694/lab-grown-meat-draws-big-investors-and-big-opposition"
      >
        NPR: Lab-Grown Meat Draws Big Investors — And Big Opposition
      </a>
    </p>
    <p>
      <a
        className="styled-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.new-harvest.org/environmental_impacts_of_cultured_meat"
      >
        New Harvest: Environmental Impacts of Cultured Meat
      </a>
    </p>
    <p>
      <a
        className="styled-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.scientificamerican.com/article/lab-grown-meat/"
      >
        Scientific American: Meat produced without killing animals is heading to
        your dinner table
      </a>
    </p>
    <p>
      <a
        className="styled-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.fooddive.com/news/report-more-research-needed-into-lab-grown-meat/526916/"
      >
        Food Dive: More research needed into lab-grown meat
      </a>
    </p>
    <p>
      <a
        className="styled-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.bloomberg.com/news/articles/2018-06-27/is-it-too-early-for-fake-meat"
      >
        Bloomberg: Is It Too Early for Fake Meat?
      </a>
    </p>
  </section>
));

export default Similar;
