import { AiFillShop } from "react-icons/ai";
export default {
  name: "homePage.business",
  type: "object",
  title: "Business",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: IPrepare) {
      return {
        title,
        subtitle: "Krypton's Business",
        media: AiFillShop,
      };
    },
  },
};
