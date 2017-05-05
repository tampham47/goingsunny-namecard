import React from 'react';
import { Artboard, render } from 'react-sketchapp';

import App from './App';

export default (context) => {
  render(
    <Artboard name='Goingsunny'>
      <App />
    </Artboard>
  , context.document.currentPage());
};
