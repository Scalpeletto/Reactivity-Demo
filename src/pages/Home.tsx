import React from 'react';
import { Link } from 'react-router-dom';

import routes from '@/constants/routes';

export interface HomeProps {
    message: string;
}

export default function Home(props: HomeProps): JSX.Element {
  const { message }: { message: string } = props;
  return (
    <div>
      {message}
      <br />
      <Link to={routes.safari}>Safari</Link>
    </div>
  );
}
