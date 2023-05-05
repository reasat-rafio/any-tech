export default {
  name: 'iconLink',
  title: 'Icon Link',
  type: 'object',
  fields: [
    {
      name: 'icon',
      type: 'image',
    },
    {
      name: 'href',
      title: 'URL',
      type: 'string',
    },
  ],
  preview: {
    select: {
      subtitle: 'href',
      media: 'icon',
    },
    prepare({ subtitle, media }: IPrepare) {
      return {
        title: 'Icon Link',
        subtitle,
        media,
      };
    },
  },
};
