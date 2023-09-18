import React from 'react';
import { Link } from 'react-router-dom';

import routes from '@/constants/routes';
import Counter from '@/components/Counter';

export interface AwayProps {
    message: string;
}

export default function Away(props: AwayProps): JSX.Element {
  const { message }: { message: string } = props;
  return (
    <div>
      {message}
      <br />
      <Counter />
      <br />
      <Link to={routes.home}>Go Home</Link>
      <br />
    </div>
  );
}
