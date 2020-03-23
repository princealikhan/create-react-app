import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import * as serviceWorker from './serviceWorker';
import { Entry } from './scenes/Entry';

<<<<<<< HEAD:packages/react-scripts/template-typescript/src/index.tsx
ReactDOM.render(<Entry />, document.getElementById('root'));
=======
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
>>>>>>> d2f813f8897ffcd2f0b0d2da75d0c44924c92f4d:packages/cra-template-typescript/template/src/index.tsx

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();