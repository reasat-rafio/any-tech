import { GiStairsGoal } from 'react-icons/gi';
import type { Rule } from 'sanity';

const mission = {
  name: 'aboutPage.mission',
  title: 'Mission',
  type: 'object',
  icon: GiStairsGoal,
  fields: [
    {
      name: 'missions',
      type: 'array',
      of: [
        {
          name: 'mission',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'description',
              type: 'text',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'image',
              type: 'image',
              validation: (Rule: Rule) => Rule.required(),
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                  description: 'Important for SEO and accessibility',
                  validation: (Rule: Rule) => Rule.required(),
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Our Mission',
    }),
  },
};

export default mission;
