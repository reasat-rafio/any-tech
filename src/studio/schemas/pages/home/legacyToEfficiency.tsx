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
              name: 'icon',
              type: 'image',
              description: 'Only SVGs allowed.',
              options: {
                accept: '.svg',
              },
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'root',
              type: 'boolean',
              initialValue: false,
            },
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
          ],
          preview: {
            select: {
              title: 'name',
              isRoot: 'root',
              subtitle: 'platform',
              media: 'icon',
            },
            prepare: ({
              title,
              isRoot,
              subtitle,
              media,
            }: {
              [key: string]: string;
            }) => ({
              title: `${title} ${!!isRoot ? ' | isRoot' : ''}`,
              subtitle,
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
              name: 'icon',
              type: 'image',
              options: {
                accept: '.svg',
              },
              description: 'Only SVGs allowed.',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'name',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
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
              media: 'icon',
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
