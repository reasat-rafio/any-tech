import { MdLink } from "react-icons/md";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

export default [
  {
    group: "footer",
    name: "footerLogo",
    title: "Footer Logo",
    type: "image",
    options: {
      accept: "image/png, image/jpeg, image/webp",
    },
  },
  {
    group: "footer",
    title: "Cookie Message",
    type: "object",
    name: "cookie",
    fields: [
        {
            name: "btn",
            type: "string",
            title: "Button Text",
        },
        {
            name: "message",
            type: "string",
            title: "Cookie message",
        }
    ]

  },
  {
    group: "footer",
    title: "Footer Contents",
    type: "array",
    name: "footerContents",
    of: [
      {
        type: "object",
        name: "footerLinks",
        fields: [
          {
            name: "title",
            type: "string",
            title: "Title",
          },
          {
            name: "links",
            type: "array",
            title: "Links",
            of: [{ type: "link" }],
          },
        ],
        preview: {
          select: {
            title: "title",
          },
          prepare({ title }: IPrepare) {
            return {
              title: title,
              media: MdLink,
            };
          },
        },
      },
      {
        type: "object",
        name: "footerContent",
        fields: [
          {
            name: "title",
            type: "string",
            title: "Title",
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
              title: title,
              media: BsFillFileEarmarkTextFill,
            };
          },
        },
      },
    ],
  },
  {
    group: "footer",
    type: "blockContent",
    name: "footerCopyRight",
    title: "Footer CopyRight",
  },
];
