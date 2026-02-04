

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../components/**/*.component.yml'],
  addons: [
    {
      name: 'storybook-addon-sdc',
      options: {
        sdcStorybookOptions: {
          twigLib: 'twing',
        },
      },
    },
  ],
  "framework": "@storybook/html-vite",
};
export default config;