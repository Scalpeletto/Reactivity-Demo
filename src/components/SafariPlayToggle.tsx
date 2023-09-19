/* eslint-disable max-len */
import { useStore } from '@/store/setupContext';
import { observer } from 'mobx-react-lite';

import React from 'react';

import { Switch, useMantineTheme } from '@mantine/core';
import {
  IconPlayerPause,
  IconPlayerPlay,
} from '@tabler/icons-react';

const SafariPlayToggle = observer(() => {
  const theme = useMantineTheme();
  const store = useStore();
  const { safari } = store;
  const { toggleSafariStatus, currentlyOnSafari } = safari;

  return (
    <div>
      <Switch
        color="teal"
        label="Time Control"
        labelPosition="left"
        checked={currentlyOnSafari}
        onClick={() => toggleSafariStatus()}
        thumbIcon={
          currentlyOnSafari ? (
            <IconPlayerPlay size={18} color={theme.colors.teal[6]} stroke={1} />
          ) : (
            <IconPlayerPause size={18} color={theme.colors.red[3]} stroke={1} />
          )
        }
        size="lg"
      />
    </div>
  );
});

export default SafariPlayToggle;
