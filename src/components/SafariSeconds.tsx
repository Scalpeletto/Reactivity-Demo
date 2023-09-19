import { useStore } from '@/store/setupContext';
import { observer } from 'mobx-react-lite';

import React from 'react';

const SafariSeconds = observer(() => {
  const store = useStore();
  const { safari } = store;
  const { currentlyOnSafari, secondsPassed } = safari;

  return (
    <div>
      <h2>
        The safari is currently:
        {currentlyOnSafari ? 'Running' : 'Not Running'}
      </h2>
      <p>
        Seconds on safari:
        {' '}
        {secondsPassed}
      </p>
    </div>
  );
});

export default SafariSeconds;
