import React from 'react';
import './styles.scss';

import Age from './Pies/Age';
import Gender from './Pies/Gender';
import Diet from './Pies/Diet';
import Meat from './Radars/Meat';
import ChangeMeat from './Pies/ChangeMeat';
import Awareness from './Bar/Awareness';
import SynthMeats from './Pies/SynthMeats';

const OurData = React.forwardRef((props, ref) => (
  <section ref={ref} className="data" {...props}>
    <h1>Our Data</h1>
    <div className="data-sep">Demographics</div>
    <div className="row">
      <Age />
    </div>
    <div className="row">
      <Gender />
    </div>
    <div className="row">
      <Diet />
    </div>
    <div className="data-sep">Research Questions</div>
    <div className="row">
      <Meat />
      <div className="desc">
        <h3>Analysis</h3>
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
      <ChangeMeat />
      <div className="desc">
        <h3>Analysis</h3>
        <p>
          Our data indicates that it would be a challenge for the majority of
          participating meat eaters to remove meat from their diet.
        </p>
        <p>
          A majority of participating meat eaters who would hypothetically
          adjust their meat consumption would do so for personal health and
          environmental purposes. A surprising minority (18.4%) of participants
          would adjust their diets for Animal Rights.
        </p>
        <p>
          26.2% of participants would not make an effort to adjust their diets
          to reduce meat consumption.
        </p>
      </div>
    </div>
    <div className="row">
      <Awareness />
      <div className="desc">
        <h3>Analysis</h3>
        <p>
          A majority of the surveyors (54.9%) claimed to be “Very Aware” of the
          environmental implications of eating meat. A surprisingly 58.9% of
          them were people who eat meat whereas 41.1% were vegetarians/vegans.
        </p>
        <p>
          Also, 100% of the individuals who were “Not At All Aware” or “Not Very
          Aware” were meat eaters.
        </p>
        <p>
          Luckily, an overwhelming majority believe beef is the most taxing to
          the environment, which is true, as the methane from the digestive
          processes of cattle accounts for one third of the emissions from the
          Agriculture economic sector.
        </p>
      </div>
    </div>
    <div className="row">
      <SynthMeats />
      <div className="desc">
        <h3>Analysis</h3>
        <p>
          Of the 39 vegetarian and vegans to reply to the survey, just 6 said
          that they would try, let alone adopt, synthetic meats.
        </p>
        <p>
          Of the 103 meat eaters to reply to the survey, just 10 said that they
          would not try synthetic meat.
        </p>
        <p>
          A significant portion of vegetarians and vegans have no interest in
          consuming meat of any kind - or even meat flavored supplements (ex.
          tofurky).
        </p>
      </div>
    </div>
  </section>
));

export default OurData;
