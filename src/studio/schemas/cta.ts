import { GrAction } from 'react-icons/gr';
import { FcLink } from 'react-icons/fc';
import type { Rule } from 'sanity';

export default {
  name: 'common.cta',
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
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'links',
      type: 'array',
      validation: (Rule: Rule) => Rule.max(2),
      of: [
        {
          name: 'link',
          type: 'object',
          icon: FcLink,
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
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'variant',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
              options: {
                list: ['outline', 'solid'],
                layout: 'radio',
              },
              initialValue: 'solid',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
};
