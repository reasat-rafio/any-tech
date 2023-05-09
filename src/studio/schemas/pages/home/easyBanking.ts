import { FcMoneyTransfer, FcServices } from 'react-icons/fc';
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
      name: 'integratedTechnologyFlow',
      type: 'array',
      validation: (Rule: Rule) => Rule.length(4),
      of: [
        {
          name: 'technology',
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
};

export default easyBanking;
