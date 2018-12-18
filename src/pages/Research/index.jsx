import React from 'react';
import './styles.scss';

const Research = React.forwardRef((props, ref) => (
  <section ref={ref} className="research" {...props}>
    <h1>Research</h1>
    <p>
      Meat is an incredibly important component of the modern diet, whether in
      its presence or absence. Meat-eaters and vegans/vegetarians alike are
      incredibly passionate about their decisions to eat meat (or not eat meat).
      For example, there is a strong connection to the identity of being vegan,
      which transcends the simple premise of not consuming animal products. On
      the Vegan subreddit of Reddit, a subset vegans maintain that they would
      not eat synthetic meats, even though they would be fully permissible for a
      vegan diet. The distinction of not eating meat is an important cultural
      signifier, and the “meat” doesn’t actually have to be meat for the
      signifier to have value. This is due to the Power of the Image, an
      anthropological concept introduced by Baudrillard. Synthetic meat is a
      virtualized image of meat - a perversion of the definition of meat. As
      such, even if synthetic meat is vegan, it still fills the role of meat in
      people’s minds.
    </p>
    <p>
      In the process of doing ethnographic research for this project, we spoke
      to a vegetarian employee of Bareburger, one of the few restaurants with
      synthetic meat options. She told us that she didn’t enjoy the Impossible
      Burger (one of the most popular synthetic meat options) because it
      reminded her too much of real meat, and made her feel “uneasy”. She also
      told us that this sentiment was shared by many vegetarian/vegan customers,
      but meat-eating customers did enjoy the Impossible Burger as an occasional
      alternative to a beef patty.
    </p>
    <p>
      There is a belief amongst anthropologists such as Dr. Patrick D. Hopkins
      and others that undue value is given to vegan/vegetarian opinions on
      synthetic meats. These diets are often associated with synthetic meats,
      which creates an Ideological State Apparatus that places great value on
      how accepting vegans/vegetarians are of meat alternatives. But as we
      observed in our ethnographic research, vegans/vegetarians are often
      uninterested in meat alternatives. They have little use for an alternative
      to a food they already choose not to eat. As synthetic meat options enter
      the market, increased emphasis should be placed on how to convince
      meat-eaters to switch full to meat alternatives. Judging from internet
      comments on Reddit and policy papers (Sentience Politics), the main
      roadblocks to mass conversion seem to be quality, variety, and price. As
      the technology continues to develop, synthetic meats will approach and
      match traditional meat in all of these metrics. However, when it comes to
      price, traditional meat still greatly benefits from the Repressive State
      Apparatuses of farm subsidies and other rent-seeking practices that
      artificially decrease the price of traditional meat.
    </p>
    <h4>References</h4>
    <a
      className="styled-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.researchgate.net/publication/323303157_Cultured_Meat_and_Cowless_Milk_On_Making_Markets_for_Animal-Free_Food"
    >
      Cultured Meat and Cowless Milk: On Making Markets for Animal-Free Food
    </a>
    <br />
    <a
      className="styled-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://ea-foundation.org/files/cultured-meat.pdf"
    >
      Sentience Politics
    </a>
    <br />
    <a
      className="styled-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.sciencedirect.com/science/article/pii/S2095311914608832"
    >
      Cultured meat in western media
    </a>
    <br />
    <a
      className="styled-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.reddit.com/r/vegan/comments/97eqwq/what_do_you_guys_think_about_synthetic_meat/"
    >
      r/Vegan
    </a>
    <br />
    <a
      className="styled-link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.reddit.com/r/worldnews/comments/8w95i0/a_veggie_burger_that_bleeds_fake_blood_has_been/"
    >
      r/WorldNews
    </a>
  </section>
));

export default Research;
