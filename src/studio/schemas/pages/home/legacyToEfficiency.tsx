import { FcFlashOn } from 'react-icons/fc';
import type { Rule } from 'sanity';

const legacyToEfficiency = {
  name: 'homePage.legacyToEfficiency',
  type: 'object',
  title: 'Legacy To Efficiency',
  icon: FcFlashOn,
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
      name: 'flowDiagram',
      type: 'array',

      validation: (Rule: Rule) =>
        Rule.required()
          .length(3)
          .custom((items: any[]) => {
            // Check if there is exactly one item with root: true
            const roots = items.filter((item) => item.root);
            if (roots?.length !== 1) {
              return 'There must be exactly one item with root: true.';
            }
            return true;
          }),
      of: [
        {
          name: 'item',
          type: 'object',
          fields: [
            {
              name: 'logo',
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
            {
              name: 'root',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'platform',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'logo',
              title: 'platform',
              isRoot: 'root',
            },
            prepare: ({ title, isRoot, media }: { [key: string]: string }) => ({
              title: `${title} ${!!isRoot ? ' | Root' : ''}`,
              media,
            }),
          },
        },
      ],
    },
    {
      name: 'businessSolutions',
      type: 'array',
      validation: (Rule: Rule) => Rule.required(),
      of: [
        {
          name: 'solution',
          type: 'object',
          fields: [
            {
              name: 'logo',
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

            {
              name: 'title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'description',
              type: 'blockContent',
              validation: (Rule: Rule) => Rule.required(),
            },
            { name: 'link', type: 'link' },
          ],
          preview: {
            select: {
              title: 'title',
              subtile: 'description',
              media: 'logo',
            },
          },
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

export default legacyToEfficiency;
