import React from 'react';
import { hot } from 'react-hot-loader';

import Nav from './components/Nav';

const App = () => (
  <>
    <Nav />
    <article className="content">
      <section>
        <h1>Test 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor
          ipsam beatae id et repellat a corrupti! Nostrum eaque molestiae
          ducimus, non vel distinctio suscipit quisquam repudiandae consequatur
          dolores iure.
        </p>
      </section>
      <section>
        <h1>Test 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor
          ipsam beatae id et repellat a corrupti! Nostrum eaque molestiae
          ducimus, non vel distinctio suscipit quisquam repudiandae consequatur
          dolores iure.
        </p>
      </section>
      <section>
        <h1>Test 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolor
          ipsam beatae id et repellat a corrupti! Nostrum eaque molestiae
          ducimus, non vel distinctio suscipit quisquam repudiandae consequatur
          dolores iure.
        </p>
      </section>
    </article>
  </>
);

export default hot(module)(App);
