import React from 'react';
import './styles.scss';

import Age from './Pies/Age';
import Gender from './Pies/Gender';
import Diet from './Pies/Diet';
import Meat from './Radars/Meat';

const OurData = React.forwardRef((props, ref) => (
  <section ref={ref} className="data" {...props}>
    <h1>Our Data</h1>
    <div className="data-sep">Demographics</div>
    <div className="row">
      <Age />
      <div className="desc">
        <h3>Data Summary</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          ipsum magnam quaerat voluptatum adipisci illo harum culpa iure in
          corrupti. Atque quae suscipit id quis obcaecati? Voluptatibus id
          consectetur tempore.
        </p>
      </div>
    </div>
    <div className="row">
      <Gender />
      <div className="desc">
        <h3>Data Summary</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          ipsum magnam quaerat voluptatum adipisci illo harum culpa iure in
          corrupti. Atque quae suscipit id quis obcaecati? Voluptatibus id
          consectetur tempore.
        </p>
      </div>
    </div>
    <div className="row">
      <Diet />
      <div className="desc">
        <h3>Data Summary</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          ipsum magnam quaerat voluptatum adipisci illo harum culpa iure in
          corrupti. Atque quae suscipit id quis obcaecati? Voluptatibus id
          consectetur tempore.
        </p>
      </div>
    </div>
    <div className="data-sep">Research Questions</div>
    <div className="row">
      <Age />
      <div className="desc">
        <h3>Why Do People Eat Meat?</h3>
        <p>
          An overwhelming majority (92.2%) of surveyors choose to eat meat
          purely out of personal preference.
        </p>
        <p>
          Other common opinions amongst meat eaters was that “It is natural to
          eat”, “My friends/family eat meat” and “It would be inconvenient not
          to.”
        </p>
        <p>
          Also it is worth noting that, 62.5% of the surveyed meat eaters will
          have meat in at least one meal a day.
        </p>
        <p>
          A small minority claimed they consumed meat purely for dietary reasons
          such as “proper nutrition”, “efficient source of protein” and
          mentioning the “Zero Carb Diet”
        </p>
      </div>
    </div>
    <div className="row">
      <Meat />
      <div className="desc">
        <h3>Opinions on Consuming Meat</h3>
        <p>
          Our data indicates that it would be a challenge for the majority of
          participating meat eaters to remove meat from their diet.
        </p>
        <p>
          A majority of participating meat eaters who would hypothetically
          adjust their meat consumption would do so for personal health and
          environmental purposes. I surprising minority (18.4%) of participants
          would adjust their diets for Animal Rights.
        </p>
        <p>
          26.2% of participants would not make an effort to adjust their diets
          to reduce meat consumption.
        </p>
      </div>
    </div>
    <div className="row">
      <Diet />
      <div className="desc">
        <h3>Data Summary</h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ipsum
        magnam quaerat voluptatum adipisci illo harum culpa iure in corrupti.
        Atque quae suscipit id quis obcaecati? Voluptatibus id consectetur
        tempore.
      </div>
    </div>
  </section>
));

export default OurData;
