import React from 'react';
import plant from '../../img/plant.svg';
import flask from '../../img/flask.svg';
import './styles.scss';

const Description = React.forwardRef((props, ref) => (
  <section ref={ref} className="description" {...props}>
    <h1>
      The <span className="i">Growth</span> Of Synthetic Meats
    </h1>

    <p className="blurb">
      Our study focuses on the ethical, environmental and social impacts of
      synthetic meats and their introduction to society. For the purpose of this
      project, we categorized synthetic meats into two main categories:
    </p>

    <div className="row">
      <div className="half">
        <h3>Meat Alternatives</h3>
        <img src={plant} alt="plant" />
        <div className="hidden">
          <p>
            Also known as “meat substitutes”, these are usually soy based or
            from other plant products like peas. Their goal is to Approximates
            certain aesthetic qualities of meat like texture, flavor or
            appearance.
          </p>
        </div>
      </div>
      <div className="half">
        <h3>Cultured Meat</h3>
        <img src={flask} alt="flask" />
        <div className="hidden">
          <p>
            Real meat developed using in-vitro cultivation of animal cells, as
            opposed to slaughtering animals. They are produced using many of the
            same tissue engineering techniques traditionally used in
            regenerative medicine.
          </p>
        </div>
      </div>
    </div>
  </section>
));

export default Description;
