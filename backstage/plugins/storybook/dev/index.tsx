import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { storybookPlugin, StorybookPage } from '../src/plugin';

createDevApp()
  .registerPlugin(storybookPlugin)
  .addPage({
    element: <StorybookPage />,
    title: 'Root Page',
    path: '/storybook',
  })
  .render();
