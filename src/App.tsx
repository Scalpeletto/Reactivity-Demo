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
import Home from '@/components/Home';
import Away from '@/components/Away';

import '@/style/base.scss';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home message="This is the home page." />} />
        <Route path={routes.away} element={<Away message="This is the not home page." />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
