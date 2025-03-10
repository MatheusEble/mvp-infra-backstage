import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const storybookPlugin = createPlugin({
  id: 'storybook',
  routes: {
    root: rootRouteRef,
  },
});

export const StorybookPage = storybookPlugin.provide(
  createRoutableExtension({
    name: 'StorybookPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
