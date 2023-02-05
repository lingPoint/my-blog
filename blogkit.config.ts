import { defineConfig } from "blogkit";
import { request } from "blogkit-notion";
//import { request } from "./blogkit/request";
//import { theme } from "blogkit-theme-minimal";
import { theme } from "./blogkit-theme-minimal/src/index";

export default defineConfig({
  siteConfig: {
    title: "Zerox",
    author: "Zerox",
    url: "https://zerox.cc/",
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
      <p>对.这是一个博客</p>
      <p id="hitokoto">
      <a href="#" id="hitokoto_text"></a>
      </p>
      <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    `,
  },
  request,
});
