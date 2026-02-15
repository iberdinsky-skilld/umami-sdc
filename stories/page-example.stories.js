import header, {
  Preview as HeaderPreview,
} from '../components/header/header.component.yml';
import banner, {
  Preview as BannerPreview,
} from '../components/banner/banner.component.yml';
import paragraph, {
  HomeGrid as HomeParagraphPreview,
  Grid as ParagraphGridPreview,
  Tags as ParagraphTagsPreview,
  Cta as ParagraphCtaPreview,
  WithDisclaimer as ParagraphWithDisclaimerPreview,
} from '../components/paragraph/paragraph.component.yml';

export default {
  title: 'Storybook/Page with imported SDC',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    return `
      ${header.component({ ...HeaderPreview.args })}
      ${banner.component({ ...BannerPreview.args })}
      ${paragraph.component({ ...HomeParagraphPreview.args })}
      ${paragraph.component({ ...ParagraphGridPreview.args })}
      ${paragraph.component({ ...ParagraphTagsPreview.args })}
      ${paragraph.component({ ...ParagraphCtaPreview.args })}
      ${paragraph.component({ ...ParagraphWithDisclaimerPreview.args })}
    `;
  },
  play: async ({ canvasElement }) => {
    Drupal.attachBehaviors(canvasElement, window.drupalSettings);
  },
};

export const Basic = {};
