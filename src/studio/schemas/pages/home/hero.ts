import { FcHome } from 'react-icons/fc';
import type { Rule } from 'sanity';

const hero = {
  name: 'homePage.hero',
  type: 'object',
  title: 'Hero',
  icon: FcHome,
  fields: [
    {
      name: 'title',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          type: 'string',
          validation: (Rule: Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'links',
      type: 'array',
      validation: (Rule: Rule) => Rule.max(2),
      of: [
        {
          name: 'link',
          type: 'link',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
};

export default hero;
