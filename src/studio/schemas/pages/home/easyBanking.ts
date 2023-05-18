import { FcMoneyTransfer, FcServices, FcFlashOn } from 'react-icons/fc';
import type { Rule } from 'sanity';

const easyBanking = {
  name: 'homePage.easyBanking',
  title: 'Easy Banking',
  type: 'object',
  icon: FcMoneyTransfer,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'blockContent',
      validation: (Rule: Rule) => Rule.required(),
    },

    {
      name: 'diagram',
      type: 'array',
      validation: (Rule: Rule) => Rule.length(4),
      of: [
        {
          name: 'item',
          type: 'object',
          icon: FcServices,
          fields: [
            {
              name: 'name',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'platform',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'service',
              type: 'text',
              validation: (Rule: Rule) => Rule.required(),
            },

            {
              name: 'colors',
              type: 'object',
              fields: [
                {
                  name: 'from',
                  type: 'color',
                  validation: (Rule: Rule) => Rule.required(),
                },
                {
                  name: 'to',
                  type: 'color',
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'platform',
            },
          },
        },
      ],
    },
    {
      name: 'solutions',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          name: 'solution',
          type: 'object',
          icon: FcFlashOn,
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'platform',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },

            {
              name: 'description',
              type: 'array',
              of: [{ type: 'block' }],
              validation: (Rule: Rule) => Rule.required(),
            },
            { name: 'link', type: 'link' },
            {
              name: 'image',
              type: 'image',
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
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'platform',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
};

export default easyBanking;
