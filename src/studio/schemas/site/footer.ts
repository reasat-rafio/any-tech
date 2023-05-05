import { MdLink } from 'react-icons/md';

export default [
  {
    group: 'footer',
    type: 'array',
    name: 'footerContents',
    of: [
      {
        type: 'object',
        name: 'footerLinks',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
          },
          {
            name: 'links',
            type: 'array',
            title: 'Links',
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
];
