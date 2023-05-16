import { GrAction } from 'react-icons/gr';
import type { Rule } from 'sanity';

export default {
  name: 'homePage.cta',
  type: 'object',
  title: 'CTA',
  icon: GrAction,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'blockContent',
    },
    {
      name: 'button',
      type: 'link',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
};
