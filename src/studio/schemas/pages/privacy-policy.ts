import { FcPrivacy } from 'react-icons/fc';
import type { Rule } from 'sanity';

export default {
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  icon: FcPrivacy,
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
      name: 'description',
      type: 'blockContent',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
  },
};
