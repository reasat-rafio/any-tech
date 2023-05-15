import { MdLink } from 'react-icons/md';
import type { Rule } from 'sanity';

export default {
  name: 'menuItems',
  title: 'Menu Items',
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
    {
      name: 'highlight',
      title: 'Highlight',
      type: 'boolean',
    },
    {
      name: 'subMenus',
      title: 'Sub Menus',
      type: 'array',
      of: [{ type: 'menuItem' }],
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
