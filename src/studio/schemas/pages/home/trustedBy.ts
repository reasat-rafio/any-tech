import { MdVerifiedUser, MdOutlineTextSnippet } from 'react-icons/md';
import type { Rule } from 'sanity';

export default {
  name: 'homePage.trustedBy',
  type: 'object',
  title: 'Trusted By',
  icon: MdVerifiedUser,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'details',
      type: 'array',
      validation: (Rule: Rule) => Rule.required().min(1),
      of: [
        {
          name: 'detail',
          type: 'object',
          icon: MdOutlineTextSnippet,
          fields: [
            {
              name: 'frontSymbol',
              type: 'string',
            },
            {
              name: 'number',
              type: 'number',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'backSymbol',
              type: 'string',
            },
            {
              name: 'description',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'number',
              subtitle: 'description',
            },
          },
        },
      ],
    },
    {
      name: 'logos',
      type: 'array',
      validation: (Rule: Rule) => Rule.required().min(1),
      of: [
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
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: IPrepare) {
      return {
        title,
        subtitle: 'Trusted By',
      };
    },
  },
};
