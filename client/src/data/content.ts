import type { Portfolio } from "@/types/content";
import contentData from "./content.json";

interface ContentData {
  portfolio: Portfolio[];
}

const content = contentData as ContentData;

export const portfolio: Portfolio[] = content.portfolio;

