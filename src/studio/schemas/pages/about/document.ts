import { FcAbout } from 'react-icons/fc';

const aboutDocument = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: FcAbout,
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'common.hero' },
        { type: 'common.featured' },
        { type: 'aboutPage.values' },
        { type: 'common.cta' },
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

export default aboutDocument;
