import { FcLink } from 'react-icons/fc';
import { MdLink } from 'react-icons/md';

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: FcLink,
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'href',
      title: 'URL',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'href',
    },
    prepare({ title, subtitle }: IPrepare) {
      return {
        title: title,
        subtitle: subtitle,
        media: MdLink,
      };
    },
  },
};
