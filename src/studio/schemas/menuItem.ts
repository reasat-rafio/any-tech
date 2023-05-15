import { MdLink } from 'react-icons/md';
import type { Rule } from 'sanity';

export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'href',
      title: 'URL',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'href',
    },
    prepare({ title, subtitle }: IPrepare) {
      return {
        title: title,
        subtitle: subtitle,
        media: MdLink,
      };
    },
  },
};
