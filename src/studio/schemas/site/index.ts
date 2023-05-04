import { CgWebsite } from "react-icons/cg";
import footer from "./footer";
import navbar from "./navbar";
export default {
  name: "site",
  title: "Site Config",
  type: "document",
  icon: CgWebsite,
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "navbar",
      title: "Navbar",
    },
    {
      name: "footer",
      title: "Footer",
    },
  ],

  fields: [
		{
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      group: "seo",
      name: "ogImage",
      type: "image",
      title: "Default SEO Image",
      options: {
        accept: "image/png, image/jpeg, image/webp",
      },
    },
    {
      group: "seo",
      name: "favicon",
      type: "image",
      title: "Favicon",
      options: {
        accept: "image/png, image/jpeg, image/webp",
      },
    },
    // nav bar
    ...navbar,

    // footer
    ...footer,
  ],
  preview: {
    select: {
      media: "logo",
    },
    prepare({ media }: IPrepare) {
      return {
        title: "Site Config",
        media,
      };
    },
  },
};
