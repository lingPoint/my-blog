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
      <p>对.这是一个博客</p>
      <p id="hitokoto">
  	<a href="#" id="hitokoto_text">:D 获取中...</a>
	</p>
	<script>
	  fetch('https://v1.hitokoto.cn')
	    .then(response => response.json())
	    .then(data => {
	      const hitokoto = document.querySelector('#hitokoto_text')
	      hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
	      hitokoto.innerText = data.hitokoto
	    })
	    .catch(console.error)
	</script>
      <script type="text/javascript">
      window.onload = function(){
	    document.getElementsByClassName("my-16")[0].style.display="none";
      }
      </script>
    `,
  },
  request,
});
