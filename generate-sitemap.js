import SitemapGenerator from "sitemap-generator";
// Create a generator
const generator = SitemapGenerator("https://www.rajchal.me", {
  stripQuerystring: false,
  filepath: "./public/sitemap.xml", // Path where sitemap will be saved
  maxEntriesPerFile: 50000, // Maximum number of entries per sitemap file
  maxDepth: 0, // Maximum depth of URLs to include
});

// Register event listeners
generator.on("add", (url) => {
  console.log(`Added: ${url}`);
});

generator.on("done", () => {
  console.log("Sitemap created!");
});

generator.on("error", (error) => {
  console.error(`Error: ${error}`);
});

// Start the crawler
generator.start();
