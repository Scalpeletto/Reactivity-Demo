import React from 'react';
import { Link } from 'react-router-dom';

import routes from '@/constants/routes';

import { observer } from 'mobx-react-lite';
import SafariPlayToggle from '@/components/SafariPlayToggle';
import SafariSeconds from '@/components/SafariSeconds';

const SafariPage = observer(() => (
  <div>
    <Link to={routes.home}>Go Home</Link>
    <br />
    <SafariPlayToggle />
    <br />
    <SafariSeconds />
  </div>
));

export default SafariPage;
