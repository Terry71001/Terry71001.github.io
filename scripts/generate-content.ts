import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  portfolio: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    portfolio: [],
  };

  // Load portfolio
  try {
    const portfolioDir = resolve(contentPath, "portfolio");
    const portfolioFiles = await readdir(portfolioDir);
    for (const file of portfolioFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(portfolioDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const project = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          project.slug = slug;
          // Validate image URL
          if (project.imageUrl && !project.imageUrl.startsWith("/attached_assets/")) {
            console.warn(`Warning: Portfolio "${project.title}" imageUrl should start with "/attached_assets/": ${project.imageUrl}`);
          }
          data.portfolio.push(project);
        }
      }
    }
    // Sort by year descending, then by id
    data.portfolio.sort((a, b) => {
      const yearCompare = (b.year || "").localeCompare(a.year || "");
      if (yearCompare !== 0) return yearCompare;
      return (b.id || "").localeCompare(a.id || "");
    });
  } catch (error) {
    console.warn("Failed to load portfolio:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Portfolio: ${data.portfolio.length}`);
}

generateContent().catch(console.error);

