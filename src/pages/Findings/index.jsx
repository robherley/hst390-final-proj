import React from 'react';
import './styles.scss';

const Findings = React.forwardRef((props, ref) => (
  <section ref={ref} className="findings" {...props}>
    <h1>Findings</h1>
    <p>
      It doesn&#39;t matter how you cut it - or apparently how you make it make
      it either - vegetarians and vegans are <span className="i">not</span> into
      meat. Lab grown or otherwise, to many vegetarians and vegans the ethical
      implications of eating meat do not disappear with advances in technology.
      All cultured meats do in fact rely on some sort of living cell to grow
      from, the cells in question are called fetal bovine serum or FBS. While
      FBS has been used as a supplement for human stem cells in stem cell
      research some time, this new commercial application puts a bad taste in
      the mouths of many who saw lab grown meats as a possible saving grace. In
      short, vegetarians are just that - sure, the curious ones may try the lab
      grown “meat of the future” but many of them are perfectly happy
      herbivores.
    </p>
    <p>
      That said, meat eaters seem to be optimistic. Lab grown meat received
      relative support and only a small fraction of existing meat eaters were
      off put by the proposition of cheap and relatively ethical meat products.
      It seems that, to the dismay of many environmentalists and vegetarians
      alike, meat is here to stay in the future. As technology makes strides to
      improve the means with which we produce meat, those who budget for it now
      show relative supportive for the future. But that is not to say that lab
      grown meat has gained unconditional support. Many of our survey
      respondents drew connections between lab grown meats and GMOs, arguing
      that scientists ought not to interfere with nature and our food supply.
      While there are perceived parallels, lab grown meats do not present many
      of the issues that opponents to GMO disputed. Infact, the only effect of
      proliferated Lab grown meats would be more ethical consumption of meat; a
      rarity in capitalism. Another talking point that many meat eaters were
      drawn to was regarding the quality of lab grown alternatives. For many,
      the success of lab grown meat hinges on the product’s parity with
      traditional meat products. Texture, consistency, and flavor as well as
      price are among the concerns that potential adopters are thinking about.
      Nevertheless, meat eaters realize what these alternatives can do for the
      environment and appear interested in being a part of the movement.
    </p>
  </section>
));

export default Findings;
