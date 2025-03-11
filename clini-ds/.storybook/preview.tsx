import React from "react";
import "./material-icons.scss";
import { Providers } from "../stories/providers/providers";

const StoryProviders = (Story, context) => (
  <Providers>
    <Story {...context} />
  </Providers>
);

/** @type { import("@storybook/react").Preview } */
const preview = {
  decorators: [StoryProviders],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
