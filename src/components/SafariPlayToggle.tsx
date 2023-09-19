import { useStore } from '@/store/setupContext';
import { observer } from 'mobx-react-lite';

import React from 'react';

const SafariPlayToggle = observer(() => {
  const store = useStore();
  const { safari } = store;
  const { toggleSafariStatus, currentlyOnSafari } = safari;

  return (
    <div>
      <button onClick={() => toggleSafariStatus()} type="button">
        {currentlyOnSafari ? 'Pause' : 'Play'}
      </button>
    </div>
  );
});

export default SafariPlayToggle;
