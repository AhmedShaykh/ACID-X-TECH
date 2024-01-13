import { apiVersion, dataset, projectId } from "./sanity/env";
import StudioHeader from "@/Components/StudioHeader";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schema";
import { defineConfig } from "sanity";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion })
  ],
  studio: {
    components: {
      navbar: StudioHeader
    }
  },
});