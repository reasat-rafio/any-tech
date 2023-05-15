import type { Rule } from 'sanity';

export default [
  {
    name: 'logo',
    title: 'Logo',
    type: 'image',
    validation: (Rule: Rule) => Rule.required(),
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
    group: 'navbar',
  },

  {
    name: 'navMenus',
    title: 'Nav Menus',
    type: 'array',
    of: [{ type: 'menuItems' }],
    validation: (Rule: Rule) => Rule.required().min(1),
    group: 'navbar',
  },
];
