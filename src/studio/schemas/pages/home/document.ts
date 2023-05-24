import { FaHome } from 'react-icons/fa';

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: FaHome,
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'mainBgImage',
      title: 'Main BackGround Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Image Title',
          description: 'This will show when someone hover over the image',
          type: 'string',
        },
      ],
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'homePage.hero' },
        { type: 'homePage.legacyToEfficiency' },
        { type: 'homePage.easyBanking' },
        { type: 'homePage.mission' },
        {
          type: 'homePage.business',
        },
        {
          type: 'homePage.trustedBy',
        },
        {
          type: 'common.cta',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
};
