import { FcHome } from 'react-icons/fc';
import type { Rule } from 'sanity';

const commonHero = {
  name: 'common.hero',
  type: 'object',
  title: 'Hero',
  icon: FcHome,
  fields: [
    {
      name: 'title',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
};

export default commonHero;
