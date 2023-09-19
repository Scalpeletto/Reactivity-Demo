// https://babeljs.io/docs/en/babel-polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";
// https://babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html#working-with-webpack-and-babel-preset-env
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";
// https://meyerweb.com/eric/tools/css/reset/
import "reset-css";

// https://mantine.dev/getting-started#get-started-without-framework
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "@/constants/routes";
import HomePage from "@/pages/Home";
import SafariPage from "@/pages/Safari";
import { StoreProvider } from "@/store/setupContext";

import "@/style/base.scss";

(() => {
  // Ensure that transpilation for mobx is configured correctly per https://mobx.js.org/installation.html#use-spec-compliant-transpilation-for-class-properties
  if (
    !new (class {
      x = 0;
      // eslint-disable-next-line no-prototype-builtins
    })().hasOwnProperty("x")
  ) {
    throw new Error("Transpiler is not configured correctly");
  }
})();

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App(): JSX.Element {
  return (
    <StoreProvider>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path={routes.home}
              element={<HomePage />}
            />
            <Route path={routes.safari} element={<SafariPage />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </StoreProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
