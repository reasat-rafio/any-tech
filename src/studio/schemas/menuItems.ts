import { MdLink } from "react-icons/md";

export default {
  name: "menuItems",
  title: "Menu Items",
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
    {
      name: "subMenus",
      title: "Sub Menus",
      type: "array",
      of: [{ type: "menuItem" }],
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
