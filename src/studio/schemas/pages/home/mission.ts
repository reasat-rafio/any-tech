import { BsFillFlagFill } from "react-icons/bs";
export default {
  name: "homePage.mission",
  type: "object",
  title: "Mission",
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
      subtitle: "missions",
    },
    prepare({ title }: IPrepare) {
      return {
        title,
        subtitle: "Missions",
        media: BsFillFlagFill,
      };
    },
  },
};
