import type { Preview } from '@storybook/react';
import { fn } from '@storybook/test';

import '../src/index.css';
import { StoryDecorator } from './StoryDecorator';

const preview: Preview = {
  decorators: [StoryDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f8fafc', // Light gray from Tailwind
        },
        {
          name: 'dark',
          value: '#1e293b', // Slate-800 from Tailwind
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
      },
    },
    docs: {
      canvas: {
        sourceState: 'shown',
      },
      toc: true,
      description: {
        component: null,
      },
    },
  },
};

export default preview;
