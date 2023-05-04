import client from "@sanity/client";

export const sanityClient = client({
  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
  apiVersion: "2021-10-21",
  useCdn: true,
});
