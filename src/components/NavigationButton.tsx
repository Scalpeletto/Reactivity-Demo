/* eslint-disable react/jsx-props-no-spreading */
import { Button, ButtonProps } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationButtonProps extends ButtonProps {
  route: string;
  text: string;
}

const NavigationButton = observer(({ route, text, ...buttonProps }: NavigationButtonProps) => (
  <Button {...buttonProps}>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={route}>
      {text}
    </Link>
  </Button>
));

export default NavigationButton;
