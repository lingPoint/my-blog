import { defineConfig } from "blogkit";
import { request } from "blogkit-notion";
import { theme } from "blogkit-theme-minimal";

export default defineConfig({
  siteConfig: {
    title: "Blogkit Notion",
    author: "2nthony",
    url: "https://blogkit.vercel.app",
  },
  theme,
  request,
});
