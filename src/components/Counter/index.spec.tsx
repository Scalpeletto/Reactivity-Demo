/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import Counter from '.';

describe('<Counter />', () => {
  test('should render', () => {
    const counter = render(<Counter />);
    expect(counter).toBeTruthy();
  });
});
