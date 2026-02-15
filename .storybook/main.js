

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    '../components/**/*.component.yml',
    '../stories/*.stories.js',
  ],
  addons: [
    {
      name: 'storybook-addon-sdc',
      options: {
        sdcStorybookOptions: {
          twigLib: 'twing',
          namespace: 'umami',
        },
      },
    },
  ],
  "framework": "@storybook/html-vite",
};
export default config;