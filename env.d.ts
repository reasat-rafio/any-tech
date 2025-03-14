/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_STUDIO_PROJECT_ID: string;
  readonly PUBLIC_SANITY_STUDIO_DATASET: string;
  // more env variables...
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
