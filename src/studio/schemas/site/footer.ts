import { MdLink } from 'react-icons/md';
import type { Rule } from 'sanity';

export default [
  {
    group: 'footer',
    type: 'array',
    name: 'footerContents',
    validation: (Rule: Rule) => Rule.required().min(1).length(3),
    of: [
      {
        type: 'object',
        name: 'footerLinks',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule: Rule) => Rule.required(),
          },
          {
            name: 'links',
            type: 'array',
            title: 'Links',
            validation: (Rule: Rule) => Rule.required().min(1),
            of: [{ type: 'link' }],
          },
        ],
        preview: {
          select: {
            title: 'title',
          },
          prepare({ title }: IPrepare) {
            return {
              title: title,
              media: MdLink,
            };
          },
        },
      },
    ],
  },
  {
    group: 'footer',
    type: 'array',
    name: 'socialLinks',
    of: [
      {
        type: 'iconLink',
        name: 'iconLink',
      },
    ],
  },
  {
    group: 'footer',
    type: 'blockContent',
    name: 'footerCopyRight',
    title: 'Footer CopyRight',
    validation: (Rule: Rule) => Rule.required(),
  },
  {
    group: 'footer',
    type: 'array',
    name: 'footerBottomLinks',
    of: [
      {
        type: 'link',
        name: 'link',
      },
    ],
  },
  {
    group: 'footer',
    type: 'blockContent',
    name: 'poweredBy',
    title: 'Powered By Text',
    validation: (Rule: Rule) => Rule.required(),
  },
];
