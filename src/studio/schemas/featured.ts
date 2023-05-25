import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import type { Rule } from 'sanity';

const commonFeatured = {
  name: 'common.featured',
  type: 'object',
  title: 'Featured Content',
  icon: MdOutlineFeaturedPlayList,
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
      validation: (Rule: Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          validation: (Rule: Rule) => Rule.required(),
        },
        {
          name: 'title',
          type: 'string',
          description: 'Will be displayed below the image as a title.',
        },
      ],
    },
    {
      name: 'mobileImgPosition',
      type: 'string',
      description:
        'This value will be used to position the image on mobile screens.',
      options: {
        list: ['top', 'bottom'],
        layout: 'radio',
      },
      initialValue: 'top',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
};

export default commonFeatured;
