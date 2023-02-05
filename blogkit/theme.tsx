import { HomePageProps, PostPageProps } from "blogkit";
import Link from "next/link";
import style from "../styles/theme.module.css";

// Home page(post list page)
function Home({ posts, siteConfig }: HomePageProps) {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <h1 className={style.title}>
          <Link href={"/"}>
            <a>{siteConfig.title}</a>
          </Link>
        </h1>
        <div className={style.posts}>
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={"/" + post.attributes.slug}>
                    <a>{post.attributes.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// post page(markdown page)
function Post({ post, siteConfig }: PostPageProps) {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <h3>
          <Link href={"/"}>{siteConfig.title}</Link>
        </h3>

        <article
          className={style.postBody}
          dangerouslySetInnerHTML={{ __html: post.html || "" }}
        ></article>
      </div>
    </div>
  );
}

export const theme = {
  Home,
  Post,
};
