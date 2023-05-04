import { BsFillFileEarmarkTextFill } from "react-icons/bs";
export default {
  name: "homePage.hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "text",
    },
    {
      name: "contentList",
      type: "array",
      of: [
        {
          name: "content",
          type: "object",
          fields: [
            {
              name: "title",
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
                media: BsFillFileEarmarkTextFill,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }: IPrepare) {
      return {
        title,
        subtitle: "About Krypton",
        media: BsFillFileEarmarkTextFill,
      };
    },
  },
};
