import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
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
});