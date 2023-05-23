import type { StructureBuilder } from 'sanity/desk';
interface ListItem {
  title: string;
  id: string;
  schemaType: string;
}

const documentPageItem = (
  S: StructureBuilder,
  { schemaType, id, title }: ListItem
) => {
  return S.listItem()
    .title(title)
    .id(id)
    .schemaType(schemaType)
    .child(
      S.documentList()
        .title(title)
        .filter(
          `_type == "${schemaType}" && (!defined(language) || language == $baseLang)`
        )
        .params({ baseLang: 'en-SG' })
    );
};

export function newDeskStructure(S: StructureBuilder) {
  return S.list()
    .title('Content')
    .id('__root__')
    .items([
      documentPageItem(S, {
        title: 'Site Config',
        id: 'site',
        schemaType: 'site',
      }),
      S.divider(),
      documentPageItem(S, {
        title: 'Home',
        id: 'homePage',
        schemaType: 'homePage',
      }),
      documentPageItem(S, {
        title: 'About',
        id: 'aboutPage',
        schemaType: 'aboutPage',
      }),
      documentPageItem(S, {
        title: 'Privacy Policy',
        id: 'privacyPolicy',
        schemaType: 'privacyPolicy',
      }),
    ]);
}
