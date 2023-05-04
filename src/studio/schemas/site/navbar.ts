export default [
  {
    name: "logo",
    title: "Logo",
    type: "image",
    fields: [
      {
        name: "alt",
        title: "Alternative Text",
        description: "Important for SEO and accessibility",
        type: "string",
      },
      {
        name: "title",
        title: "Image Title",
        description: "This will show when someone hover over the image",
        type: "string",
      },
    ],
    group: "navbar",
  },

  {
    name: "navMenus",
    title: "Nav Menus",
    type: "array",
    of: [{ type: "menuItems" }],
    group: "navbar",
  },
];
