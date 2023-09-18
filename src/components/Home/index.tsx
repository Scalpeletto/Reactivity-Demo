import React from 'react';
import { Link } from 'react-router-dom';

import testpng from '@/assets/images/testpng.png';
import testsvg from '@/assets/images/testsvg.svg';
import testpdf from '@/assets/documents/testpdf.pdf';
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
      <Link to={routes.away}>Away Page Link</Link>
      <br />
      <br />
      <img src={testsvg} alt="" />
      <br />
      <img src={testpng} alt="" />
      <br />
      <object data={testpdf} type="application/pdf" width="100%" height="100%">
        <p>Error loading test PDF.</p>
      </object>
    </div>
  );
}
