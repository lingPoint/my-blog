import { defineConfig } from "blogkit";
import { request } from "blogkit-notion";
import { theme } from "blogkit-theme-minimal";

export default defineConfig({
  siteConfig: {
    title: "Zerox",
    author: "Zerox",
    url: "https://my-blog-delta-sooty.vercel.app",
  },
  theme,
  themeConfig: {
    links: [
      {
        name: "GitHub",
        url: "https://github.com/lingPoint",
      },
      //{
      //  name: "Twitter",
      //  url: "https://my-blog-delta-sooty.vercel.app",
      // },
      {
        name: "RSS",
        url: "/api/rss",
      },
    ],
    introduceHTML: `
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <script>
      function myFunction() {
      document.getElementsByClassName("my-16")[0].style.display="none";
      }
      </script>
    `,
  },
  request,
});
