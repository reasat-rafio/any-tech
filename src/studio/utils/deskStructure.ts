import type { ListItemBuilder, StructureBuilder } from "sanity/desk";
interface IDocumentItem {
  title: string;
  id: string;
  schemaType: string;
}

const documentItem = (
  S: StructureBuilder,
  { schemaType, id, title }: IDocumentItem
) => {
  return S.listItem()
    .title(title)
    .schemaType(schemaType)
    .child(S.document().schemaType(schemaType).id(id).title(title));
};

export function newDeskStructure(S: StructureBuilder) {
  return S.list()
    .title("Content")
    .id("__root__")
    .items([
      documentItem(S, {
        title: "Site Config",
        id: "site",
        schemaType: "site",
      }),
      S.divider(),
      documentItem(S, {
        title: "Home",
        id: "homePage",
        schemaType: "homePage",
      }),
      documentItem(S, {
        title: "About Page",
        id: "aboutPage",
        schemaType: "aboutPage",
      }),
      documentItem(S, {
        title: "Our People",
        id: "ourPeoplePage",
        schemaType: "ourPeoplePage",
      }),
      documentItem(S, {
        title: "Service Page",
        id: "servicePage",
        schemaType: "servicePage",
      }),

      documentItem(S, {
        title: "Career Page",
        id: "careerPage",
        schemaType: "careerPage",
      }),

      documentItem(S, {
        title: "System Page",
        id: "systemPage",
        schemaType: "systemPage",
      }),

      documentItem(S, {
        title: "News Page",
        id: "newsPage",
        schemaType: "newsPage",
      }),

      documentItem(S, {
        title: "Press Releases Page",
        id: "pressReleasesPage",
        schemaType: "pressReleasesPage",
      }),
      documentItem(S, {
        title: "White Paper Page",
        id: "whitePaperPage",
        schemaType: "whitePaperPage",
      }),
      documentItem(S, {
        title: "Client Portal",
        id: "clientPortal",
        schemaType: "clientPortal",
      }),
      documentItem(S, {
        title: "Privacy Notice",
        id: "privacyNotice",
        schemaType: "privacyNotice",
      }),
      documentItem(S, {
        title: "Regulatory Legal",
        id: "regulatoryLegal",
        schemaType: "regulatoryLegal",
      }),
      documentItem(S, {
        title: "Complaints Handling Procedure",
        id: "complaintsHandlingProcedure",
        schemaType: "complaintsHandlingProcedure",
      }),
      documentItem(S, {
        title: "Contact Us",
        id: "contactUs",
        schemaType: "contactUs",
      }),
      documentItem(S, {
        title: "KYC",
        id: "kyc",
        schemaType: "kyc",
      }),
      documentItem(S, {
        title: "404",
        schemaType: "error404",
        id: "error404",
      }),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: ListItemBuilder) =>
          ![
            "site",
            "homePage",
            "aboutPage",
            "ourPeoplePage",
            "servicePage",
            "systemPage",
            "careerPage",
            "newsPage",
            "privacyNotice",
            "clientPortal",
            "regulatoryLegal",
            "contactUs",
            "pressReleasesPage",
            "complaintsHandlingProcedure",
            "whitePaperPage",
            "complaintsHandlingProcedure",
            "kyc",
            "error404",
          ].includes(item.getId() ?? "")
      ),
    ]);
}
