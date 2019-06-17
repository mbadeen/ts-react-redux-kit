import React from 'react';
import { render } from 'react-dom';
import App from './App';

// Allows for module loading instead of reloading the page.
// if (module.hot) {
//   module.hot.accept();
// }

render(<App />, document.getElementById('app'));
