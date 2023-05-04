import { SiReasonstudios } from 'react-icons/si';
export default {
  name: 'homePage.whyKrypton',
  type: 'object',
  title: 'Why Krypton',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: IPrepare) {
      return {
        title,
        subtitle: 'Why Krypton',
        media: SiReasonstudios,
      };
    },
  },
};
