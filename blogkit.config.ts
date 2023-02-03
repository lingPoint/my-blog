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
      //  url: "https://twitter.com/_2nthony",
      // },
      {
        name: "RSS",
        url: "/api/rss",
      },
    ],
    introduceHTML: `
      <p>我是一名普通的程序员，擅长 web 前端开发，现生活在广州。</p>
      <p>我的目标是真正的成为一名自由职业者，拥有一些小产品，并进入 FIRE(Financial Independence Retire Early) 人生。</p>
      <script>
    document.getElementById("text-sm").onclick = function () {
        //隐藏div的三种方式

        // document.getElementById("text-sm").style.display = "none";// 不占位
        // document.getElementById("text-sm").style.visibility="hidden";//占位
        // document.getElementById("text-sm").style.opacity=0;//占位

        document.getElementById("text-sm").style.height="0px";
        //document.getElementById("text-sm").style.border="0px red solid";//占位

    }
</script>
    `,
  },
  request,
});
