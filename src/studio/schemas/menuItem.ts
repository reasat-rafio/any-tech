import { MdLink } from "react-icons/md";

// type MdLink = any;

export default {
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "href",
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
