import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { newDeskStructure } from './utils/deskStructure';
import { documentInternationalization } from '@sanity/document-internationalization';
import { colorInput } from '@sanity/color-input';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'AnyTech',
  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
  plugins: [
    documentInternationalization({
      supportedLanguages: [
        {
          title: 'English',
          id: 'en-SG',
        },
        {
          title: 'Chinese',
          id: 'zh-SG',
        },
      ],
      schemaTypes: ['site', 'homePage', 'privacyPolicy', 'contactUs'],
    }),
    deskTool({
      structure: newDeskStructure,
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
