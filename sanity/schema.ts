import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import product from "./schemas/product";
import banner from "./schemas/banner";
import order from "./schemas/order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, blockContent, category, order, product],
};