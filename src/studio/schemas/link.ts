import { MdLink } from "react-icons/md";

// type MdLink = any;

export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "href",
      // footer
      title: "URL",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "href",
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
