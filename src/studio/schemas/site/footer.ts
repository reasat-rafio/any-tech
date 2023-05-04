import { MdLink } from 'react-icons/md';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';

export default [
  {
    group: 'footer',
    title: 'Footer Contents',
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
      {
        type: 'object',
        name: 'footerContent',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
          },
          {
            name: 'description',
            type: 'blockContent',
          },
        ],
        preview: {
          select: {
            title: 'title',
          },
          prepare({ title }: IPrepare) {
            return {
              title: title,
              media: BsFillFileEarmarkTextFill,
            };
          },
        },
      },
    ],
  },
  {
    group: 'footer',
    type: 'blockContent',
    name: 'footerCopyRight',
    title: 'Footer CopyRight',
  },
];
