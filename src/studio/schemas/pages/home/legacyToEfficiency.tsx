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
      name: 'image',
      type: 'image',
      // validation: (Rule: Rule) => Rule.required(),
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

    {
      name: 'diagram',
      type: 'array',

      // validation: (Rule: Rule) =>
      //   Rule.required()
      //     .length(3)
      //     .custom((items: any[]) => {
      //       // Check if there is exactly one item with root: true
      //       const roots = items.filter((item) => item.root);
      //       if (roots?.length !== 1) {
      //         return 'There must be exactly one item with root: true.';
      //       }
      //       return true;
      //     }),
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
      name: 'solutions',
      type: 'array',
      // validation: (Rule: Rule) => Rule.required(),
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
