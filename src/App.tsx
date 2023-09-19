// https://babeljs.io/docs/en/babel-polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// https://babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html#working-with-webpack-and-babel-preset-env
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';
// https://meyerweb.com/eric/tools/css/reset/
import 'reset-css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '@/constants/routes';
import Home from '@/pages/Home';
import SafariPage from '@/pages/Safari';
import { StoreProvider } from '@/store/setupContext';

import '@/style/base.scss';

(() => {
  // Ensure that transpilation for mobx is configured correctly per https://mobx.js.org/installation.html#use-spec-compliant-transpilation-for-class-properties
  if (
    !new (class {
      x = 0;
    // eslint-disable-next-line no-prototype-builtins
    })().hasOwnProperty('x')
  ) { throw new Error('Transpiler is not configured correctly'); }
})();

function App(): JSX.Element {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.home}
            element={<Home message="This is the home page." />}
          />
          <Route path={routes.safari} element={<SafariPage />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
